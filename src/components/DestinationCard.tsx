import { useState } from 'react';

interface DestinationCardProps {
  title: string;
  year: string;
  description: string;
  image: string;
  highlights: string[];
  delay?: number;
}

export default function DestinationCard({
  title,
  year,
  description,
  image,
  highlights,
  delay = 0,
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-dark group overflow-hidden transition-all duration-700 animate-slide-up`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isHovered ? 'opacity-20' : 'opacity-0'
        }`} />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-playfair font-bold text-white">{title}</h3>
          <span className="text-gold font-playfair text-lg">{year}</span>
        </div>

        <p className="text-gray-300 mb-4 text-sm">{description}</p>

        <div className="space-y-2 mb-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gray-400 text-sm">{highlight}</span>
            </div>
          ))}
        </div>

        <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
          isHovered
            ? 'bg-gold text-dark-bg'
            : 'bg-dark-border text-gold border border-gold'
        }`}>
          Book Journey
        </button>
      </div>
    </div>
  );
}
