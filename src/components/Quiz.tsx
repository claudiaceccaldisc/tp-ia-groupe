import { useState } from "react";

interface Scores {
  paris: number;
  florence: number;
  cretace: number;
}

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [scores, setScores] = useState<Scores>({
    paris: 0,
    florence: 0,
    cretace: 0,
  });
  const [result, setResult] = useState<string | null>(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const updateScore = (type: keyof Scores) => {
    setScores((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
    setStep(step + 1);
  };

  const calculateResult = async () => {
    const winner =
      scores.paris >= scores.florence && scores.paris >= scores.cretace
        ? "Paris 1889"
        : scores.florence >= scores.paris && scores.florence >= scores.cretace
        ? "Florence 1504"
        : "Crétacé";

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
                content: `
Tu es un conseiller en voyage temporel.
Explique en 3 à 4 phrases pourquoi la destination suivante correspond parfaitement au profil de l'utilisateur.
Réponds uniquement en texte simple.
`,
              },
              {
                role: "user",
                content: `Destination recommandée : ${winner}`,
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const cleaned = data.choices[0].message.content
        .replace(/\*\*/g, "")
        .replace(/\*/g, "");

      setExplanation(cleaned);
    } catch {
      setExplanation(
        "Une explication personnalisée n'a pas pu être générée."
      );
    }

    setLoading(false);
  };

  const resetQuiz = () => {
    setStep(1);
    setScores({ paris: 0, florence: 0, cretace: 0 });
    setResult(null);
    setExplanation("");
  };

  return (
    <section className="py-20 px-4 text-center">
      <h2 className="section-title mb-8">
        Trouvez votre époque idéale
      </h2>

      {!result && (
        <div className="max-w-xl mx-auto space-y-6">

          {step === 1 && (
            <>
              <h3>Quel type d'expérience recherchez-vous ?</h3>
              <button onClick={() => updateScore("florence")} className="btn-primary w-full">
                Culturelle et artistique
              </button>
              <button onClick={() => updateScore("cretace")} className="btn-primary w-full">
                Aventure et nature
              </button>
              <button onClick={() => updateScore("paris")} className="btn-primary w-full">
                Élégance et raffinement
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3>Votre période préférée ?</h3>
              <button onClick={() => updateScore("paris")} className="btn-primary w-full">
                Histoire moderne
              </button>
              <button onClick={() => updateScore("cretace")} className="btn-primary w-full">
                Temps anciens
              </button>
              <button onClick={() => updateScore("florence")} className="btn-primary w-full">
                Renaissance
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h3>Vous préférez :</h3>
              <button onClick={() => updateScore("paris")} className="btn-primary w-full">
                L'effervescence urbaine
              </button>
              <button onClick={() => updateScore("cretace")} className="btn-primary w-full">
                La nature sauvage
              </button>
              <button onClick={() => updateScore("florence")} className="btn-primary w-full">
                L'art et l'architecture
              </button>
            </>
          )}

          {step === 4 && (
            <>
              <h3>Votre activité idéale :</h3>
              <button onClick={() => updateScore("paris")} className="btn-primary w-full">
                Visiter des monuments
              </button>
              <button onClick={() => updateScore("cretace")} className="btn-primary w-full">
                Observer la faune
              </button>
              <button onClick={() => updateScore("florence")} className="btn-primary w-full">
                Explorer des musées
              </button>
              <button
                onClick={calculateResult}
                className="mt-6 bg-gold text-black px-6 py-3 rounded-lg"
              >
                Voir ma recommandation
              </button>
            </>
          )}
        </div>
      )}

      {result && (
        <div className="max-w-2xl mx-auto mt-10">
          <h3 className="text-3xl font-bold text-gold mb-4">
            Destination recommandée : {result}
          </h3>

          {loading ? (
            <p>Génération de votre recommandation personnalisée...</p>
          ) : (
            <p className="mt-4 text-gray-300">{explanation}</p>
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
