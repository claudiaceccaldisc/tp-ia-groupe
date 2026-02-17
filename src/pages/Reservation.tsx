import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-500 px-4">
      <div className="bg-gray-100 dark:bg-zinc-900 p-8 sm:p-10 rounded-2xl shadow-2xl max-w-xl w-full">

        <button
          onClick={() => navigate("/")}
          className="mb-6 text-sm text-gold font-semibold hover:underline"
        >
          ← Retour à l'accueil
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Réservation Chronos Elite
        </h1>

        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">
              Nom complet
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Date souhaitée
            </label>
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gold text-black rounded-lg font-semibold hover:scale-105 hover:opacity-90 transition-all duration-300"
          >
            Confirmer la réservation
          </button>

        </form>

      </div>
    </div>
  );
}