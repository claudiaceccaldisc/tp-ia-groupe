import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-screen flex items-center justify-center text-center px-4 overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative z-10 
          border border-gold/50 
          bg-white/10 dark:bg-black/40 
          backdrop-blur-md 
          p-6 md:p-10 
          rounded-xl
        "
      >
        <h1 className="
          text-3xl md:text-6xl font-bold mb-6
          text-white dark:text-white
        ">
          TimeTravel Agency
        </h1>

        <p className="
          text-base md:text-2xl
          text-white dark:text-white
        ">
          Explorez l’Histoire. Vivez l’impossible.
        </p>
      </motion.div>
    </section>
  );
}
