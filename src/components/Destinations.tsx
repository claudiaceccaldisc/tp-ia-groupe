import DestinationCard from "./DestinationCard";

export interface Destination {
  title: string;
  year: string;
  description: string;
  image: string[];
  highlights: string[];
  tags: string[]; // 🧠 nouveau système intelligent
}

export const destinations: Destination[] = [
  {
    title: "Paris 1889",
    year: "1889",
    description:
      "Découvrez la Belle Époque et l'inauguration de la Tour Eiffel.",
    image: ["/paris1889.jpg", "/Paris2.jpg"],
    highlights: [
      "Exposition Universelle",
      "Culture Belle Époque",
      "Moulin Rouge",
    ],
    tags: ["urbain", "raffinement", "culture", "monuments"],
  },
  {
    title: "Florence 1504",
    year: "1504",
    description:
      "Vivez l'apogée de la Renaissance et le dévoilement du David.",
    image: ["/florence1504.jpg", "/Florence.jpg"],
    highlights: [
      "Michel-Ange",
      "Médicis",
      "Architecture Renaissance",
    ],
    tags: ["culture", "art", "raffinement", "histoire"],
  },
  {
    title: "Crétacé",
    year: "65M av. J.-C.",
    description:
      "Plongez dans l'ère des dinosaures et explorez un monde disparu.",
    image: ["/cretace.jpg", "/Cretace2.jpg"],
    highlights: [
      "Observation dinosaures",
      "Écosystèmes primitifs",
      "Paysages préhistoriques",
    ],
    tags: ["nature", "aventure", "exploration", "mystere"],
  },
  {
    title: "Rome 80",
    year: "80 ap. J.-C.",
    description:
      "Assistez à l'inauguration du Colisée et aux combats de gladiateurs.",
    image: ["/rome80-1.png", "/rome80-2.png"],
    highlights: ["Colisée", "Gladiateurs", "Empire Romain"],
    tags: ["puissance", "antique", "histoire", "urbain"],
  },
  {
    title: "Réunion ~1690",
    year: "vers 1690 ap. J.-C.",
    description:
      "Visitez une île inhabitée à l'époque des dodos.",
    image: ["/reunion-1.png", "/reunion-2.png"],
    highlights: [
      "Piton de Neiges",
      "Forêts tropicales",
      "Explorateurs et pirates",
    ],
    tags: ["nature", "exploration", "mystere"],
  },
  {
    title: "Kyoto 794",
    year: "794",
    description:
      "Découvrez le Japon impérial et l'ère Heian.",
    image: ["/kyoto-1.png", "/kyoto-2.png"],
    highlights: ["Geishas", "Temples shinto", "Cérémonies du thé"],
    tags: ["spiritualite", "culture", "raffinement"],
  },
  {
    title: "Londres 1605",
    year: "1605",
    description:
      "Vivez l'Angleterre élisabéthaine et l'intrigue des poudres.",
    image: ["/londres-1.png", "/londres-2.png"],
    highlights: ["Shakespeare", "Reine Elizabeth", "Théâtre Globe"],
    tags: ["urbain", "histoire", "mystere"],
  },
  {
    title: "Machu Picchu 1450",
    year: "1450",
    description:
      "Explorez la cité inca perdue dans les nuages.",
    image: ["/machuPicchu-1.png", "/machuPicchu-2.png"],
    highlights: [
      "Empire Inca",
      "Architecture andine",
      "Lamas sacrés",
    ],
    tags: ["nature", "spiritualite", "exploration"],
  },
];

export default function Destinations() {
  return (
    <section className="py-20 px-4 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="section-title text-silver">
          Destinations temporelles
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Explorez des époques fascinantes et vivez une immersion exclusive à travers l’Histoire.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination.title} {...destination} />
        ))}
      </div>
    </section>
  );
}
