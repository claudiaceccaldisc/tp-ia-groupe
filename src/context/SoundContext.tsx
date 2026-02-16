import { createContext, useContext, useEffect, useRef, useState } from "react";

interface SoundContextType {
  playEffect: (type: "dino" | "renaissance" | "paris") => void;
  toggleAmbient: () => void;
  isAmbientMuted: boolean;
}

const SoundContext = createContext<SoundContextType>({
  playEffect: () => {},
  toggleAmbient: () => {},
  isAmbientMuted: true,
});

export const SoundProvider = ({ children }: any) => {
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const [isAmbientMuted, setIsAmbientMuted] = useState(true);

  useEffect(() => {
    const ambient = new Audio("/sounds/ambient.mp3");
    ambient.loop = true;
    ambient.volume = 0.25;
    ambient.muted = true;

    ambientRef.current = ambient;

    // Autoplay muted autorisé
    ambient.play().catch(() => {});

    const unlockAudio = () => {
      if (!ambientRef.current) return;

      ambientRef.current.muted = false;
      ambientRef.current.play().catch(() => {});
      setIsAmbientMuted(false);

      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, []);

  // Toggle musique uniquement
  const toggleAmbient = () => {
    if (!ambientRef.current) return;

    const newState = !isAmbientMuted;
    ambientRef.current.muted = newState;
    setIsAmbientMuted(newState);
  };

  // Effets toujours actifs
  const playEffect = (type: "dino" | "renaissance" | "paris") => {
    const soundMap = {
      dino: "/sounds/dino.mp3",
      renaissance: "/sounds/renaissance.mp3",
      paris: "/sounds/belle-epoque.mp3",
    };

    const audio = new Audio(soundMap[type]);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  return (
    <SoundContext.Provider
      value={{ playEffect, toggleAmbient, isAmbientMuted }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
