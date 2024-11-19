<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# Nathandel-OnlineShop
Ett projekt för att hantera produkter med frontend och backend
# Nathandel / Online Shop

## Beskrivning
Ett projekt för att skapa en näthandel där användare kan:
- Visa en lista över produkter.
- Visa detaljer om en specifik produkt.

Projektet inkluderar både en frontend och en backend med REST API.

## Teknologier som används
- **Frontend**: React, Vite, TypeScript
- **Backend**: Node.js, Express
- **Övriga beroenden**: Axios, React Router DOM, CORS

## Funktioner
- Lista alla produkter med namn och pris.
- Visa detaljer om en specifik produkt:
  - Beskrivning
  - Antal i lager
- Frontend och backend fungerar tillsammans via ett REST API.

## Installation

### Backend
1. Klona detta repository:
   ```bash
   git clone https://github.com/<ditt-username>/Nathandel.git
