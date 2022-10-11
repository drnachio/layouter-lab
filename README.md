# Layouter lab

I'll be using this repo to experiment with different layout models during the preparation of the Frankfurt book fair demo.

## Used technology

T3's sexy stack:

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

> **Note:** I have decided to use version 10 of trpc due to the number of breaking changes it involves even though it is still in beta.

## How to run the project

Ask me about the `.env` file:

```env
# When adding additional env variables, the schema in /env/schema.mjs should be updated accordingly

# Prisma
DATABASE_URL=file:./db.sqlite

# Next Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Next Auth Discord Provider
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
```

And after adding it to the project:

- `pnpm i`
- `pnpm run dev`

> **Note:** Yep, pnpm is my weapon of choice for the project because I want to evaluate it. Please **do not** `npm install` and generate a `package.json` file.

## URLs of the project

- Prod: [layouter.vercel.app](https://layouter.vercel.app/)