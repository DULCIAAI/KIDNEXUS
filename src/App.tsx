import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { usePageTransition } from "./hooks/usePageTransition";
import LoadingMap from "./components/LoadingMap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Programs from "./pages/Programs";
import KuwaProgram from "./pages/KuwaProgram";
import HealthSafety from "./pages/HealthSafety";
import EcoTotoInitiative from "./pages/EcoTotoInitiative";
import Impact from "./pages/Impact";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoading, shouldShowContent } = usePageTransition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-teal/10 via-cyan-blue/10 to-magenta-pink/10 font-nunito">
      {isLoading && <LoadingMap />}
      
      <div className={`transition-opacity duration-500 ${shouldShowContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/kuwa-program" element={<KuwaProgram />} />
            <Route path="/programs/health-safety" element={<HealthSafety />} />
            <Route path="/programs/ecototo-initiative" element={<EcoTotoInitiative />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;