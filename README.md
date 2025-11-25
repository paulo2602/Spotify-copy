# Spotify Clone - Frontend

Uma cópia funcional do frontend do Spotify criada com React.js, TypeScript, Styled-components e Vite.

## Características

 **Componentes Principais:**
- **Sidebar**: Navegação com playlists e links rápidos
- **Header**: Barra de busca e ícones do usuário
- **Main Content**: Grid de playlists e tabela de faixas populares
- **Player**: Controles de reprodução na base da tela

 **Tecnologias Utilizadas:**
- React.js 18+ com TypeScript
- Styled-components para estilos CSS-in-JS
- Lucide React para ícones
- Vite como build tool
- Design responsivo (mobile, tablet, desktop)

 **Design Responsivo:**
- Layout mobile-first
- Breakpoints para tablets e desktops
- Adaptação completa da interface

## Instalação

```bash
# Clonar o repositório
cd /Users/thiagomoreira/Documents/Spotify-copia

# As dependências já estão instaladas. Para reinstalar:
npm install
```

## Iniciar o Projeto

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse: http://localhost:5173
```

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build de produção
npm run lint     # Verificar linting
```

## Estrutura do Projeto

```
src/
├── components/
│   ├── Sidebar/          # Navegação lateral
│   ├── Header/           # Barra superior
│   ├── MainContent/      # Conteúdo principal
│   └── Player/           # Controles de reprodução
├── pages/                # Páginas (para futura expansão)
├── data/
│   └── mockData.ts       # Dados dummy
├── styles/
│   └── globalStyles.ts   # Estilos globais e temas
├── App.tsx               # Componente principal
└── main.tsx              # Ponto de entrada
```

## Paleta de Cores

- **Primária**: `#1DB954` (verde Spotify)
- **Secundária**: `#191414` (preto)
- **Background**: `#0f0f0f` (preto profundo)
- **Surface**: `#181818` (cinza escuro)
- **Texto**: `#ffffff` (branco)
- **Texto Secundário**: `#b3b3b3` (cinza)

## Funcionalidades Implementadas

 Layout responsivo com Sidebar retrátil
 Barra de pesquisa funcional
 Grid de playlists com efeito hover
 Tabela de faixas populares
 Controles de player (play, pause, volume, progresso)
 Ícones interativos
 Tema escuro padrão

## Funcionalidades Futuras

- 🎵 Integração com API de música (Spotify API)
- 🔍 Busca funcional em tempo real
- 📋 Gerenciamento de playlists
- 🎧 Reprodução de áudio real
- 👤 Perfil do usuário
-  Recomendações personalizadas

## Autor

Desenvolvido como um projeto de estudo e prática com React e Styled-components.

---

**Nota**: Este é um projeto de clonagem apenas para fins educacionais. Não é afiliado com o Spotify.
