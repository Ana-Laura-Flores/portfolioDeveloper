/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🔥 habilita modo oscuro con class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🔥 Animaciones extra (para futuros efectos cyber)
      keyframes: {
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
        glitch: {
          "0%": { clip: "rect(0, 9999px, 0, 0)" },
          "50%": { clip: "rect(0, 9999px, 100%, 0)" },
          "100%": { clip: "rect(0, 9999px, 0, 0)" },
        },
      },
      animation: {
        gridMove: "gridMove 8s linear infinite",
        glitch: "glitch 0.7s infinite",
      },

      // 🔥 Colores personalizados (opcional)
      colors: {
        neonPink: "#f012be",
        neonCyan: "#00e5ff",
      },

      // 🔥 Filtros blur extra
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
