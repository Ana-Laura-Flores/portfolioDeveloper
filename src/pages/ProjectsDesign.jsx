import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DESIGN_PROJECTS } from "../data/projects";

export default function ProjectsDesign() {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onWheel = (e) => {
            if (window.innerWidth < 768) return;

            // Detectamos si el mouse está sobre una galería interna
            const isOverGallery = e.target.closest(".inner-gallery");

            if (isOverGallery) {
                const { scrollTop, scrollHeight, clientHeight } = isOverGallery;
                const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
                const isAtTop = scrollTop <= 0;

                // Si hay contenido para scrollear arriba/abajo dentro de la foto, permitimos el scroll natural
                // Pero si ya llegó al tope o al final, "liberamos" el scroll horizontal para que siga el portfolio
                if (
                    (e.deltaY > 0 && !isAtBottom) ||
                    (e.deltaY < 0 && !isAtTop)
                ) {
                    return; // Deja que scrollee la foto
                }
            }

            // Si no hay galería o ya llegó al límite de la galería, scrollea horizontal
            e.preventDefault();
            el.scrollTo({
                left: el.scrollLeft + e.deltaY * 3,
                behavior: "smooth",
            });
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    return (
        <div className="w-full h-screen bg-[#050508] text-white flex flex-col relative overflow-hidden font-sans">
            <nav className="p-8 md:p-12 flex justify-between items-center z-50 shrink-0">
                <button
                    onClick={() => navigate("/")}
                    className="text-[10px] tracking-[0.4em] uppercase font-black opacity-40 hover:opacity-100 transition-all"
                >
                    ← Volver
                </button>
                <p className="text-[10px] font-mono opacity-20 tracking-[0.3em] uppercase underline underline-offset-8">
                    Gallery_Focus
                </p>
            </nav>

            <div
                ref={scrollRef}
                className="flex-1 flex flex-col md:flex-row md:items-center overflow-y-auto md:overflow-y-hidden md:overflow-x-auto px-6 md:px-[10vw] gap-24 md:gap-[15vw] no-scrollbar pb-20 md:pb-0"
            >
                {DESIGN_PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="relative min-w-full md:min-w-[70vw] flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-center flex-shrink-0 group"
                    >
                        {/* CONTENEDOR DE IMÁGENES: Ahora con scroll vertical suave */}
                        <div className="inner-gallery w-full md:w-[55%] max-w-[650px] aspect-[4/3] bg-neutral-900 border border-white/5 overflow-y-auto overflow-x-hidden relative shadow-2xl flex-shrink-0 snap-y snap-mandatory scroll-smooth no-scrollbar">
                            {project.gallery && project.gallery.length > 0 ? (
                                project.gallery.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full shrink-0 snap-start"
                                    >
                                        <img
                                            src={image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))
                            ) : (
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {project.gallery?.length > 1 && (
                                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[8px] font-mono tracking-widest uppercase border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Scroll Inside ↓
                                </div>
                            )}
                        </div>

                        {/* INFO */}
                        <div className="w-full md:w-[35%] max-w-[420px]">
                            <header className="mb-6">
                                <span className="text-fuchsia-600 font-mono text-[9px] tracking-[0.4em] uppercase block mb-3 font-bold underline underline-offset-4 decoration-fuchsia-500/30">
                                    {project.category}
                                </span>
                                <h3 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.8] tracking-tighter">
                                    {project.title}
                                </h3>
                            </header>

                            <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-6 font-sans line-clamp-4 md:line-clamp-5 max-w-sm">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-4 opacity-20 text-[8px] font-mono tracking-[0.3em] uppercase italic">
                                <span>0{project.id}</span>
                                <div className="w-8 h-px bg-white/50"></div>
                                <span>2026</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="hidden md:block min-w-[20vw] h-px flex-shrink-0" />
            </div>

            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; } 
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

            {/* BOTÓN FLOTANTE DE CONTACTO DIRECTO (Páginas internas) */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-50">
                <a
                    href="https://wa.me/5491149468032?text=Hola%20Ana!%20Estaba%20viendo%20tus%20proyectos%20y%20me%20interes%C3%B3%20tu%20trabajo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-[#0a0a0f] border border-white/10 hover:border-cyan-400/50 rounded-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-all duration-300 group"
                >
                    <div className="flex flex-col text-right">
                        <span className="text-[7px] font-mono tracking-widest text-white/40 uppercase">
                            ¿Tenés un proyecto?
                        </span>
                        <span className="text-[10px] font-mono tracking-wider font-bold text-white group-hover:text-cyan-400 transition-colors">
                            CONTRATAR_
                        </span>
                    </div>
                    {/* Círculo con gradiente indicativo */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400 p-px flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                        <div className="w-full h-full bg-[#050508] rounded-full flex items-center justify-center text-xs font-bold text-cyan-400 group-hover:text-white">
                            →
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
