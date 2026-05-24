import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WEB_PROJECTS } from "../data/projects";

export default function ProjectsWeb() {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            const onWheel = (e) => {
                if (window.innerWidth < 768 || e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 3,
                    behavior: "smooth",
                });
            };
            el.addEventListener("wheel", onWheel, { passive: false });
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return (
        <div className="w-full h-screen bg-[#050508] text-white flex flex-col overflow-hidden font-mono relative">
            {/* NAV TECH - Más compacto para ganar espacio vertical */}
            <nav className="p-6 md:px-12 md:py-8 flex justify-between items-center z-50 shrink-0">
                <button
                    onClick={() => navigate("/")}
                    className="group flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-bold opacity-50 hover:opacity-100 transition-all text-cyan-400"
                >
                    <span className="text-xl group-hover:-translate-x-2 transition-transform">
                        {"<"}
                    </span>{" "}
                    Volver
                </button>
                <div className="text-right border-r-2 border-cyan-500 pr-4">
                    <p className="text-[9px] opacity-30 tracking-[0.3em] uppercase">
                        Status: Production
                    </p>
                    <p className="text-xs font-bold uppercase text-cyan-400">
                        Dev_Portfolio_2026
                    </p>
                </div>
            </nav>

            {/* CONTENEDOR - md:items-center para centrar el bloque en la pantalla */}
            <div
                ref={scrollRef}
                className="flex-1 flex flex-col md:flex-row md:items-center overflow-y-auto md:overflow-y-hidden md:overflow-x-auto px-6 md:px-[10vw] gap-20 md:gap-40 no-scrollbar pb-20 md:pb-0"
            >
                {WEB_PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="min-w-full md:min-w-[80vw] flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center flex-shrink-0 group"
                    >
                        {/* IMAGEN: Reducimos un poco el tamaño para que el texto suba */}
                        <div className="w-full md:w-[50%] max-w-[600px] aspect-video bg-[#0a0a0c] rounded-lg border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-cyan-500/50 flex-shrink-0">
                            <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
                            </div>
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-1000 ease-out
             opacity-100 grayscale-0 
             md:opacity-60 md:grayscale 
             md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* INFO TÉCNICA: Ajustada para que quepa todo */}
                        <div className="w-full md:w-[45%] flex flex-col justify-center">
                            <span className="text-cyan-500 text-[9px] tracking-[0.5em] font-bold mb-2">
                                PROJECT_0{project.id}
                            </span>

                            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white mb-3">
                                {project.title}
                            </h3>

                            {/* Descripción con límite de líneas para evitar desbordes */}
                            <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-6 font-mono line-clamp-4 md:line-clamp-5 max-w-sm">
                                {project.description ||
                                    "Desarrollo de aplicación web de alto rendimiento enfocada en escalabilidad."}
                            </p>

                            {/* SKILLS */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech &&
                                    project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[8px] px-2 py-1 bg-cyan-500/5 text-cyan-400 border border-cyan-500/20 rounded-sm"
                                        >
                                            {t}
                                        </span>
                                    ))}
                            </div>

                            {/* BOTONES DE ACCIÓN */}
                            <div className="flex flex-wrap gap-4 mt-auto pt-4">
                                {/* Botón para ver la Web Viva */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-cyan-500 text-black text-[9px] tracking-[0.2em] uppercase font-bold hover:bg-white transition-all duration-300"
                                >
                                    Live_Demo_
                                </a>

                                {/* Botón para ver el Código */}
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-white/20 hover:border-cyan-400 text-white font-mono text-[10px] uppercase tracking-widest rounded-full transition-all hover:text-cyan-400"
                                    >
                                        GitHub_
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="hidden md:block min-w-[20vw] h-px flex-shrink-0" />
            </div>

            {/* FONDO GRID */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            ></div>

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
