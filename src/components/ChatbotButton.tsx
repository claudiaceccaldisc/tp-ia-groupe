import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

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
        "Bonjour. Je suis votre assistant TimeTravel Agency. Posez-moi vos questions sur nos destinations temporelles."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
Tu es l'assistant officiel de TimeTravel Agency.
Tu réponds en français.
Destinations disponibles :
Paris 1889
Florence 1504
Crétacé
Rome 80
Réunion 1690
Kyoto 794
Londres 1605
Machu Picchu 1450
Les prix sont fictifs.
`
              },
              ...updatedMessages
            ]
          })
        }
      );

      const data = await response.json();

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            data.choices?.[0]?.message?.content ||
            "Réponse indisponible."
        }
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Une erreur est survenue. Merci de réessayer."
        }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* BOUTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-silver text-black shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[92%] sm:w-96 h-[480px] bg-white dark:bg-[#1c1c1c] rounded-2xl shadow-2xl flex flex-col z-40 transition-all duration-300">

          {/* HEADER */}
          <div className="bg-gray-100 dark:bg-[#2a2a2a] border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-2xl">
            <h3 className="font-playfair font-bold text-black dark:text-white text-lg">
              Assistant TimeTravel
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Conseiller en voyages temporels
            </p>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                    msg.role === "user"
                      ? "bg-silver text-black"
                      : "bg-gray-200 dark:bg-[#2e2e2e] text-gray-900 dark:text-gray-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 text-sm animate-pulse">
                L’assistant réfléchit...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <form
            onSubmit={sendMessage}
            className="p-3 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 bg-gray-100 dark:bg-[#2a2a2a] text-black dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-silver"
              />
              <button
                type="submit"
                className="bg-silver text-black font-semibold px-4 py-2 rounded-lg hover:bg-silver-dark transition-all duration-200"
              >
                OK
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
