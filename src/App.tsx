import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Quiz from "./components/Quiz";
import ChatbotButton from "./components/ChatbotButton";
import { useTheme } from "./context/ThemeContext";
import { useSound } from "./context/SoundContext";
import { Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Reservation from "./pages/Reservation";
import Reservations from "./pages/Reservations";

export default function App() {
  const { dark, toggleTheme } = useTheme();
  const { toggleMute, isMuted } = useSound();
  const navigate = useNavigate();

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gold text-black shadow-lg hover:scale-110 transition"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-gold text-black shadow-lg hover:scale-110 transition"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => navigate("/reservations")}
                  className="px-6 py-3 bg-gold text-black rounded-lg font-semibold hover:scale-105 hover:opacity-90 transition-all duration-300"
                >
                  Voir les réservations effectuées
                </button>
              </div>
              <Hero />
              <Destinations />
              <Quiz />
              <ChatbotButton />
            </>
          }
        />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>

      <div className="text-center text-xs text-gray-400 py-6 px-4">
        Les prix affichés sont fictifs et utilisés uniquement à des fins pédagogiques.
      </div>
    </div>
  );
}