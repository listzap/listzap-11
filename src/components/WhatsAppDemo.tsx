import { useState } from "react";
import { Button } from "./ui/button";

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
}

export const WhatsAppDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const getCurrentDate = () => {
    const now = new Date();
    return `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
  };

  const simulateResponse = (userMessage: string, responseContent: string) => {
    const timestamp = getCurrentTime();
    
    // Add user message
    const newUserMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: userMessage,
      timestamp,
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: responseContent,
        timestamp,
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Auto scroll to bottom
      setTimeout(() => {
        const chatContainer = document.getElementById('whatsapp-messages');
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }, 1500);
  };

  const handleExample1 = () => {
    const response = `🛍️💸 Despesa adicionada com sucesso! Lembre-se das suas metas do mês.

🧾 Descrição: Mercado
💰 Valor: R$ 350,00
📍 Categoria: Alimentação
📅 Data: ${getCurrentDate()}`;
    
    simulateResponse("Gastei 350 mercado", response);
  };

  const handleExample2 = () => {
    const response = `📊 Resumo dos seus gastos em ${new Date().toLocaleString('pt-BR', { month: 'long' })}:

💰 Total gasto: R$ 2.450,00

📂 Principais categorias:
• Alimentação: R$ 850,00
• Transporte: R$ 420,00
• Lazer: R$ 380,00
• Contas: R$ 800,00

📈 Comparado ao mês passado: -12% 👏`;
    
    simulateResponse("Quanto gastei esse mês?", response);
  };

  const resetChat = () => {
    setMessages([]);
    setIsTyping(false);
  };

  return (
    <div className="w-full max-w-[380px] mx-auto">
      {/* Phone Mockup */}
      <div className="relative bg-black rounded-[45px] p-3 shadow-2xl">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[25px] bg-black rounded-b-3xl z-10"></div>
        
        {/* Screen */}
        <div className="bg-[#0D1418] rounded-[35px] overflow-hidden">
          {/* WhatsApp Header */}
          <div className="bg-[#1F2C33] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00BCD4] rounded-full flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-sm">Listzap</div>
              <div className="text-[#8696A0] text-xs">online</div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#8696A0] text-xl">📹</span>
              <span className="text-[#8696A0] text-xl">📞</span>
              <span className="text-[#8696A0] text-xl">⋮</span>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            id="whatsapp-messages"
            className="h-[450px] overflow-y-auto px-4 py-4 bg-[#0D1418] space-y-3"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.02) 10px, rgba(255,255,255,.02) 11px)'
            }}
          >
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <p className="text-[#8696A0] text-sm text-center px-8">
                  Clique nos botões abaixo para ver o Listzap em ação 👇
                </p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-3 py-2 ${
                    msg.type === 'user'
                      ? 'bg-[#005C4B] text-white'
                      : 'bg-[#1F2C33] text-[#E9EDEF]'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{msg.content}</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[10px] text-[#8696A0]">{msg.timestamp}</span>
                    {msg.type === 'user' && <span className="text-[#53BDEB] text-xs">✓✓</span>}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-[#1F2C33] rounded-lg px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#8696A0] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#8696A0] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#8696A0] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 space-y-3">
        <Button
          onClick={handleExample1}
          disabled={isTyping}
          className="w-full bg-[#00BCD4] hover:bg-[#00E5FF] text-white py-6 text-sm font-medium rounded-lg transition-all disabled:opacity-50"
        >
          💳 Gastei R$350 mercado
        </Button>
        
        <Button
          onClick={handleExample2}
          disabled={isTyping}
          className="w-full bg-[#00BCD4] hover:bg-[#00E5FF] text-white py-6 text-sm font-medium rounded-lg transition-all disabled:opacity-50"
        >
          📊 Quanto gastei esse mês?
        </Button>

        {messages.length > 0 && (
          <button
            onClick={resetChat}
            className="w-full text-[#00BCD4] hover:text-[#00E5FF] text-sm py-2 transition-colors"
          >
            🔄 Limpar conversa
          </button>
        )}
      </div>
    </div>
  );
};
