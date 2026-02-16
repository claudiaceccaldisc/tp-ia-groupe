import { motion } from "framer-motion";

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

  // Prix indicatif selon destination
  const getPrice = () => {
    if (title.includes("Paris")) return "À partir de 20 000€";
    if (title.includes("Florence")) return "À partir de 25 000€";
    if (title.includes("Crétacé")) return "À partir de 35 000€";
    return "À partir de 25 000€";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card-base group"
    >
      {/* IMAGE */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6">

        {/* TITRE + ANNÉE */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg sm:text-xl font-bold">
            {title}
          </h3>
          <span className="text-gold text-sm sm:text-base">
            {year}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
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
        <ul className="space-y-1 mb-6">
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
        <button className="w-full py-2 sm:py-3 bg-gold text-black rounded-lg hover:opacity-90 transition">
          Réserver
        </button>
      </div>
    </motion.div>
  );
}
