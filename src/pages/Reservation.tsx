import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReservations } from "../context/ReservationContext";

export default function Reservation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addReservation } = useReservations();

  const [showPopup, setShowPopup] = useState(false);
  const [reservationNumber, setReservationNumber] = useState<string | null>(null);

  const { title, year, price } = location.state || {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const clientName = formData.get("name") as string;
    const rawDate = formData.get("date") as string;

    const [yearValue, monthValue, dayValue] = rawDate.split("-");
    const date = `${dayValue}/${monthValue}/${yearValue}`;

    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    setReservationNumber(`CE-${randomNumber}`);

    addReservation({
      id: Date.now(),
      destination: title || "Destination inconnue",
      client: clientName,
      date,
      status: "Confirmée",
      price: price || "—"
    });

    setShowPopup(true);

    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-500 px-4">
      <div className="bg-gray-100 dark:bg-zinc-900 p-8 sm:p-10 rounded-2xl shadow-2xl max-w-xl w-full border border-gray-200 dark:border-zinc-800">

        {/* Retour */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-sm text-black dark:text-silver font-semibold hover:underline"
        >
          ← Retour à l'accueil
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Réservation Chronos Elite
        </h1>

        {title && (
          <div className="mb-6 p-4 bg-black/5 dark:bg-white/5 rounded-lg text-center border border-gray-200 dark:border-zinc-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Destination sélectionnée
            </p>
            <p className="text-lg font-semibold">
              {title} {year && `- ${year}`}
            </p>
            {price && (
              <p className="text-black dark:text-silver font-semibold mt-1">

                {price}
              </p>
            )}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Nom complet
            </label>
            <input
              name="name"
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black focus:ring-2 focus:ring-silver transition"
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
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black focus:ring-2 focus:ring-silver transition"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Date souhaitée
            </label>
            <input
              name="date"
              type="date"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black focus:ring-2 focus:ring-silver transition"
              required
            />
          </div>

          <button
            type="submit"
            className="
  w-full py-3 
  bg-gray-900 text-white
  dark:bg-silver dark:text-black
  rounded-lg font-semibold
  hover:opacity-90 hover:scale-105
  transition-all duration-300
"

          >
            Confirmer la réservation
          </button>
        </form>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-zinc-900 p-10 rounded-2xl shadow-2xl text-center max-w-sm w-full border border-silver/40"
              initial={{ y: 80, scale: 0.7, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 80, scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-green-500">
                Réservation confirmée
              </h2>

              {reservationNumber && (
                <p className="text-silver font-semibold mb-6 text-lg">
                  Numéro : {reservationNumber}
                </p>
              )}

              <div className="mx-auto w-12 h-12 rounded-full border-4 border-silver border-t-transparent animate-spin" />

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Redirection vers l'accueil...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
