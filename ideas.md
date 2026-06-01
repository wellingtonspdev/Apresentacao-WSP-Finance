# Ideias de Design - WSP Finance Apresentação

## Abordagem Selecionada: Futurismo Premium Financeiro

### Design Movement
**Cyberpunk Corporativo Refinado** - Fusão de estética futurista de fintech com sofisticação premium, inspirada em dashboards de trading high-end e interfaces de startups unicórnio.

### Core Principles
1. **Contraste Dramático**: Fundo preto profundo vs. elementos neon roxo/azul com glow sutil
2. **Fluidez Tecnológica**: Transições suaves e animações que remetem a dados em movimento
3. **Hierarquia Clara**: Tipografia forte e espacejamento generoso para legibilidade em apresentação
4. **Minimalismo Estratégico**: Apenas elementos essenciais, sem poluição visual

### Color Philosophy
- **Preto profundo (#050509)**: Base confiável, premium, evoca segurança e profissionalismo
- **Gradiente roxo → azul**: Movimento, inovação, energia controlada
- **Roxo/Magenta (#B12DFF)**: Criatividade, diferenciação, marca
- **Azul vibrante (#246BFF)**: Confiança, tecnologia, estabilidade
- **Ciano suave (#38BDF8)**: Respiração visual, leveza, modernidade
- **Cinza escuro (#11111A)**: Cards e superfícies, contraste suave
- **Texto claro (#F8FAFC)**: Legibilidade máxima

### Layout Paradigm
- **Full-screen slides** com navegação vertical (scroll/botões)
- **Assimetria intencional**: Conteúdo não centralizado, aproveitando espaço lateralmente
- **Fluxos visuais**: Linhas neon conectando elementos, sugerindo movimento de dados
- **Grid sutil**: Fundo com padrão de grid para reforçar tema tecnológico

### Signature Elements
1. **Glow/Bloom**: Halos suaves ao redor de elementos principais (logo, títulos, cards)
2. **Linhas neon**: Bordas e divisores com gradiente roxo-azul
3. **Cards glassmorphism**: Superfícies semi-transparentes com backdrop blur

### Interaction Philosophy
- **Hover states**: Cards ganham glow e elevação ao passar mouse
- **Scroll reveal**: Elementos surgem conforme usuário navega
- **Transições fluidas**: Fade + slide suave entre slides (200-300ms)
- **Indicador de progresso**: Barra lateral ou inferior mostrando posição na apresentação

### Animation
- **Entrada de títulos**: Fade + slide de cima para baixo (200ms ease-out)
- **Cards em cascata**: Aparecem um por um com delay de 50-80ms
- **Linhas de fluxo**: Animação de stroke preenchendo da esquerda para direita
- **Glow pulsante**: Leve pulso em elementos destacados (3s infinite)
- **Transição entre slides**: Fade suave (300ms), com blur opcional

### Typography System
- **Display/Títulos**: Font-weight 700-800, tamanho grande (2.5rem-4rem), cor branca
- **Subtítulos**: Font-weight 600, tamanho médio (1.5rem-2rem), cor ciano/azul
- **Body text**: Font-weight 400, tamanho padrão (1rem-1.125rem), cor cinza claro
- **Destaque**: Font-weight 600, cor roxo/magenta para chamar atenção
- **Fonte sugerida**: Combinação de sans-serif moderna (ex: Poppins/Outfit para display + Inter/Roboto para body)

---

## Implementação
- Usar React + Tailwind CSS 4 com OKLCH colors
- Componentes reutilizáveis para slides, cards, fluxos
- Animações com Framer Motion para transições suaves
- SVG do logo integrado como asset principal
- Responsivo para desktop/tablet, otimizado para apresentação widescreen
