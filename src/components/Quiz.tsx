import { useState } from "react";
import { destinations } from "./Destinations";

interface Scores {
  [key: string]: number;
}

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [scores, setScores] = useState<Scores>({});
  const [result, setResult] = useState<string | null>(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const totalSteps = 4;

  const addPoint = (destination: string) => {
    setScores((prev) => ({
      ...prev,
      [destination]: (prev[destination] || 0) + 1,
    }));

    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = async () => {
    let winner = destinations[0]?.title || "Destination inconnue";
    let maxScore = -1;

    destinations.forEach((dest) => {
      const score = scores[dest.title] || 0;
      if (score > maxScore) {
        maxScore = score;
        winner = dest.title;
      }
    });

    setResult(winner);
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.mistral.ai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_MISTRAL_API_KEY}`,
          },
          body: JSON.stringify({
            model: "mistral-small",
            messages: [
              {
                role: "system",
                content:
                  "Explique en 3 phrases pourquoi cette destination correspond au profil.",
              },
              {
                role: "user",
                content: `Destination : ${winner}`,
              },
            ],
          }),
        }
      );

      const data = await response.json();

const rawText =
  data?.choices?.[0]?.message?.content ||
  "Recommandation générée avec succès.";

const cleanedText = rawText
  .replace(/\*\*/g, "")        // enlève **
  .replace(/\*/g, "")          // enlève *
  .replace(/^\d+\.\s*/gm, "")  // enlève 1. 2. 3.
  .replace(/\n+/g, " ")        // enlève retours ligne multiples
  .trim();

setExplanation(cleanedText);

    } catch {
      setExplanation(
        "Une explication personnalisée n'a pas pu être générée."
      );
    }

    setLoading(false);
  };

  const resetQuiz = () => {
    setStep(1);
    setScores({});
    setResult(null);
    setExplanation("");
  };

  if (!destinations || destinations.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 text-center">
      <h2 className="section-title mb-12">
        Trouvez votre époque idéale
      </h2>

      {!result && (
        <div className="max-w-xl mx-auto space-y-6">

          {step === 1 && (
            <>
              <h3>Quel type d’ambiance recherchez-vous ?</h3>
              <button onClick={() => addPoint(destinations[0].title)} className="btn-primary w-full">
                Culture et élégance
              </button>
              <button onClick={() => addPoint(destinations[2].title)} className="btn-primary w-full">
                Aventure et nature
              </button>
              <button onClick={() => addPoint(destinations[5].title)} className="btn-primary w-full">
                Tradition et spiritualité
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3>Votre environnement préféré ?</h3>
              <button onClick={() => addPoint(destinations[3].title)} className="btn-primary w-full">
                Civilisation antique
              </button>
              <button onClick={() => addPoint(destinations[7].title)} className="btn-primary w-full">
                Montagnes mystérieuses
              </button>
              <button onClick={() => addPoint(destinations[4].title)} className="btn-primary w-full">
                Île sauvage
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h3>Votre activité idéale ?</h3>
              <button onClick={() => addPoint(destinations[1].title)} className="btn-primary w-full">
                Art et architecture
              </button>
              <button onClick={() => addPoint(destinations[6].title)} className="btn-primary w-full">
                Théâtre et intrigues
              </button>
              <button onClick={() => addPoint(destinations[2].title)} className="btn-primary w-full">
                Observation naturelle
              </button>
            </>
          )}

          {step === 4 && (
            <>
              <h3>Votre rythme de voyage ?</h3>
              <button onClick={() => addPoint(destinations[0].title)} className="btn-primary w-full">
                Dynamique et urbain
              </button>
              <button onClick={() => addPoint(destinations[5].title)} className="btn-primary w-full">
                Méditatif et culturel
              </button>
              <button onClick={() => addPoint(destinations[7].title)} className="btn-primary w-full">
                Mystérieux et épique
              </button>
            </>
          )}

        </div>
      )}

      {result && (
        <div className="max-w-2xl mx-auto mt-10">
          <h3 className="text-3xl font-bold text-black dark:text-silver mb-4">
            Destination recommandée : {result}
          </h3>

          {loading ? (
            <p>Génération de votre recommandation...</p>
          ) : (
            <p className="mt-4 text-gray-800 dark:text-gray-300">
              {explanation}
            </p>
          )}

          <button
            onClick={resetQuiz}
            className="mt-8 btn-primary"
          >
            Refaire le quiz
          </button>
        </div>
      )}
    </section>
  );
}
