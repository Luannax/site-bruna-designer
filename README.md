# Site Profissional - Bruna Design de Sobrancelhas

Site moderno e responsivo desenvolvido em React com TypeScript para serviços profissionais de design de sobrancelhas.

## 🎨 Características

- **Design Moderno**: Interface elegante com gradientes, animações suaves e efeitos visuais
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Fluidas**: Utilizando Framer Motion para transições suaves
- **TypeScript**: Código tipado para maior segurança e manutenibilidade
- **Performance**: Build otimizado com Vite para carregamento rápido

## 🚀 Tecnologias Utilizadas

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Vite**: Build tool moderna e rápida
- **Framer Motion**: Biblioteca de animações para React
- **Lucide React**: Ícones modernos e customizáveis
- **CSS3**: Estilização moderna com gradientes e animações

## 📦 Estrutura do Projeto

```
site-bruna/
├── src/
│   ├── components/
│   │   ├── Header.tsx/css       # Cabeçalho com menu responsivo
│   │   ├── Hero.tsx/css         # Seção principal com CTA
│   │   ├── Services.tsx/css     # Cards de serviços
│   │   ├── Gallery.tsx/css      # Galeria de trabalhos
│   │   ├── About.tsx/css        # Sobre a profissional
│   │   ├── Testimonials.tsx/css # Depoimentos de clientes
│   │   ├── Contact.tsx/css      # Formulário de contato
│   │   └── Footer.tsx/css       # Rodapé completo
│   ├── App.tsx                  # Componente principal
│   ├── App.css                  # Estilos globais
│   └── index.css                # Reset e configurações base
├── package.json
└── README.md
```

## 🎯 Seções do Site

1. **Header**: Menu de navegação fixo com efeito ao scroll
2. **Hero**: Seção de destaque com estatísticas e CTA
3. **Serviços**: Cards com os serviços oferecidos e preços
4. **Galeria**: Showcase de trabalhos realizados
5. **Sobre**: Apresentação da profissional com diferenciais
6. **Depoimentos**: Avaliações de clientes satisfeitas
7. **Contato**: Formulário e informações de contato
8. **Footer**: Links úteis e redes sociais

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Entre na pasta do projeto
cd site-bruna

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 📱 Build para Produção

```bash
# Gerar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

## 🎨 Personalização

### Cores
As cores principais podem ser ajustadas em `src/App.css`:

```css
:root {
  --primary: #d4a373;        /* Cor dourada principal */
  --primary-dark: #b8925f;   /* Variação escura */
  --secondary: #2c2c2c;      /* Cor escura */
  --accent: #f4f1ea;         /* Cor de destaque clara */
}
```

### Conteúdo
- **Serviços**: Edite `src/components/Services.tsx`
- **Depoimentos**: Edite `src/components/Testimonials.tsx`
- **Informações de contato**: Edite `src/components/Contact.tsx` e `Footer.tsx`
- **Número do WhatsApp**: Procure por `5511999999999` e substitua pelo número real

## 📞 Configuração do WhatsApp

O formulário de contato está configurado para enviar mensagens via WhatsApp. Para configurar seu número:

1. Abra `src/components/Contact.tsx`
2. Encontre a linha com `5511999999999`
3. Substitua pelo seu número no formato internacional (sem + ou espaços)

## 🌐 Deploy

O site pode ser facilmente hospedado em plataformas como:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Arraste a pasta `dist` no painel
- **GitHub Pages**: Configure no repositório

---

**Desenvolvido com ❤️ para realçar a beleza natural**

    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
