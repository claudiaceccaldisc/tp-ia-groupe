import { createContext, useContext, useEffect, useRef, useState } from "react";

interface SoundContextType {
  playEffect: (
    type:
      | "dino"
      | "renaissance"
      | "paris"
      | "londres1605"
      | "inca1450"
      | "rome80"
      | "reunion1690"
      | "kyoto794"
  ) => void;
  toggleMute: () => void;
  isMuted: boolean;
}

const SoundContext = createContext<SoundContextType>({
  playEffect: () => {},
  toggleMute: () => {},
  isMuted: true,
});

export const SoundProvider = ({ children }: any) => {
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const ambient = new Audio("/sounds/ambient.mp3");
    ambient.loop = true;
    ambient.volume = 0.25;
    ambient.muted = true;

    ambientRef.current = ambient;

    // Autoplay muted (autorisé par navigateur)
    ambient.play().catch(() => {});

    const unlockAudio = () => {
      if (!ambientRef.current) return;

      ambientRef.current.muted = false;
      ambientRef.current.play().catch(() => {});
      setIsMuted(false);

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

  const playEffect = (
    type:
      | "dino"
      | "renaissance"
      | "paris"
      | "londres1605"
      | "inca1450"
      | "rome80"
      | "reunion1690"
      | "kyoto794"
  ) => {
    if (isMuted) return;

    const soundMap = {
      dino: "/sounds/dino.mp3",
      renaissance: "/sounds/renaissance.mp3",
      paris: "/sounds/belle-epoque.mp3",

      londres1605: "/sounds/cloche-londres.mp3",
      inca1450: "/sounds/flute-inca.mp3",
      rome80: "/sounds/chevaux-rome.mp3",
      reunion1690: "/sounds/ile-tropicale.mp3",
      kyoto794: "/sounds/japon.mp3",
    };

    const audio = new Audio(soundMap[type]);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  const toggleMute = () => {
    if (!ambientRef.current) return;

    const newState = !isMuted;
    ambientRef.current.muted = newState;
    setIsMuted(newState);
  };

  return (
    <SoundContext.Provider value={{ playEffect, toggleMute, isMuted }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);