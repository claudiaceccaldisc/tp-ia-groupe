import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">

      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          TimeTravel Agency
        </h1>

        <p className="text-lg md:text-2xl mb-4">
          Explorez l’Histoire. Vivez l’impossible.
        </p>

        <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
          Chaque voyage est une immersion exclusive dans les moments les plus fascinants de l’humanité.
        </p>
      </motion.div>
    </section>
  );
}
