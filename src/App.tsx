import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Quiz from './components/Quiz';
import ChatbotButton from './components/ChatbotButton';

export default function App() {
  return (
    <div className="bg-dark-bg text-white min-h-screen">
      <Hero />
      <Destinations />
      <Quiz />
      <ChatbotButton />

      <footer className="bg-black/50 border-t border-dark-border py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h4 className="font-playfair font-bold text-gold mb-4 text-lg">
              TimeTravel Agency
            </h4>
            <p className="text-gray-400 text-sm">
              Agence de voyage temporel de luxe.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">Destinations</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Paris 1889</li>
              <li>Florence 1504</li>
              <li>Crétacé</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">Agence</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>À propos</li>
              <li>Contact</li>
              <li>Carrières</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">Légal</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Confidentialité</li>
              <li>Conditions</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border pt-8 text-center text-gray-500 text-sm">
          © 2026 TimeTravel Agency. Projet pédagogique M1 Ynov.
        </div>
      </footer>
    </div>
  );
}
