import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const path = window.location.pathname;

  // Toggle Tema (dark/light)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const linkStyle = (href) =>
    `relative transition ${
      path === href
        ? "text-fuchsia-300"
        : "text-white/80 hover:text-fuchsia-300"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 dark:bg-black/20 border-b border-white/10 shadow-lg">

      {/* Glow Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 blur-[2px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent tracking-wide"
        >
          KrearDiseño
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium">

          <a href="/" className={linkStyle("/")}>
            Home
            {/* Active underline neon */}
            {path === "/" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-400 to-cyan-300 animate-pulse"></span>
            )}
          </a>

          <a href="/portfolio" className={linkStyle("/portfolio")}>
            Portfolio
            {path === "/portfolio" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-400 to-cyan-300 animate-pulse"></span>
            )}
          </a>

          <a href="/contacto" className={linkStyle("/contacto")}>
            Contacto
            {path === "/contacto" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-400 to-cyan-300 animate-pulse"></span>
            )}
          </a>

          {/* Toggle Dark Mode */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm text-white/90 border border-white/20"
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4 text-white text-lg">
          <a href="/" className={linkStyle("/")}>Home</a>
          <a href="/portfolio" className={linkStyle("/portfolio")}>Portfolio</a>
          <a href="/contacto" className={linkStyle("/contacto")}>Contacto</a>

          {/* Toggle Dark Mode mobile */}
          <button
            onClick={toggleTheme}
            className="mt-3 w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm border border-white/20"
          >
            {theme === "dark" ? "☀ Light mode" : "🌙 Dark mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
