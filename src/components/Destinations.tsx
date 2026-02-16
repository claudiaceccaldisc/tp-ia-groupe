import DestinationCard from "./DestinationCard";

const destinations = [
  {
    title: "Paris 1889",
    year: "1889",
    description:
      "Découvrez la Belle Époque et l'inauguration de la Tour Eiffel.",
    image: "/paris1889.jpg",
    highlights: [
      "Exposition Universelle",
      "Culture Belle Époque",
      "Moulin Rouge"
    ],
  },
  {
    title: "Florence 1504",
    year: "1504",
    description:
      "Vivez l'apogée de la Renaissance et le dévoilement du David.",
    image: "/florence1504.jpg",
    highlights: [
      "Michel-Ange",
      "Médicis",
      "Architecture Renaissance"
    ],
  },
  {
    title: "Crétacé",
    year: "65M av. J.-C.",
    description:
      "Plongez dans l'ère des dinosaures et explorez un monde disparu.",
    image: "/cretace.jpg",
    highlights: [
      "Observation dinosaures",
      "Écosystèmes primitifs",
      "Paysages préhistoriques"
    ],
  },
];

export default function Destinations() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-black transition-colors duration-500">

      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="
          section-title
          text-black dark:text-white
        ">
          Destinations temporelles
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          Sélectionnez votre expérience exclusive.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.title}
            {...destination}
          />
        ))}
      </div>
    </section>
  );
}
