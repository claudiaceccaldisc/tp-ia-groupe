import { motion } from "framer-motion";
import { useSound } from "../context/SoundContext";

interface DestinationCardProps {
  title: string;
  year: string;
  description: string;
  image: string;
  highlights: string[];
}

export default function DestinationCard({
  title,
  year,
  description,
  image,
  highlights,
}: DestinationCardProps) {
  const { playEffect } = useSound();

  // Prix indicatif selon destination
  const getPrice = () => {
    if (title.includes("Paris")) return "À partir de 20 000€";
    if (title.includes("Florence")) return "À partir de 25 000€";
    if (title.includes("Crétacé")) return "À partir de 35 000€";
    return "À partir de 25 000€";
  };

  const handleClick = () => {
    if (title.includes("Crétacé")) playEffect("dino");
    else if (title.includes("Florence")) playEffect("renaissance");
    else if (title.includes("Paris")) playEffect("paris");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card-base group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6">

        {/* TITRE + ANNÉE */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg sm:text-xl font-bold tracking-wide">
            {title}
          </h3>
          <span className="text-gold text-sm sm:text-base font-semibold">
            {year}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* PRIX */}
        <div className="mb-4">
          <p className="text-gold font-semibold text-base sm:text-lg">
            {getPrice()}
          </p>
          <p className="text-xs text-gray-400">
            Prix indicatif – usage pédagogique uniquement
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <ul className="space-y-2 mb-6">
          {highlights.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
            >
              <span className="w-2 h-2 bg-gold rounded-full" />
              {item}
            </li>
          ))}
        </ul>

        {/* BOUTON */}
        <button
          onClick={handleClick}
          className="w-full py-2 sm:py-3 bg-gold text-black rounded-lg font-semibold tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300"
        >
          Réserver
        </button>
      </div>
    </motion.div>
  );
}
