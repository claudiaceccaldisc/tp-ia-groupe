import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Bonjour 👋 Je suis votre assistant TimeTravel Agency. Posez-moi vos questions sur nos destinations temporelles."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.mistral.ai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_MISTRAL_API_KEY}`
          },
          body: JSON.stringify({
            model: "mistral-small",
            messages: [
              {
                role: "system",
                content: `
Tu es l'assistant virtuel officiel de TimeTravel Agency.

Tu réponds en français uniquement.

Règles importantes :
- Ne mets pas de markdown.
- N'utilise pas d'astérisques.
- N'utilise pas de gras ou de formatage spécial.
- Écris uniquement en texte simple.
- Sois clair, immersif et professionnel.

Les destinations disponibles sont :
- Paris 1889
- Florence 1504
- Crétacé (65 millions d'années)

Les prix sont fictifs et utilisés uniquement dans un cadre pédagogique.

Réponds toujours de manière structurée mais sans symboles spéciaux.
`

              },
              ...updatedMessages
            ]
          })
        }
      );

      const data = await response.json();

      const botReply: Message = {
        role: "assistant",
        content: data.choices[0].message.content
      };

      setMessages([...updatedMessages, botReply]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Une erreur est survenue. Merci de réessayer dans quelques instants."
        }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* BOUTON FLOTTANT */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gold text-dark-bg text-2xl shadow-xl hover:scale-110 transition-all duration-300 z-50"
      >
        💬
      </button>

      {/* FENÊTRE CHAT */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[95%] h-[500px] bg-dark-card border border-dark-border rounded-2xl shadow-2xl flex flex-col z-40">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-gold to-yellow-500 p-4 rounded-t-2xl">
            <h3 className="font-playfair font-bold text-dark-bg text-lg">
              Assistant TimeTravel
            </h3>
            <p className="text-dark-bg/80 text-sm">
              Conseiller en voyages temporels
            </p>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.role === "user"
                      ? "bg-gold text-dark-bg"
                      : "bg-dark-border text-gray-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 text-sm">
                L’assistant réfléchit...
              </div>
            )}
          </div>

          {/* INPUT */}
          <form
            onSubmit={sendMessage}
            className="p-4 border-t border-dark-border"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 bg-dark-border text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gold text-dark-bg font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
