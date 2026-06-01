import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "@/components/Slide";
import ProblemCard from "@/components/ProblemCard";
import DeliveryCard from "@/components/DeliveryCard";
import {
  ChevronDown,
  ChevronUp,
  Play,
  Lock,
  TrendingUp,
  Shield,
  Database,
  Code,
  CheckCircle,
  AlertCircle,
  Zap,
  GitBranch,
  BarChart3,
  Workflow,
} from "lucide-react";

/**
 * WSP Finance - Apresentação Interativa em Slides
 * Design: Futurismo Premium Financeiro
 * Tema: Dark com gradiente roxo-azul, glassmorphism, glow effects
 */

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Fundo com gradiente animado */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        {/* SLIDE 1: Capa */}
        {currentSlide === 0 && (
          <motion.div
            key="slide-1"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full text-center space-y-8">
              {/* Logo com glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 glow-pulse" />
                  <img
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt="WSP Finance"
                    className="h-32 md:h-40 lg:h-48 relative z-10 object-contain"
                  />
                </div>
              </motion.div>

              {/* Título */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-display text-white mb-4">WSP Finance</h1>
                <p className="text-xl md:text-2xl text-cyan-300 font-poppins font-semibold">
                  Gestão financeira e contábil para MEIs, pequenos negócios e contadores
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-300 text-sm font-semibold">
                  🎓 MVP Acadêmico · Apresentação Final
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-400">
                  <span>Wellington Siqueira Porto</span>
                  <span className="text-purple-500/60">•</span>
                  <span>Arthur Dos Anjos</span>
                  <span className="text-purple-500/60">•</span>
                  <span>Kauã Hiro</span>
                </div>
              </motion.div>

              {/* Descrição */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Um MVP para organizar finanças, separar pessoa física e jurídica e reduzir
                  retrabalho contábil.
                </p>
              </motion.div>

              {/* Botão CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button
                  onClick={nextSlide}
                  className="btn-primary flex items-center gap-2 mx-auto"
                >
                  <Play size={20} />
                  Iniciar Apresentação
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 2: O Problema */}
        {currentSlide === 1 && (
          <motion.div
            key="slide-2"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-heading text-white mb-2">O problema que queremos resolver</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <ProblemCard
                  title="Mistura CPF/CNPJ"
                  description="O empreendedor mistura gastos pessoais e empresariais."
                  icon="💳"
                  delay={0.1}
                />
                <ProblemCard
                  title="Retrabalho contábil"
                  description="O contador recebe dados incompletos ou desorganizados."
                  icon="📋"
                  delay={0.2}
                />
                <ProblemCard
                  title="Baixa rastreabilidade"
                  description="Falta histórico claro do que foi exportado ou revisado."
                  icon="🔍"
                  delay={0.3}
                />
                <ProblemCard
                  title="Risco operacional"
                  description="Acesso indevido pode alterar dados financeiros sensíveis."
                  icon="⚠️"
                  delay={0.4}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 3: Nossa Solução */}
        {currentSlide === 2 && (
          <motion.div
            key="slide-3"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-heading text-white mb-2">A proposta do WSP Finance</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>

              {/* Fluxo visual */}
              {/* Fluxo visual em pipeline */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
                {[
                  { label: "Workspaces separados", color: "border-purple-500", icon: "📦" },
                  { label: "Gestão financeira", color: "border-blue-500", icon: "💰" },
                  { label: "Contador com acesso seguro", color: "border-cyan-500", icon: "🔐" },
                  { label: "Exportação contábil", color: "border-green-500", icon: "📤" },
                  { label: "Rastreabilidade", color: "border-amber-500", icon: "🔍" },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                    className={`glass-card p-4 border-t-2 ${step.color} text-center flex flex-col items-center gap-2`}
                  >
                    <div className="text-2xl">{step.icon}</div>
                    <p className="text-sm font-semibold text-white">{step.label}</p>
                    {idx < 4 && <ChevronDown className="text-gray-500 hidden md:block rotate-[-90deg] absolute -right-3" size={16} />}
                  </motion.div>
                ))}
              </div>

              {/* Três blocos de valor */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="glass-card p-8 border-l-4 border-blue-500"
                >
                  <div className="text-3xl mb-3">👤</div>
                  <h3 className="text-lg font-bold text-white mb-2">Cliente</h3>
                  <p className="text-gray-300 text-sm">Organiza receitas, despesas e anexos no seu workspace</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="glass-card p-8 border-l-4 border-cyan-500"
                >
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-lg font-bold text-white mb-2">Contador</h3>
                  <p className="text-gray-300 text-sm">Acompanha clientes sem alterar saldo indevidamente</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="glass-card p-8 border-l-4 border-green-500"
                >
                  <div className="text-3xl mb-3">📋</div>
                  <h3 className="text-lg font-bold text-white mb-2">Sistema</h3>
                  <p className="text-gray-300 text-sm">Gera exportações contábeis auditáveis com rastreabilidade</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 4: Principais Entregas */}
        {currentSlide === 3 && (
          <motion.div
            key="slide-4"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-heading text-white mb-2">O que foi entregue</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <DeliveryCard
                  title="Workspaces PF/PJ"
                  description="Separação entre contexto pessoal e empresarial"
                  icon={<Database size={24} />}
                  delay={0.1}
                />
                <DeliveryCard
                  title="Dashboard financeiro"
                  description="Visão organizada de receitas, despesas e saldo"
                  icon={<BarChart3 size={24} />}
                  delay={0.2}
                />
                <DeliveryCard
                  title="Transações e anexos"
                  description="Controle dos registros financeiros"
                  icon={<TrendingUp size={24} />}
                  delay={0.3}
                />
                <DeliveryCard
                  title="Hub do Contador"
                  description="Visão multi-cliente para acompanhamento"
                  icon={<Workflow size={24} />}
                  delay={0.4}
                />
                <DeliveryCard
                  title="RBAC financeiro"
                  description="Contador visualiza, mas não altera o financeiro"
                  icon={<Lock size={24} />}
                  delay={0.5}
                  highlight
                />
                <DeliveryCard
                  title="Exportação Domínio"
                  description="Geração de arquivo contábil validado"
                  icon={<Code size={24} />}
                  delay={0.6}
                  highlight
                />
                <DeliveryCard
                  title="AuditLog e rastreabilidade"
                  description="Registro completo de ações sensíveis e rastreabilidade"
                  icon={<Shield size={24} />}
                  delay={0.7}
                />
                <DeliveryCard
                  title="Histórico de exportações"
                  description="Consulta e re-download quando disponível"
                  icon={<CheckCircle size={24} />}
                  delay={0.8}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 5: Arquitetura e Tecnologias */}
        {currentSlide === 4 && (
          <motion.div
            key="slide-5"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-heading text-white mb-2">Tecnologias utilizadas</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Frontend",
                    items: ["React", "Vite", "TypeScript", "React Router", "TanStack Query"],
                    icon: "🎨",
                    delay: 0.1,
                  },
                  {
                    title: "Backend",
                    items: ["Node.js", "Express", "TypeScript", "Controller/Service/Repository"],
                    icon: "⚙️",
                    delay: 0.2,
                  },
                  {
                    title: "Dados e Segurança",
                    items: ["PostgreSQL", "Prisma ORM", "Migrations", "RLS", "RBAC", "JWT", "Middlewares"],
                    icon: "🔐",
                    delay: 0.3,
                  },
                  {
                    title: "Qualidade e Arquivos",
                    items: ["Vitest", "Supertest", "Typecheck", "GitHub PR checks", "Cloudflare R2 (S3-compatible)", "SHA-256", "Windows-1252"],
                    icon: "✅",
                    delay: 0.4,
                  },
                ].map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: section.delay }}
                    className="glass-card p-8 border-t-2 border-purple-500"
                  >
                    <div className="text-3xl mb-4">{section.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 6: Segurança */}
        {currentSlide === 5 && (
          <motion.div
            key="slide-6"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-heading text-white mb-2">Segurança como base do MVP</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>

              <div className="space-y-4 max-w-3xl">
                {[
                  { label: "Autenticação", icon: "🔑" },
                  { label: "Workspace atual", icon: "📦" },
                  { label: "RBAC por papel", icon: "👥" },
                  { label: "Bloqueio de mutações financeiras", icon: "🚫" },
                  { label: "RLS no banco", icon: "🔒" },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card p-6 flex items-center gap-4 border-l-4 border-blue-500"
                  >
                    <div className="text-3xl">{step.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{step.label}</h3>
                    </div>
                    {idx < 4 && <ChevronDown className="text-blue-400" size={24} />}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 glass-card p-8 border-2 border-purple-500 bg-purple-500/10"
              >
                <p className="text-xl text-white font-semibold text-center">
                  O contador pode visualizar, mas não pode alterar o saldo ou o ledger financeiro
                  do cliente.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 7: Demonstração */}
        {currentSlide === 6 && (
          <motion.div
            key="slide-7"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-heading text-white mb-2">Demonstração do MVP</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "Cliente", 
                    desc: "Dashboard, transações e anexos", 
                    icon: "👤",
                    topics: [
                      "Visão geral financeira no dashboard",
                      "Criação e categorização de transações",
                      "Upload de comprovantes e anexos",
                      "Separação clara entre Pessoa Física e Jurídica"
                    ]
                  },
                  { 
                    title: "Contador", 
                    desc: "Hub e acesso a clientes", 
                    icon: "📊",
                    topics: [
                      "Hub central com todos os clientes vinculados",
                      "Acesso rápido aos workspaces dos clientes",
                      "Visão consolidada do status financeiro",
                      "Fácil navegação entre múltiplos contextos"
                    ]
                  },
                  { 
                    title: "Segurança", 
                    desc: "Tentativa bloqueada de mutação", 
                    icon: "🛡️",
                    topics: [
                      "RBAC restrito por perfil de usuário",
                      "Simulação de edição por contador (bloqueada)",
                      "RLS garantindo isolamento no banco de dados",
                      "Apenas o proprietário altera dados financeiros"
                    ]
                  },
                  { 
                    title: "Exportação", 
                    desc: "Validação e geração do TXT Domínio", 
                    icon: "📤",
                    topics: [
                      "Filtragem por período contábil",
                      "Validação de dados e preenchimento",
                      "Geração do arquivo TXT padrão Domínio",
                      "Registro de auditoria e rastreabilidade"
                    ]
                  },
                ].map((demo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card p-6 flex flex-col items-center text-center h-full"
                  >
                    <div className="text-4xl mb-3">{demo.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{demo.desc}</p>
                    <div className="w-full bg-background/40 rounded-lg border border-border p-4 text-left mt-auto">
                      <ul className="space-y-2">
                        {demo.topics.map((topic, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 8: Metodologia */}
        {currentSlide === 7 && (
          <motion.div
            key="slide-8"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-heading text-white mb-2">Como desenvolvemos com IA de forma controlada</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>

              <div className="space-y-4 mb-8">
                {[
                  "Issue",
                  "SDD",
                  "Planejamento técnico",
                  "TDD",
                  "Agente executor",
                  "Revisão técnica",
                  "PR checks",
                  "Handoff",
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <div className="glass-card flex-1 p-4">
                      <p className="text-white font-semibold">{step}</p>
                    </div>
                    {idx < 7 && <ChevronDown className="text-purple-400 hidden md:block rotate-90" size={20} />}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="glass-card p-6 border-l-4 border-cyan-500 mb-6"
              >
                <p className="text-gray-300 text-sm italic">
                  Cada etapa garante <span className="text-white font-semibold">controle humano</span> sobre o que a IA produz, com revisão técnica obrigatória antes do merge.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "SDD", desc: "Especificação antes da implementação", icon: "📝" },
                  { title: "Skills e MCPs", desc: "Apoio em análise, documentação e automação", icon: "🔧" },
                  { title: "Testes automatizados", desc: "Validação de services, rotas, RBAC e RLS", icon: "✅" },
                  { title: "GitHub PR validation", desc: "Checagens antes do merge", icon: "🔍" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="glass-card p-6"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 9: Desafios */}
        {currentSlide === 8 && (
          <motion.div
            key="slide-9"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-heading text-white mb-2">Desafios encontrados e priorização</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    title: "Validação contábil externa limitada",
                    impact: "Menos acesso a validações práticas com contador",
                    decision: "Pesquisa própria e decisões conservadoras",
                    status: "Roadmap",
                  },
                  {
                    title: "IA financeira",
                    impact: "Risco de falso positivo em classificação",
                    decision: "Adiada para roadmap futuro",
                    status: "Roadmap",
                  },
                  {
                    title: "Telegram OCR",
                    impact: "Exigia pipeline seguro e validação",
                    decision: "Evolução futura com segurança",
                    status: "Evolução futura",
                  },
                  {
                    title: "Open Finance",
                    impact: "Integração externa sensível",
                    decision: "Planejada para pós-MVP",
                    status: "Pós-MVP",
                  },
                  {
                    title: "DAS/DAS-MEI",
                    impact: "Feature ainda em consolidação",
                    decision: "Removida desta versão",
                    status: "Fora desta versão",
                  },
                ].map((challenge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{challenge.title}</h3>
                      <p className="text-gray-400 text-xs mb-1"><span className="text-amber-400 font-semibold">Impacto:</span> {challenge.impact}</p>
                      <p className="text-gray-400 text-xs"><span className="text-cyan-400 font-semibold">Decisão:</span> {challenge.decision}</p>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500 text-purple-300 text-sm font-semibold whitespace-nowrap">
                      {challenge.status}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 glass-card p-8 border-l-4 border-blue-500"
              >
                <p className="text-lg text-gray-300 italic">
                  "Preferimos entregar uma base segura e demonstrável em vez de incluir integrações
                  frágeis sem validação suficiente."
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* SLIDE 10: Conclusão */}
        {currentSlide === 9 && (
          <motion.div
            key="slide-10"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="text-heading text-white mb-2">Resultado final e evolução</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-card p-8 border-l-4 border-green-500"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={28} />
                    O MVP validou
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Separação PF/PJ",
                      "Colaboração segura com contador",
                      "Exportação contábil rastreável",
                      "Segurança multi-tenant",
                      "Base para evolução contábil e fiscal",
                    ].map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="glass-card p-8 border-l-4 border-blue-500"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Zap className="text-blue-400" size={28} />
                    Próximos passos
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "DAS/DAS-MEI",
                      "IA pedagógica",
                      "Telegram OCR",
                      "Open Finance",
                      "NFS-e/PGDAS",
                      "Multi-ERP",
                    ].map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card p-8 border-2 border-purple-500 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-center"
              >
                <p className="text-2xl font-bold text-white mb-4">
                  Entregamos uma base segura e evolutiva para um produto financeiro-contábil real.
                </p>
                <button
                  onClick={() => setCurrentSlide(0)}
                  className="btn-primary"
                >
                  Voltar ao início
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controles de navegação */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-purple-600/30 hover:bg-purple-600/50 text-white transition-all duration-300 border border-purple-500/50"
          aria-label="Slide anterior"
        >
          <ChevronUp size={24} />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-purple-600/30 hover:bg-purple-600/50 text-white transition-all duration-300 border border-purple-500/50"
          aria-label="Próximo slide"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Indicador de posição */}
      <div className="fixed top-8 right-8 glass-card px-6 py-3 text-white font-semibold z-50">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
