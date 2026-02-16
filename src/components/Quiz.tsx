import { useState } from 'react';

export default function Quiz() {
  const [result, setResult] = useState<string | null>(null);

  const handleChoice = (choice: string) => {
    if (choice === "prehistorique") setResult("Crétacé");
    if (choice === "renaissance") setResult("Florence 1504");
    if (choice === "moderne") setResult("Paris 1889");
  };

  return (
    <section className="py-20 px-4 bg-dark-card text-center">
      <h2 className="section-title mb-8">Trouvez votre époque idéale</h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button onClick={() => handleChoice("prehistorique")} className="btn-primary">
          Aventure & Nature
        </button>

        <button onClick={() => handleChoice("renaissance")} className="btn-primary">
          Art & Culture
        </button>

        <button onClick={() => handleChoice("moderne")} className="btn-primary">
          Élégance & Modernité
        </button>
      </div>

      {result && (
        <div className="mt-10 text-xl">
          Destination recommandée :
          <span className="text-gold ml-2 font-bold">{result}</span>
        </div>
      )}
    </section>
  );
}
