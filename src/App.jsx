import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsWeb from "./pages/ProjectsWeb";
import ProjectsDesign from "./pages/ProjectsDesign";
import AIAssistant from "./components/AIAssistant"; 
function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-[#050508] relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diseno" element={<ProjectsDesign />} />
          <Route path="/web" element={<ProjectsWeb />} />
        </Routes>

        <AIAssistant />
      </main>
    </BrowserRouter>
  );
}

export default App;