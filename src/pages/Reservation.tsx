import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Reservation() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

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

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium mb-1">
              Nom complet
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
              placeholder="Votre nom"
              required
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
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Date souhaitée
            </label>
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
              required
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

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-2xl text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-green-500">
              ✅ Réservation confirmée
            </h2>
            <p className="text-sm mb-6">
              Redirection vers l'accueil...
            </p>
          </div>
        </div>
      )}

    </div>
  );
}