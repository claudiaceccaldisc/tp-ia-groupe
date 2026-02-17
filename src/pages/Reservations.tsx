import { useNavigate } from "react-router-dom";
import { useReservations } from "../context/ReservationContext";

export default function Reservations() {
  const navigate = useNavigate();
  const { reservations } = useReservations();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 px-4 py-12">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate("/")}
          className="mb-8 text-sm text-gold font-semibold hover:underline"
        >
          ← Retour à l'accueil
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
          Réservations effectuées
        </h1>

        <div className="space-y-6">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-xl shadow-lg"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">
                  {reservation.destination}
                </h2>
                <span className="text-gold font-semibold">
                  {reservation.price}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Client : {reservation.client}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Date : {reservation.date}
              </p>

              <p className="mt-2 text-sm font-semibold">
                Statut :{" "}
                <span
                  className={
                    reservation.status === "Confirmée"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }
                >
                  {reservation.status}
                </span>
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}