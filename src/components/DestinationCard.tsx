import { motion } from "framer-motion";
import { useSound } from "../context/SoundContext";
import { useState } from "react";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getPrice = () => {
    if (title.includes("Paris")) return "À partir de 20 000€";
    if (title.includes("Florence")) return "À partir de 25 000€";
    if (title.includes("Crétacé")) return "À partir de 35 000€";
    if (title.includes("Rome")) return "À partir de 30 000€";
    if (title.includes("Réunion")) return "À partir de 35 000€";
    if (title.includes("Kyoto")) return "À partir de 28 000€";
    if (title.includes("Londres")) return "À partir de 28 000€";
    if (title.includes("Machu Picchu")) return "À partir de 32 000€";
    return "À partir de 25 000€";
  };

  const handleClick = () => {
    if (title.includes("Crétacé")) playEffect("dino");
    else if (title.includes("Florence")) playEffect("renaissance");
    else if (title.includes("Paris")) playEffect("paris");
    else if (title.includes("Rome")) playEffect("rome80");
    else if (title.includes("Réunion")) playEffect("reunion1690");
    else if (title.includes("Kyoto")) playEffect("kyoto794");
    else if (title.includes("Londres")) playEffect("londres1605");
    else if (title.includes("Machu Picchu")) playEffect("inca1450");

    navigate("/reservation", {
      state: { title, year, price: getPrice() },
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? image.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        card-base
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-500
      "
    >
      {/* IMAGE */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} - ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/30" />

        {image.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              ❮
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              ❯
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {image.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "w-5 bg-gold"
                      : "w-2 bg-gold/40 hover:bg-gold"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

  {/* CONTENT */}
<div className="p-5 sm:p-6 bg-gray-50 dark:bg-transparent">

  {/* Titre + Année */}
  <div className="flex justify-between items-center mb-3">
    <h3 className="text-lg sm:text-xl font-bold tracking-wide text-black dark:text-white">
      {title}
    </h3>
    <span className="text-gold dark:text-silver text-sm sm:text-base font-semibold">
  {year}
</span>

  </div>

  {/* Description */}
  <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
    {description}
  </p>

  {/* Prix */}
  <div className="mb-4">
    <p className="text-gold dark:text-silver font-semibold text-base sm:text-lg">
      {getPrice()}
    </p>
    <p className="text-xs text-gray-600 dark:text-gray-500">
      Prix indicatif – usage pédagogique uniquement
    </p>
  </div>

  {/* Highlights */}
  <ul className="space-y-2 mb-6">
    {highlights.map((item, index) => (
      <li
        key={index}
        className="flex items-center gap-2 text-xs sm:text-sm text-black dark:text-gray-400"
      >
        <span className="w-2 h-2 bg-gold dark:bg-gold rounded-full" />
        {item}
      </li>
    ))}
  </ul>

  {/* Bouton */}
  <button
    onClick={handleClick}
    className="w-full py-2 sm:py-3 bg-gold text-black rounded-lg font-semibold tracking-wide hover:brightness-90 hover:scale-105 transition-all duration-300"
  >
    Réserver
  </button>

</div>


    </motion.div>
  );
}