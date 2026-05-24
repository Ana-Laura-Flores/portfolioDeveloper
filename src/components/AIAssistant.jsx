import { useState, useRef, useEffect } from "react"; // <-- Corregido el useState acá

const SYSTEM_PROMPT = `
Sos el asistente virtual de Ana Laura Flores (Estudio: Krear). Tu objetivo es responder en español rioplatense (Argentina) con onda, creatividad y profesionalidad.
Información clave de Ana:
- Hace desarrollo Frontend Avanzado (React, Tailwind CSS, JavaScript) y soluciones ágiles No-Code para PyMEs.
- Fuerte en Identidad de Marca (Branding) y Diseño UX/UI.
- Casos de Éxito: 'Metal Air' (catálogo B2B industrial optimizado), 'Panthro'/'Panthro Vision' (interfaz frontend moderna de alto rendimiento), 'Nobles y Cía' y 'Vísteme Linda' (Branding y UX/UI a medida), 'Innova Vision' (catálogo e instrumental óptico).
Reglas: Sé conciso (máximo 3 oraciones). No inventes precios. Si el cliente quiere cotizar, decile amablemente que toque el botón de WhatsApp.
`;

export default function AIAssistant({ isOpen, setIsOpen, messages, setMessages, loading, setLoading }) {
    const chatEndRef = useRef(null);
    const [input, setInput] = useState(""); // <-- Ahora sí está definido correctamente

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

   const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        
        // 1. Actualizamos el historial que se va a mostrar en la interfaz de pantalla
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);

        // 2. Filtramos el historial para Groq: eliminamos el saludo inicial ficticio si existe
        // Nos aseguramos de mandar solo los mensajes reales donde el usuario ya interactuó
        const apiMessagesHistory = updatedMessages.filter((m, index) => {
            // Si es el primer mensaje del array y es un saludo del asistente, lo salteamos para la API
            if (index === 0 && m.role === "assistant") return false;
            return true;
        });

        try {
            const response = await fetch(
                "https://api.groq.com/openai/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        model: "llama-3.1-8b-instant",
                        messages: [
                            { role: "system", content: SYSTEM_PROMPT },
                            ...apiMessagesHistory.map((m) => ({
                                role: m.role,
                                content: m.content,
                            }))
                        ],
                        temperature: 0.7,
                        max_tokens: 150,
                    }),
                },
            );

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Detalle del error de Groq:", errorData);
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            const aiReply = data.choices[0].message.content;

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: aiReply },
            ]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Disculpame, se me cortó la conexión. ¿Me repetís?",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-24 right-6 md:bottom-28 md:right-12 z-50 font-mono">
            <div className="w-[320px] sm:w-[360px] h-[450px] bg-[#050508] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
                {/* Header */}
                <div className="p-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-bold tracking-wider text-cyan-400 uppercase">
                            Krear_Assistant_v1.0
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/40 hover:text-white text-xs"
                    >
                        [X]
                    </button>
                </div>

                {/* Mensajes */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs no-scrollbar">
                    {messages.map((m, i) => (
                        <div
                            key={i}
                            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[85%] p-3 rounded-lg leading-relaxed ${
                                    m.role === "user"
                                        ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 rounded-br-none"
                                        : "bg-white/5 border border-white/5 text-white/80 rounded-bl-none"
                                }`}
                            >
                                {m.content}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-white/5 border border-white/5 text-cyan-400/50 p-3 rounded-lg animate-pulse">
                                Pensando...
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Form */}
                <form
                    onSubmit={sendMessage}
                    className="p-3 bg-white/5 border-t border-white/5 flex gap-2"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Preguntame por Metal Air, React..."
                        className="flex-1 bg-black/40 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50"
                    />
                    <button
                        type="submit"
                        className="px-3 bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black text-xs font-bold rounded hover:opacity-90 transition-opacity"
                    >
                        {">"}
                    </button>
                </form>
            </div>
        </div>
    );
}