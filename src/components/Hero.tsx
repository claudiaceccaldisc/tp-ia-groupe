import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className={`text-5xl md:text-7xl font-playfair font-bold mb-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          TimeTravel Agency
        </h1>

        <p className={`text-lg md:text-2xl text-gray-200 max-w-2xl mb-8 transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Explorez l’histoire. Vivez l’impossible.
        </p>

        <button className="btn-primary">
          Découvrir les destinations
        </button>
      </div>
    </section>
  );
}
