import { motion } from "framer-motion";
import { useSound } from "../context/SoundContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface DestinationCardProps {
  title: string;
  year: string;
  description: string;
  image: string[];
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
  const navigate = useNavigate();

  // Prix indicatif selon destination
  const getPrice = () => {
    if (title.includes("Paris")) return "À partir de 20 000€";
    if (title.includes("Florence")) return "À partir de 25 000€";
    if (title.includes("Crétacé")) return "À partir de 35 000€";
    if (title.includes("Rome") || title.includes("Égypte")) return "À partir de 30 000€";
    if (title.includes("Réunion")) return "À partir de 35 000€";
    if (title.includes("Kyoto") || title.includes("Londres")) return "À partir de 28 000€";
    if (title.includes("Machu Picchu")) return "À partir de 32 000€";
    return "À partir de 25 000€";
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleClick = () => {
    if (title.includes("Crétacé")) playEffect("dino");
    else if (title.includes("Florence")) playEffect("renaissance");
    else if (title.includes("Paris")) playEffect("paris");

    navigate("/reservation", { state: { title, year, price: getPrice() } });
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
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {/* Images du carrousel */}
        <div className="relative h-full w-full">
          {image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} - ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Indicateurs de position */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {image.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-white w-5 scale-110' 
                    : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>
          
          {/* Flèches navigation (optionnel) */}
          <button
            onClick={() => setCurrentImageIndex((prev) => 
              prev === image.length - 1 ? 0 : prev + 1
            )}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            ❯
          </button>
        </div>
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