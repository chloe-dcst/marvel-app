# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Marvel App

## Installation

git clone url-du-projet
cd marvel-app

npm install

## Lancement

npm run dev

L'application est accessible à l'adresse affichée dans la console.


## Rechargement à chaud

L'application supporte le rechargement à chaud, ce qui signifie que les modifications du code source sont prises en compte sans avoir à recharger la page.


## Point d'entrée

Le point d'entrée de l'application est le fichier `index.html` situé à la racine du projet. C'est ce fichier qui est chargé dans le navigateur et qui charge ensuite le fichier `main.jsx` qui est le point d'entrée de l'application React.

## Tests unitaires

### Exécuter les tests unitaires depuis Git Bash
Voici les commandes recommandées (copiez-collez dans Git Bash) :

```bash
# installer les dépendances (une seule fois)
npm install

# lancer tous les tests (utilise le script `test` dans package.json)
npm test

# lancer les tests et afficher la couverture
npm run test:coverage
```

```bash
# exécute Jest directement via le binaire local
node ./node_modules/jest/bin/jest.js --runInBand

# avec rapport de couverture
node ./node_modules/jest/bin/jest.js --coverage --runInBand
```

Remarques et conseils :
- `--runInBand` force Jest à exécuter les tests dans le même processus (utile sur Windows ou CI pour des tests rapides et une sortie plus lisible).

Mais la solution la plus simple et la plus sûre reste d'utiliser Git Bash ou d'appeler `node ./node_modules/jest/bin/jest.js` directement.
