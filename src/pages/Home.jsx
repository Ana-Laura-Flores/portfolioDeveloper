import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoKrear from "../assets/image/krear-logo-invertido.png";
import AIAssistant from "../components/AIAssistant"; 

export default function Home() {
    const navigate = useNavigate();
    const [hoveredSide, setHoveredSide] = useState(null);

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "¡Hola! 🚀 Soy la IA de Ana. ¿En qué te puedo ayudar hoy con tu diseño o web?",
        },
    ]);

    return (
        <div className="w-full min-h-screen md:h-screen bg-[#050508] text-white font-sans overflow-x-hidden flex flex-col relative">
            
            {/* 1. HEADER */}
            <header className="relative md:absolute top-0 w-full z-30 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="w-full md:w-auto flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full md:w-auto">
                        <img
                            src={logoKrear}
                            alt="Krear Diseño que Conecta"
                            className="h-6 md:h-8 w-auto object-contain self-start"
                        />
                        <span className="hidden md:block h-5 w-px bg-white/10"></span>
                        <h1 className="text-xs md:text-base font-medium tracking-[0.15em] uppercase leading-none text-white/60 mt-1 md:mt-0">
                            Ana Laura Flores
                        </h1>
                    </div>

                    <p className="text-[9px] md:text-[10px] font-mono opacity-30 tracking-[0.4em] mt-3 uppercase">
                        Creative_Portfolio // 2026
                    </p>

                    {/* Mobile: Frase + Botón Renovado */}
                    <div className="md:hidden mt-4 space-y-4">
                        <p className="text-xs text-white/40 font-light leading-relaxed italic max-w-[280px]">
                            "Diseño estratégico y código frontend para marcas que necesitan conectar, confiar y vender más."
                        </p>
                        
                        {!isChatOpen && (
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="flex items-center gap-3 px-4 py-2.5 
                                           bg-[#0a0a0f] border border-white/10 rounded-full 
                                           shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-mono"
                            >
                                <div className="relative flex h-2 w-2 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
                                    Krear_AI_
                                </span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Desktop: Frase + Botón Renovado */}
                <div className="hidden md:flex flex-col items-end max-w-md text-right gap-4">
                    <p className="text-sm lg:text-base text-white/40 font-light leading-relaxed border-r border-white/10 pr-4 italic pointer-events-none">
                        "Diseño estratégico y código frontend para marcas que necesitan conectar, confiar y vender más."
                    </p>
                    
                    {!isChatOpen && (
                        <button
                            onClick={() => setIsChatOpen(true)}
                            className="flex items-center gap-3 px-4 py-3 
                                       bg-[#0a0a0f] border border-white/10 hover:border-cyan-500/40 
                                       rounded-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] 
                                       hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                                       transition-all duration-300 group font-mono mr-4"
                        >
                            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                            </div>
                            <span className="text-[11px] font-bold tracking-widest text-white/80 group-hover:text-cyan-400 transition-colors uppercase">
                                Krear_AI_
                            </span>
                        </button>
                    )}
                </div>
            </header>

            {/* 2. DUALIDAD DESKTOP */}
            <div className={`hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none transition-all duration-700 ${hoveredSide ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                <div className="flex flex-col items-center">
                    <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase font-bold text-white/80">
                        <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-ping"></span>
                        Explora la dualidad
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping [animation-delay:0.5s]"></span>
                    </div>
                </div>
            </div>

            {/* 3. CONTENIDO PRINCIPAL */}
            <main className="flex-1 flex flex-col md:flex-row w-full overflow-hidden relative">
                <div className={`relative flex-1 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-center px-8 md:px-16 lg:px-24 border-b md:border-b-0 md:border-r border-white/5 overflow-hidden py-16 md:py-0 ${hoveredSide === "design" ? "md:flex-[1.6]" : hoveredSide === "web" ? "md:flex-[0.4]" : "md:flex-1"}`}>
                    <div onMouseEnter={() => setHoveredSide("design")} onMouseLeave={() => setHoveredSide(null)} className="relative z-10 w-full max-w-fit">
                        <h2 className={`transition-all duration-500 cursor-pointer ${hoveredSide === "web" ? "md:opacity-10 md:blur-md" : "opacity-100"}`}>
                            <span className="text-[11vw] md:text-[6.5vw] font-black tracking-tighter uppercase leading-[0.85] block">
                                Diseño<br /><span className="text-fuchsia-500">Gráfico</span>
                            </span>
                        </h2>
                        <div className={`mt-4 md:mt-8 transition-all duration-500 ${hoveredSide === "design" ? "opacity-100" : "opacity-100 md:opacity-0 md:translate-y-4"}`}>
                            <button onClick={() => navigate("/diseno")} className="px-8 py-3 bg-white text-black font-bold text-[10px] tracking-widest uppercase rounded-full shadow-2xl transition-all hover:bg-fuchsia-500 hover:text-white">
                                Ver Proyectos
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`relative flex-1 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden py-16 md:py-0 ${hoveredSide === "web" ? "md:flex-[1.6]" : hoveredSide === "design" ? "md:flex-[0.4]" : "md:flex-1"}`}>
                    <div onMouseEnter={() => setHoveredSide("web")} onMouseLeave={() => setHoveredSide(null)} className="relative z-10 w-full max-w-fit">
                        <h2 className={`transition-all duration-500 text-left cursor-pointer ${hoveredSide === "design" ? "md:opacity-10 md:blur-md" : "opacity-100"}`}>
                            <span className="text-[11vw] md:text-[6.5vw] font-black tracking-tighter uppercase leading-[0.85] block">
                                Desarrollo<br /><span className="text-cyan-400">Web</span>
                            </span>
                        </h2>
                        <div className={`mt-4 md:mt-8 transition-all duration-500 flex justify-start ${hoveredSide === "web" ? "opacity-100" : "opacity-100 md:opacity-0 md:translate-y-4"}`}>
                            <button onClick={() => navigate("/web")} className="px-8 py-3 bg-white text-black font-bold text-[10px] tracking-widest uppercase rounded-full shadow-2xl transition-all hover:bg-cyan-400 hover:text-white">
                                Ver Soluciones Web
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* 4. FOOTER */}
            <footer className="relative md:absolute bottom-0 w-full z-40 p-6 md:px-12 md:py-8 bg-[#0a0a0f] md:bg-transparent border-t border-white/10 md:border-t-0 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 bg-white/5 px-4 py-2 border border-white/5 rounded-full backdrop-blur-md">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                    <span>Proyectos Activos 2026 // Bs As</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <a href="https://instagram.com/kreardisenio" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-fuchsia-400 transition-all px-4 py-2.5 border border-white/10 hover:border-fuchsia-500/30 rounded-full bg-white/[0.02]">
                        IG_ @kreardisenio
                    </a>

                    <a href="https://wa.me/5491149468032?text=Hola%20Ana!%20Vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20consultarte%20por%20un%20proyecto." target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-bold text-[11px] font-mono uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(192,38,211,0.2)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.4)] transition-all duration-500 hover:scale-105">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
                        <span className="relative z-10 flex items-center gap-2">Hablemos por WhatsApp_</span>
                    </a>
                </div>
            </footer>

            {/* 5. INSTANCIA COMPONENTE ASISTENTE */}
            <AIAssistant 
                isOpen={isChatOpen} 
                setIsOpen={setIsChatOpen} 
                messages={messages}
                setMessages={setMessages}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    );
}