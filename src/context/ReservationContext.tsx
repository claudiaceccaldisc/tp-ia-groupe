import { createContext, useContext, useState, ReactNode } from "react";

interface Reservation {
  id: number;
  destination: string;
  client: string;
  date: string;
  status: string;
  price: string;
}

interface ReservationContextType {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: 1,
      destination: "Paris 1889",
      client: "Jean Dupont",
      date: "12/06/2026",
      status: "Confirmée",
      price: "20 000€"
    },
    {
      id: 2,
      destination: "Florence 1504",
      client: "Marie Lambert",
      date: "03/09/2026",
      status: "En attente",
      price: "25 000€"
    }
  ]);

  const addReservation = (reservation: Reservation) => {
    setReservations((prev) => [...prev, reservation]);
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservations() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservations must be used within a ReservationProvider");
  }
  return context;
}