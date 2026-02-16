import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Quiz from "./components/Quiz";
import ChatbotButton from "./components/ChatbotButton";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>

      {/* TOGGLE */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg border border-gold text-gold hover:bg-gold/10"
        >
          {dark ? "Mode clair" : "Mode sombre"}
        </button>
      </div>

      <Hero />
      <Destinations />
      <Quiz />
      <ChatbotButton />

      {/* Texte légal prix fictifs */}
      <div className="text-center text-xs text-gray-400 py-6 px-4">
        Les prix affichés sont fictifs et utilisés uniquement à des fins pédagogiques.
      </div>
    </div>
  );
}
