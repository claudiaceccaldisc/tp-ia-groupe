import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Quiz from "./components/Quiz";
import ChatbotButton from "./components/ChatbotButton";
import { useTheme } from "./context/ThemeContext";
import { useSound } from "./context/SoundContext";
import { Sun, Moon, Volume2, VolumeX } from "lucide-react";

export default function App() {
  const { dark, toggleTheme } = useTheme();
  const { toggleAmbient, isAmbientMuted } = useSound();

  return (
    <div
      className={`${
        dark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-500`}
    >
      {/* Boutons flottants (Theme + Audio) */}
      <div className="fixed top-4 right-4 z-50 flex gap-3">

        {/* Toggle Dark / Light */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gold text-black shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Changer le thème"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Toggle Musique Ambiance */}
        <button
          onClick={toggleAmbient}
          className="p-3 rounded-full bg-gold text-black shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Activer ou couper la musique"
        >
          {isAmbientMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      {/* Sections */}
      <Hero />
      <Destinations />
      <Quiz />
      <ChatbotButton />

      {/* Mention légale */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-6 px-4 transition-colors duration-500">
        Les prix affichés sont fictifs et utilisés uniquement à des fins pédagogiques.
      </div>
    </div>
  );
}
