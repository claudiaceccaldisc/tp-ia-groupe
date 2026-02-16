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
  const effectsRef = useRef<{
    dino: HTMLAudioElement;
    renaissance: HTMLAudioElement;
    paris: HTMLAudioElement;
  } | null>(null);

  const [isAmbientMuted, setIsAmbientMuted] = useState(true);

  useEffect(() => {
    // 🎼 Ambient
    const ambient = new Audio("/sounds/ambient.mp3");
    ambient.loop = true;
    ambient.volume = 0.25;
    ambient.muted = true;
    ambientRef.current = ambient;
    ambient.play().catch(() => {});

    // 🔊 Préchargement des effets
    effectsRef.current = {
      dino: new Audio("/sounds/dino.mp3"),
      renaissance: new Audio("/sounds/renaissance.mp3"),
      paris: new Audio("/sounds/belle-epoque.mp3"),
    };

    Object.values(effectsRef.current).forEach((audio) => {
      audio.volume = 0.5;
      audio.load();
    });

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

  const toggleAmbient = () => {
    if (!ambientRef.current) return;

    const newState = !isAmbientMuted;
    ambientRef.current.muted = newState;
    setIsAmbientMuted(newState);
  };

  const playEffect = (type: "dino" | "renaissance" | "paris") => {
    if (!effectsRef.current) return;

    const audio = effectsRef.current[type];

    audio.currentTime = 0; // permet rejouer rapidement
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
