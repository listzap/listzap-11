import { appConfig } from "@/config/app";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
const Template4 = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('precos');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-gradient-to-b from-[#0F1629] via-[#1A1F3A] to-[#0F1629] text-white relative overflow-hidden">
      
      {/* ========== HERO SECTION ========== */}
      <section id="hero" className="relative min-h-[700px] md:min-h-[600px] flex items-center justify-center px-5 md:px-10 py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#1A1F3A] to-[#0F1629]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center md:text-left space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-[56px] font-bold leading-tight tracking-tight text-white" style={{
              letterSpacing: '-1px'
            }}>
                Você não é irresponsável.<br />
                Seu dinheiro é que ficou invisível.
              </h1>
              
              <p className="text-base md:text-lg text-[#B0B5C1] leading-relaxed mt-5">
                A verdade? Ninguém sabe para onde o dinheiro vai. Até agora.
              </p>
              
              <div className="mt-8">
                <Button onClick={scrollToPlans} className="bg-[#00BCD4] hover:bg-[#00E5FF] text-white px-10 py-4 text-base font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                  Mostrar Meu Dinheiro (3 minutos)
                </Button>
              </div>
              
              <p className="text-sm text-[#B0B5C1] mt-10 flex items-center justify-center md:justify-start gap-2">
                <span className="text-[#00BCD4]">✓</span>
                7.000+ pessoas descobriram que NÃO eram desorganizadas. Eram só invisíveis.
              </p>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative animate-slide-in-right">
              <img src="/imagens/app-dashboard.png" alt="Dashboard Listzap" className="w-full max-w-[500px] h-auto mx-auto drop-shadow-2xl" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-600 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-500 rounded-full opacity-30 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3 SEGUNDOS QUE MUDAM TUDO ========== */}
      <section id="tres-segundos" className="py-20 md:py-24 bg-gradient-to-b from-[#0F1629] to-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-12 tracking-tight">
            3 Segundos Que Mudam Tudo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[rgba(0,188,212,0.1)] p-8 rounded-xl border-l-4 border-[#00BCD4] animate-fade-in">
              <div className="text-4xl mb-4">1️⃣</div>
              <p className="text-base text-white leading-relaxed">
                Você envia no WhatsApp: "Gasto 150 no mercado" (do jeito que fala mesmo)
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-[rgba(0,188,212,0.1)] p-8 rounded-xl border-l-4 border-[#00BCD4] animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-4xl mb-4">2️⃣</div>
              <p className="text-base text-white leading-relaxed">
                Listzap classifica automático: Alimentação • R$150 • 15:47
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-[rgba(0,188,212,0.1)] p-8 rounded-xl border-l-4 border-[#00BCD4] animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="text-4xl mb-4">3️⃣</div>
              <p className="text-base text-white leading-relaxed">
                Você finalmente respira: Seu dinheiro tem história, tem destino
              </p>
            </div>
          </div>
          
          <p className="text-base text-[#B0B5C1] text-center mt-10">
            Isso é literalmente tudo. Sem planilhas. Sem app extra. Sem disciplina.
          </p>
          
          <div className="text-center mt-6">
            <button onClick={scrollToPlans} className="text-[#00BCD4] hover:text-[#00E5FF] font-semibold text-sm hover:underline cursor-pointer transition-colors">
              Ver Exemplo Real ↓
            </button>
          </div>
        </div>
      </section>

      {/* ========== QUAL É SEU TIPO? (PERSONAS) ========== */}
      <section id="qual-seu-tipo" className="py-20 md:py-24 bg-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-12 tracking-tight">
            Qual É Seu Tipo?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Freelancer */}
            <div className="bg-[rgba(0,188,212,0.08)] p-9 rounded-xl border border-[rgba(0,188,212,0.3)] hover:border-[#00BCD4] hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3 text-[#00BCD4]">📱</div>
              <h3 className="text-xl font-semibold text-white mb-4">O Freelancer</h3>
              <p className="text-base text-[#B0B5C1] leading-relaxed mb-5">
                Você recebe R$ 3000 um mês, R$ 500 outro mês.<br />
                Não sabe se está ganhando ou perdendo.<br />
                Isso muda aqui.
              </p>
              
            </div>
            
            {/* Mãe */}
            <div className="bg-[rgba(0,188,212,0.08)] p-9 rounded-xl border border-[rgba(0,188,212,0.3)] hover:border-[#00BCD4] hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3 text-[#00BCD4]">👨‍👩‍👧</div>
              <h3 className="text-xl font-semibold text-white mb-4">A Mãe</h3>
              <p className="text-base text-[#B0B5C1] leading-relaxed mb-5">
                Você quer saber se dá pra tirar os filhos da escola, se paga aluguel no dia.<br />
                Cansou de contar nos dedos.
              </p>
              
            </div>
            
            {/* Autônomo */}
            <div className="bg-[rgba(0,188,212,0.08)] p-9 rounded-xl border border-[rgba(0,188,212,0.3)] hover:border-[#00BCD4] hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3 text-[#00BCD4]">🚗</div>
              <h3 className="text-xl font-semibold text-white mb-4">O Autônomo</h3>
              <p className="text-base text-[#B0B5C1] leading-relaxed mb-5">
                Sua renda varia.<br />
                Você não sabe se pode gastar R$ 100 hoje sem ficar apertado.<br />
                Precisa saber agora.
              </p>
              
            </div>
            
            {/* Profissional */}
            <div className="bg-[rgba(0,188,212,0.08)] p-9 rounded-xl border border-[rgba(0,188,212,0.3)] hover:border-[#00BCD4] hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3 text-[#00BCD4]">💼</div>
              <h3 className="text-xl font-semibold text-white mb-4">O Profissional</h3>
              <p className="text-base text-[#B0B5C1] leading-relaxed mb-5">
                Você ganha bem, mas no final do mês a grana desapareceu.<br />
                Quer saber aonde.<br />
                Finalmente.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* ========== PERGUNTE O QUE QUISER (MODIFIED) ========== */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F1629] to-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-6">
            Fale com a IA como se fosse um amigo que entende de dinheiro
          </h2>
          
          <p className="text-center text-[#B0B5C1] text-base mb-12">
            Não precisa saber o jargão certo. Fala do seu jeito mesmo.
          </p>
          
          {/* Movement Examples - Horizontal Scroll */}
          {/* Infinite Scroll - Funcionalidades */}
          <div className="space-y-4 mb-12">
            {/* Linha 1 - Scroll para esquerda */}
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-scroll-left">
                {['📊 Registrar gastos por voz', '💰 Ver saldo em tempo real', '📈 Análise inteligente de gastos', '🎯 Definir metas financeiras', '🔔 Alertas de vencimento', '📱 Acesso via WhatsApp', '🤖 IA que entende você', '💳 Categorização automática', '📊 Registrar gastos por voz', '💰 Ver saldo em tempo real', '📈 Análise inteligente de gastos', '🎯 Definir metas financeiras', '🔔 Alertas de vencimento'].map((item, i) => <div key={i} className="bg-[rgba(0,188,212,0.08)] px-5 py-3 rounded-full border border-[rgba(0,188,212,0.2)] whitespace-nowrap text-sm text-[#B0B5C1] flex-shrink-0">
                    {item}
                  </div>)}
              </div>
            </div>

            {/* Linha 2 - Scroll para direita */}
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-scroll-right">
                {['📉 Relatórios detalhados', '🔐 Dados 100% seguros', '⚡ Respostas instantâneas', '💡 Insights personalizados', '📅 Controle de recorrências', '🎨 Interface simples', '💬 Suporte humanizado', '📉 Relatórios detalhados', '🔐 Dados 100% seguros', '⚡ Respostas instantâneas', '💡 Insights personalizados', '📅 Controle de recorrências', '🎨 Interface simples'].map((item, i) => <div key={i} className="bg-[rgba(0,188,212,0.1)] px-5 py-3 rounded-full border border-[rgba(0,188,212,0.3)] whitespace-nowrap text-sm text-white flex-shrink-0">
                    {item}
                  </div>)}
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-[#B0B5C1] italic mt-5">
            A IA do Listzap não julga.<br />
            Entende gíria, abreviação, tudo. Responde como um amigo que manja, não como um robô.
          </p>
        </div>
      </section>

      {/* ========== VEJA COMO FUNCIONA NA PRÁTICA ========== */}
      <section className="py-20 md:py-24 bg-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-6">
            Veja Como Funciona Na Prática
          </h2>
          
          <p className="text-center text-[#B0B5C1] text-base mb-16">
            Clique nos botões e veja o Listzap respondendo em tempo real
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* WhatsApp Demo - Left Column */}
            <div className="flex justify-center">
              <WhatsAppDemo />
            </div>

            {/* Explanatory Content - Right Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  É Simples Assim
                </h3>
                <p className="text-base text-[#B0B5C1] leading-relaxed">
                  Você manda uma mensagem simples, do jeito que você fala no dia a dia.
                  O Listzap entende, organiza e te responde na hora.
                </p>
              </div>

              <div className="bg-[rgba(0,188,212,0.08)] p-6 rounded-xl border border-[rgba(0,188,212,0.2)]">
                <h4 className="text-lg font-semibold text-white mb-3">
                  ✅ O que você pode fazer:
                </h4>
                <ul className="space-y-3 text-[#B0B5C1] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00BCD4] mt-1">→</span>
                    <span>Registrar gastos falando naturalmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00BCD4] mt-1">→</span>
                    <span>Perguntar sobre suas finanças a qualquer momento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00BCD4] mt-1">→</span>
                    <span>Receber insights e análises em segundos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00BCD4] mt-1">→</span>
                    <span>Ver gráficos e relatórios automáticos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[rgba(0,188,212,0.05)] p-6 rounded-xl border border-[rgba(0,188,212,0.1)]">
                <p className="text-sm text-[#B0B5C1] italic">
                  💡 <strong className="text-white">Dica:</strong> Não precisa ser formal.
                  Escreve como você fala com um amigo. O Listzap entende gírias,
                  abreviações e até erros de digitação.
                </p>
              </div>

              <div className="pt-4">
                <Button onClick={scrollToPlans} className="bg-[#00BCD4] hover:bg-[#00E5FF] text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300 w-full md:w-auto">
                  Quero Começar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== A VERDADE DESCONFORTÁVEL ========== */}
      <section id="verdade-desconfortavel" className="py-20 md:py-24 bg-[#0F1629] px-5 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-16 tracking-tight">
            A Verdade Que Ninguém Fala
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* ANTES */}
            <div className="bg-[rgba(255,0,0,0.05)] p-8 md:p-10 rounded-xl">
              <h3 className="text-lg font-semibold text-[#FF6B6B] mb-6">
                ANTES (Invisibilidade)
              </h3>
              <ul className="space-y-4">
                <li className="text-sm md:text-base text-[#B0B5C1] flex items-start gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>Todo mês seu dinheiro desaparece</span>
                </li>
                <li className="text-sm md:text-base text-[#B0B5C1] flex items-start gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>Você sabe que desapareceu, mas NÃO sabe aonde</span>
                </li>
                <li className="text-sm md:text-base text-[#B0B5C1] flex items-start gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>Ansiedade todo fim de mês. Pânico quando liga o extrato.</span>
                </li>
                <li className="text-sm md:text-base text-[#B0B5C1] flex items-start gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>Culpa de gastar. Vergonha de não saber. Medo do que vem.</span>
                </li>
              </ul>
            </div>
            
            {/* DEPOIS */}
            <div className="bg-[rgba(0,255,0,0.05)] p-8 md:p-10 rounded-xl">
              <h3 className="text-lg font-semibold text-[#4ECDC4] mb-6">
                DEPOIS (Visibilidade)
              </h3>
              <ul className="space-y-4">
                <li className="text-sm md:text-base text-[#B0B5C1] flex items-start gap-3">
                  <span className="flex-shrink-0">✅</span>
                  <span>Você vê aonde cada real foi. Não é mágica, é transparência.</span>
                </li>
                <li className="text-sm md:text-base text-[#B0B5C1] flex items-start gap-3">
                  <span className="flex-shrink-0">✅</span>
                  <span>Agora você sabe. Sem surpresas no final do mês. Sem susto.</span>
                </li>
                <li className="text-sm md:text-base text-[#B0B5C1] flex items-start gap-3">
                  <span className="flex-shrink-0">✅</span>
                  <span>O pânico no mercado vira certeza</span>
                </li>
                <li className="text-sm md:text-base text-[#B0B5C1] flex items-start gap-3">
                  <span className="flex-shrink-0">✅</span>
                  <span>Você gasta sabendo por quê. Sem culpa. Sem julgamento.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-base md:text-lg font-medium text-white text-center leading-relaxed max-w-2xl mx-auto mb-10 px-4">
            Não é sobre ser rico. É sobre NÃO SOFRER.<br /><br />
            Porque quando seu dinheiro fica visível, você dorme tranquilo.<br />
            E as decisões vêm naturais. Sem força. Sem disciplina.
          </p>
          
          <div className="text-center px-4">
            <Button onClick={scrollToPlans} className="w-full md:w-auto bg-[#00BCD4] hover:bg-[#00E5FF] text-white px-8 md:px-10 py-4 text-base font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              Quero Finalmente Respirar Tranquilo
            </Button>
          </div>
        </div>
      </section>

      {/* ========== POR QUE LISTZAP É DIFERENTE ========== */}
      <section id="por-que-listzap" className="py-20 md:py-24 bg-gradient-to-b from-[#1A1F3A] to-[#0F1629] px-5 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-16 tracking-tight">
            Por Que Listzap É Diferente
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[rgba(0,188,212,0.08)] p-9 rounded-xl border border-[rgba(0,188,212,0.3)] hover:border-[#00BCD4] hover:scale-105 transition-all duration-300 flex flex-col min-h-[280px]">
              <div className="text-5xl mb-5">📱</div>
              <h3 className="text-[22px] font-semibold text-white mb-4">
                Não é Outro App
              </h3>
              <p className="text-base text-[#B0B5C1] leading-relaxed flex-grow">
                Funciona no WhatsApp que você já abre todo dia.<br />
                Sem baixar app. Sem perder tempo. Sem uma coisa a mais para lembrar.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[rgba(0,188,212,0.08)] p-9 rounded-xl border border-[rgba(0,188,212,0.3)] hover:border-[#00BCD4] hover:scale-105 transition-all duration-300 flex flex-col min-h-[280px]">
              <div className="text-5xl mb-5">🧠</div>
              <h3 className="text-[22px] font-semibold text-white mb-4">
                Você Não É Irresponsável
              </h3>
              <p className="text-base text-[#B0B5C1] leading-relaxed flex-grow">
                Você não é desorganizado. Seu dinheiro é invisível.<br />
                A maioria das pessoas tem esse problema. Listzap resolve.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-[rgba(0,188,212,0.08)] p-9 rounded-xl border border-[rgba(0,188,212,0.3)] hover:border-[#00BCD4] hover:scale-105 transition-all duration-300 flex flex-col min-h-[280px]">
              <div className="text-5xl mb-5">✨</div>
              <h3 className="text-[22px] font-semibold text-white mb-4">
                Feito Para Quem Não É Organizado
              </h3>
              <p className="text-base text-[#B0B5C1] leading-relaxed flex-grow">
                Sem planilhas. Sem esforço extra. Sem promessas de disciplina.<br />
                Listzap é para quem já tentou tudo e quer que finalmente funcione.
              </p>
            </div>
          </div>
          
          <p className="text-lg font-medium text-white text-center mt-16 leading-relaxed">
            Listzap é para quem cansou de tentar.<br />
            E quer FINALMENTE entender seu dinheiro.
          </p>
          
          <div className="text-center mt-8">
            <button onClick={scrollToPlans} className="text-[#00BCD4] hover:text-[#00E5FF] font-semibold text-sm cursor-pointer transition-colors hover:underline">
              Escolha Seu Acesso Abaixo
            </button>
          </div>
        </div>
      </section>

      {/* ========== CONTROLE DE ONDE ESTIVER ========== */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F1629] to-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-8 tracking-tight">
            Acesso Total De Onde Estiver
          </h2>
          
          <p className="text-base md:text-lg text-[#B0B5C1] text-center leading-relaxed max-w-3xl mx-auto mb-12">
            Você tá na fila do mercado. O pânico bate: "Dá pra comprar?"<br />
            Você manda uma msg. A resposta vem em SEGUNDOS.<br /><br />
            Sem abrir app nenhum. Sem esperar. Sem susto. PRONTO.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Saldo sempre atualizado', 'Sabe aonde seu dinheiro foi', 'Sem baixar mais um app', 'Metas ilimitadas', 'Aviso automático quando conta vence'].map((item, i) => <div key={i} className="bg-[rgba(0,188,212,0.1)] p-6 rounded-xl text-center border border-[rgba(0,188,212,0.3)]">
                <p className="text-white font-medium text-sm">{item}</p>
              </div>)}
          </div>
          
          <div className="mt-16 text-center">
            <img src="/imagens/app-macbook-poupeja.png" alt="Listzap em múltiplos dispositivos" className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ========== +32% ECONOMIA ========== */}
      <section className="py-20 md:py-24 bg-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl md:text-7xl font-bold text-[#00BCD4] mb-4">
            +32%
          </div>
          <p className="text-base text-[#B0B5C1] mb-6">
            Menos gastos desnecessários
          </p>
          <p className="text-sm text-[#B0B5C1] leading-relaxed">
            Com clareza, você corta gastos que não fazem sentido.<br />
            Resultado: 32% menos dinheiro jogado fora (sem sacrificar nada que importa).
          </p>
        </div>
      </section>

      {/* ========== TABELA COMPARATIVA ========== */}
      <section id="comparacao" className="py-20 md:py-24 bg-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-12 tracking-tight">
            Listzap vs. Alternativas
          </h2>
          
          <div className="overflow-x-auto px-2">
            <div className="inline-block min-w-full rounded-xl border-2 border-[#00BCD4] shadow-[0_0_20px_rgba(0,188,212,0.5)] p-1">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="border-b-2 border-[rgba(0,188,212,0.3)]">
                    <th className="p-4 md:p-5 text-left text-sm md:text-base"></th>
                    <th className="p-4 md:p-5 text-white font-semibold text-sm md:text-base">Planilha</th>
                    <th className="p-4 md:p-5 text-white font-semibold text-sm md:text-base">App Financeiro</th>
                    <th className="p-4 md:p-5 text-white font-semibold bg-[rgba(0,188,212,0.2)] text-sm md:text-base">Listzap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[rgba(0,188,212,0.1)]">
                    <td className="p-3 md:p-4 text-left text-[#B0B5C1] text-sm md:text-base">Fácil de lembrar?</td>
                    <td className="p-3 md:p-4 text-lg md:text-xl">❌</td>
                    <td className="p-3 md:p-4 text-lg md:text-xl">❌</td>
                    <td className="p-3 md:p-4 bg-[rgba(0,188,212,0.1)] border-l-4 border-[#00BCD4] text-lg md:text-xl">✅</td>
                  </tr>
                  <tr className="border-b border-[rgba(0,188,212,0.1)]">
                    <td className="p-3 md:p-4 text-left text-[#B0B5C1] text-sm md:text-base">Sem app extra?</td>
                    <td className="p-3 md:p-4 text-lg md:text-xl">❌</td>
                    <td className="p-3 md:p-4 text-lg md:text-xl">❌</td>
                    <td className="p-3 md:p-4 bg-[rgba(0,188,212,0.1)] border-l-4 border-[#00BCD4] text-lg md:text-xl">✅</td>
                  </tr>
                  <tr className="border-b border-[rgba(0,188,212,0.1)]">
                    <td className="p-3 md:p-4 text-left text-[#B0B5C1] text-sm md:text-base">IA te ajuda?</td>
                    <td className="p-3 md:p-4 text-lg md:text-xl">❌</td>
                    <td className="p-3 md:p-4 text-lg md:text-xl">❌</td>
                    <td className="p-3 md:p-4 bg-[rgba(0,188,212,0.1)] border-l-4 border-[#00BCD4] text-lg md:text-xl">✅</td>
                  </tr>
                  <tr>
                    <td className="p-3 md:p-4 text-left text-[#B0B5C1] text-sm md:text-base">Resultado imediato?</td>
                    <td className="p-3 md:p-4 text-lg md:text-xl">❌</td>
                    <td className="p-3 md:p-4 text-lg md:text-xl">⚠️</td>
                    <td className="p-3 md:p-4 bg-[rgba(0,188,212,0.1)] border-l-4 border-[#00BCD4] text-lg md:text-xl">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="text-sm md:text-base font-medium text-white text-center mt-12 px-4">
            Listzap é para quem cansou de tentar.<br />
            E quer FINALMENTE entender seu dinheiro.
          </p>
        </div>
      </section>

      {/* ========== NÚMEROS QUE FALAM ========== */}
      <section id="numeros" className="py-20 md:py-24 bg-gradient-to-b from-[#0F1629] to-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-16 tracking-tight">
            Números Que Falam
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            number: '7 EM 10',
            text: 'Dizem "nossa, nem sabia que gastava isso"'
          }, {
            number: '85%',
            text: 'Acordam sem aquela sensação de vazio'
          }, {
            number: '30%+',
            text: 'Cortam gastos SEM ESFORÇO (a clareza faz o trabalho)'
          }, {
            number: '+50K',
            text: 'Já confiam em Listzap'
          }].map((stat, i) => <div key={i} className="bg-[rgba(0,188,212,0.08)] p-8 md:p-9 rounded-xl border-2 border-[rgba(0,188,212,0.3)] text-center hover:scale-105 hover:border-[#00BCD4] transition-all duration-300 flex flex-col justify-center min-h-[200px]">
                <h3 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-4">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-[#B0B5C1] leading-relaxed">
                  {stat.text}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* ========== VOZES REAIS (DEPOIMENTOS) ========== */}
      <section id="depoimentos" className="py-20 md:py-24 bg-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-[42px] font-bold text-white text-center mb-16 tracking-tight">
            Vozes Reais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            text: 'Eu achava que era incompetente. Descobri que era invisível.\nAgora vejo. Durmo sem preocupação.\nAcordo sem aquele nó no estômago.',
            name: 'Carolina',
            role: '34 • Freelancer'
          }, {
            text: 'Todo final de mês era uma crise.\nAgora sei quanto tenho, quanto preciso.\nA grana acaba, mas sem susto. Sem aquele aperto no peito.',
            name: 'Roberto',
            role: '42 • Autônomo'
          }, {
            text: 'Eu vivia escondendo extrato do meu marido.\nAgora a gente sabe junto. Sem briga.\nSem mentira. Sem aquela tensão.',
            name: 'Ana',
            role: '31 • Casada'
          }].map((testimonial, i) => <div key={i} className="bg-[rgba(0,188,212,0.08)] p-8 rounded-xl border border-[rgba(0,188,212,0.3)] flex flex-col min-h-[220px]">
                <div className="text-lg text-[#FFD700] mb-5">⭐⭐⭐⭐⭐</div>
                <p className="text-[15px] text-[#B0B5C1] italic leading-relaxed mb-5 flex-grow whitespace-pre-line">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto pt-4 border-t border-[rgba(0,188,212,0.2)]">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-[#00BCD4] mt-1">{testimonial.role}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* ========== SEÇÃO DE PLANOS (PRICING) ========== */}
      <section id="precos" className="py-24 md:py-28 bg-gradient-to-b from-[#0F1629] to-[#1A1F3A] px-5 md:px-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-5 tracking-tight">
            Escolha Seu Acesso
          </h2>
          
          <p className="text-lg md:text-xl text-[#B0B5C1] text-center leading-relaxed mb-16 max-w-2xl mx-auto">
            Você finalmente descobriu para onde seu dinheiro vai.<br />
            Agora escolha como quer começar.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* PLANO MENSAL */}
            <div className="bg-[rgba(0,188,212,0.05)] p-11 rounded-xl border-2 border-[rgba(0,188,212,0.2)] min-h-[500px] flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Plano Mensal</h3>
              
              <div className="mb-8">
                <span className="text-white text-lg">R$ </span>
                <span className="text-[#00BCD4] text-5xl font-bold">{appConfig.plan_price_monthly}</span>
                <span className="text-[#B0B5C1] text-lg">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {appConfig.plan_features_monthly.map((feature, idx) => <li key={idx} className="flex items-start gap-3 text-base text-[#B0B5C1]">
                    <span className="text-[#4ECDC4]">✓</span> {feature}
                  </li>)}
              </ul>
              
              <Button onClick={() => window.open(`${appConfig.app_url}/auth?mode=register&planType=monthly`, '_blank')} className="w-full bg-[rgba(0,188,212,0.3)] hover:bg-[#00BCD4] text-white py-4 text-base font-semibold rounded-lg transition-all duration-300">
                Começar Mensal
              </Button>
            </div>
            
            {/* PLANO ANUAL (DESTAQUE) */}
            <div className="relative bg-[rgba(0,188,212,0.15)] p-11 rounded-xl border-2 border-[#00BCD4] min-h-[500px] flex flex-col shadow-[0_0_30px_rgba(0,188,212,0.3)]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[rgba(0,255,0,0.15)] text-[#4ECDC4] px-6 py-2 rounded-full text-xs font-semibold">
                  🌟 MAIS ESCOLHIDO 🌟
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 mt-2">Plano Anual</h3>
              
              <div className="mb-6">
                <span className="text-white text-lg">R$ </span>
                <span className="text-[#00BCD4] text-5xl font-bold">{appConfig.plan_price_annual}</span>
                <span className="text-[#B0B5C1] text-lg">/ano</span>
              </div>
              
              <div className="bg-[rgba(0,188,212,0.1)] p-5 rounded-lg mb-8">
                <p className="text-base text-[#4ECDC4] font-semibold text-center">
                  Apenas R$ {(parseFloat(appConfig.plan_price_annual.replace(',', '.')) / 12).toFixed(2).replace('.', ',')}/mês<br />
                  <strong>34% de economia</strong>
                </p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {appConfig.plan_features_annual.map((feature, idx) => <li key={idx} className="flex items-start gap-3 text-base text-[#B0B5C1] font-medium">
                    <span className="text-[#4ECDC4]">✓</span> {feature}
                  </li>)}
              </ul>
              
              <Button onClick={() => window.open(`${appConfig.app_url}/auth?mode=register&planType=annual`, '_blank')} className="w-full bg-[#00BCD4] hover:bg-[#00E5FF] text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                Começar Agora (Anual) ✨
              </Button>
              
              <p className="text-center text-[13px] text-[#B0B5C1] italic mt-5">
                7 dias de garantia. Cancele quando quiser.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-base text-white leading-relaxed">
              Qual é a sua escolha?<br /><br />
              Mensal: Teste sem compromisso<br />
              Anual: Invista em você (com maior desconto)
            </p>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section id="cta-final" className="py-20 md:py-24 bg-[#0F1629] px-5 md:px-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-[42px] font-bold text-white mb-5">
            Pronto Para Entender Seu Dinheiro?
          </h2>
          
          <p className="text-xl md:text-2xl text-[#B0B5C1] font-medium mb-10">
            Qual é a sua escolha?
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Button onClick={() => window.open(`${appConfig.app_url}/auth?mode=register&planType=monthly`, '_blank')} className="bg-[rgba(0,188,212,0.3)] hover:bg-[#00BCD4] text-white px-10 py-4 text-base rounded-lg transition-all duration-300">
              Começar Mensal
            </Button>
            <Button onClick={() => window.open(`${appConfig.app_url}/auth?mode=register&planType=annual`, '_blank')} className="bg-[#00BCD4] hover:bg-[#00E5FF] text-white px-10 py-4 text-base font-semibold rounded-lg hover:scale-105 transition-all duration-300">
              Começar Anual ✨
            </Button>
          </div>
          
          <p className="text-sm text-[#B0B5C1]">
            7 dias de garantia. Sem compromisso. Cancele quando quiser.
          </p>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Template4;