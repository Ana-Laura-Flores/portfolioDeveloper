// src/data/projects.js
import nobles from "../assets/image/nobles&cia.png";
import logimol from "../assets/image/logimol.jpg";
import magicJobs from "../assets/image/portada-magicJobs.jpg";
import MoviesProjects from "../assets/image/MoviesProject.jpg";
import vistemeLinda from "../assets/image/visteme-linda.jpg";
import ahorrAdas from "../assets/image/portada-proyecto.jpg";
import nobles02 from "../assets/image/noble&cia-vs.jpg";
import phantro from "../assets/image/versiones logo phantro vision optica boutique.png";
import phantro02 from "../assets/image/phantro-tarjeta.png";
import phantro03 from "../assets/image/phantro-tarjetas-dobles.png";
import phantro04 from "../assets/image/phantro-ordenes.png";
import innova01 from "../assets/image/innova-vision-catalogo.png";
import innova02 from "../assets/image/innova-vision-catalogo-2.png";
import metalair from "../assets/image/portada-metalair.jpg";
import ventekPortada from "../assets/image/Ventek-portada.jpg";
import ventekPaleta from "../assets/image/Ventek-paleta.jpg";
import ventekMockup from "../assets/image/Ventek-aplicaciones.jpg";
import ventekPost from "../assets/image/Ventek-post.jpg";
import vistemeLindaWeb from "../assets/image/portada-vistemelinda.jpg";
import vistemeLindaMobile from "../assets/image/vistemelinda-mobile.jpg";
import metalairMobile from "../assets/image/metalair-mobile.jpg";
import magicJobsMobile from "../assets/image/magicJobs-mobile.jpg";
import ahorradasMobile from "../assets/image/ahorradas-mobile.jpg";
import moviesProjectsMobile from "../assets/image/moviesProjectsMobile.jpg";
import vistemeLinda02 from "../assets/image/visteme-linda-colores.jpg";
import vistemeLinda03 from "../assets/image/visteme-linda-variaciones.jpg";
import vistemeLinda04 from "../assets/image/visteme-linda-aplicaciones.jpg";
import vistemeLinda05 from "../assets/image/visteme-linda-aplicaciones-02.jpg"

export const DESIGN_PROJECTS = [
  { 
    id: 1, 
    title: "Ventek", 
    category: "Branding & Identidad", 
    color: "from-cyan-500", 
    description: "Desarrollo de identidad visual y manual de marca para distribución. Creación de paleta cromática estratégica unificada para empaques, gráfica vehicular y canales digitales.",
    img: ventekPortada, 
    gallery: [ventekPortada, ventekPaleta, ventekMockup, ventekPost] 
  },
  { 
    id: 2, 
    title: "Visteme Linda", 
    category: "Branding & Logo", 
    color: "from-fuchsia-500", 
    description: "Rediseño integral de identidad visual y sistema de marca adaptable. Enfocado en optimizar el posicionamiento comercial y la conexión con el público objetivo en canales digitales.",
    img: vistemeLinda,
    gallery: [vistemeLinda, vistemeLinda02, vistemeLinda03, vistemeLinda04, vistemeLinda05]
  
  },
  { 
    id: 3, 
    title: "Nobles & Cía", 
    category: "Branding & Identidad", 
    color: "from-fuchsia-500", 
    description: "Diseño de marca e identidad visual corporativa centrada en la elegancia contemporánea y la tradición artesanal. Desarrollo de papelería institucional y assets comerciales.",
    img: nobles,
    imgMobile: nobles,
    gallery: [nobles, nobles02],
  },
  { 
    id: 4, 
    title: "Logimol", 
    category: "UI/UX Design", 
    color: "from-purple-500", 
    description: "Arquitectura de información, diseño de interfaz (UI) y desarrollo de sistemas de color optimizados para garantizar una navegación fluida, intuitiva y profesional.",
    img: logimol
  },
  { 
    id: 5, 
    title: "Phantro Vision", 
    category: "Branding & Identidad", 
    color: "from-purple-500", 
    description: "Diseño de identidad visual integral para óptica boutique. Desarrollo de sistema logotípico, papelería premium, tarjetas corporativas y órdenes de trabajo unificadas.",
    img: phantro02,
    gallery: [phantro02, phantro, phantro03, phantro04],
  },
  { 
    id: 6, 
    title: "Innova Vision", 
    category: "Diseño Editorial & Catálogo", 
    color: "from-purple-500", 
    description: "Diseño estratégico de catálogo digital corporativo de alta gama para instrumental óptico y de laboratorio. Estructuración visual limpia orientada a facilitar la venta técnica B2B.",
    img: innova01,
    gallery: [innova01, innova02],
  },
];

export const WEB_PROJECTS = [
  { 
    id: 1, 
    title: "Metal Air", 
    tech: ["No-Code Dev", "UX/UI Design", "Web Institucional", "Responsive Design"], 
    description: "Desarrollo web institucional para empresa de climatización industrial. Interfaz limpia y catálogo optimizado en experiencia de usuario (UX) para entornos corporativos B2B.",
    img: metalair, 
    imgMobile: metalairMobile,
    link: "https://www.metalair.com.ar",
    repo: ""
  },
 { 
    id: 2, 
    title: "Vísteme Linda", 
    tech: ["E-commerce", "Tienda Nube", "UX/UI Setup", "Responsive Design"], 
    description: "Configuración integral de plataforma e-commerce y optimización de la experiencia de usuario (UX). Integración de pasarelas de pago, sistemas de envío y maquetación visual orientada a maximizar la conversión de ventas online.",
    img: vistemeLindaWeb, 
    imgMobile: vistemeLindaMobile,    
    link: "https://vistemelinda.mitiendanube.com/",
    repo: "" 
  },
  { 
    
    id: 3, 
    title: "Magic Jobs", 
    tech: ["JavaScript", "Tailwind CSS", "Node.js"], 
    description: "Plataforma interactiva para la búsqueda y gestión de ofertas laborales. Arquitectura frontend limpia con foco en la usabilidad, velocidad de carga y diseño responsivo.",
    img: magicJobs,
    imgMobile: magicJobsMobile,
    link: "https://ana-laura-flores.github.io/magic-jobs/",
    repo: "https://github.com/Ana-Laura-Flores/magic-jobs"
  },
  { 
    id: 4, 
    title: "Movies Projects", 
    tech: ["React.js", "MaterialUI", "REST APIs"], 
    description: "Aplicación web de alto rendimiento que consume la API de TMDB. Optimización de renderizado, filtrado dinámico de datos y experiencia de usuario fluida para el consumo de contenido audiovisual.",
    img: MoviesProjects,
    imgMobile: moviesProjectsMobile,
    link: "https://movies-project-eight.vercel.app/",
    repo: "https://github.com/Ana-Laura-Flores/moviesProject"
  },
  { 
    id: 5, 
    title: "AhorrAdas", 
    tech: ["HTML5", "Tailwind CSS", "JavaScript"], 
    description: "Aplicación web orientada a las finanzas personales para el control estricto de gastos y ganancias. Lógica funcional en JS Vanilla con persistencia de datos.",
    img: ahorrAdas,
    imgMobile: ahorradasMobile,
    link: "https://ana-laura-flores.github.io/ahorradas-proyect-javascript/",
    repo: "https://github.com/Ana-Laura-Flores/ahorradas-proyect-javascript"
  },
];