import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import ContactPage from './pages/ContactPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import { getCharacters, getCharacterById } from './api/characters-api';

// routes of the application

// Loader function for characters
const charactersLoader = async () => {
  const characters = await getCharacters();
  return { characters };
}

const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        loader: async () => { return charactersLoader(); },
        Component: CharactersPage
      },
      {
        // about page
        path: "/about",
        Component: AboutPage
      },
      {
        // contact page
        path: "/contact",
        Component: ContactPage
      },
      {
        path: "/characters/:id",
        Component: CharacterDetailPage,
        loader: async ({ params }) => {
          const character = await getCharacterById(params.id);
          return { character };
        }
      },
      {
        // 404 page
        path: "*",
        Component: NotFoundPage
      }
    ],
  },
]

export default routes;
