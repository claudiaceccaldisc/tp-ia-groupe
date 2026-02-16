import DestinationCard from './DestinationCard';

const destinations = [
  {
    title: 'Paris 1889',
    year: '1889',
    description: 'Découvrez la Belle Époque et l’inauguration de la Tour Eiffel.',
    image: '/paris1889.jpg',
    highlights: [
      'Exposition Universelle',
      'Culture Belle Époque',
      'Soirées Moulin Rouge'
    ],
  },
  {
    title: 'Florence 1504',
    year: '1504',
    description: 'Vivez la Renaissance et le dévoilement du David de Michel-Ange.',
    image: '/florence1504.jpg',
    highlights: [
      'David de Michel-Ange',
      'Maîtres de la Renaissance',
      'Dynastie Médicis'
    ],
  },
  {
    title: 'Crétacé',
    year: '65M av. J.-C.',
    description: 'Voyagez à l’ère des dinosaures.',
    image: '/cretace.jpg',
    highlights: [
      'Observation des dinosaures',
      'Écosystèmes primitifs',
      'Paysages préhistoriques'
    ],
  },
];

export default function Destinations() {
  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="section-title">Destinations temporelles</h2>
        <p className="text-gray-400">
          Sélectionnez votre expérience exclusive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.title}
            {...destination}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
}
