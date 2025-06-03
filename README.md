
# 🎮 DalyGames – Explore jogos com performance e inteligência

**GameVerse** é uma aplicação moderna construída com **Next.js 13+ (App Router)**, que permite aos usuários explorar, visualizar e salvar jogos favoritos com uma experiência fluida, responsiva e altamente performática.

## 🔥 Destaques do Projeto

- ✅ **SEO** com metadados dinâmicos (Open Graph, título, descrição e indexação customizada)
- ⚙️ **SSR (Server-Side Rendering)** para páginas dinâmicas otimizadas
- 📦 **SSG com revalidação automática** para conteúdo estático atualizado
- 🧠 Uso combinado de **Server e Client Components**
- 🔍 Pesquisa de jogos com base no título
- 🧾 Detalhamento completo dos jogos com categorias, data de lançamento e plataformas
- ❤️ Sistema de favoritos com edição e remoção
- 💅 Estilização com **TailwindCSS**

---

## 🧱 Tecnologias Utilizadas

- [Next.js 13 App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [API externa de games (via env)] – integração via fetch
- SEO com [Metadata API do Next 13](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dalygame.git

# Entre na pasta do projeto
cd dalygame

# Instale as dependências
npm install

# Crie um arquivo .env.local com as variáveis da API
```

### 📄 .env.local

```env
NEXT_API_URL=https://sua-api-de-games.com
```

```bash
# Rode o servidor de desenvolvimento
npm run dev
```

---

## 📦 Exemplos Técnicos

### 🧠 SSR + Metadata dinâmica

```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_API_URL}/game/${params.id}`);
  const game = await res.json();

  return {
    title: game.title,
    description: game.description.slice(0, 100),
    openGraph: {
      images: game.image_url,
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}
```

---

## 📌 Funcionalidades

- [x] Buscar jogos pelo nome
- [x] Exibir jogo do dia com destaque visual
- [x] Ver detalhes de jogos por ID com renderização no servidor
- [x] SEO e metadados para cada página
- [x] Interface 100% responsiva com TailwindCSS

---

## 📄 Licença

MIT © 2025 Brenno – Projeto com fins de prática e portfólio
