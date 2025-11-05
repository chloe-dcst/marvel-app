import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import ContactPage from './pages/ContactPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import { getCharacters, getCharacterById } from './api/characters-api';

// routes of the application

// Loader function for characters
// Accepts the router loader args so we can read request.url search params
export const charactersLoader = async ({ request } = {}) => {
  // default params
  let sort = 'name';
  let order = 'asc';

  try {
    if (request && request.url) {
      const url = new URL(request.url);
      sort = url.searchParams.get('sort') || sort;
      order = url.searchParams.get('order') || order;
    }
  } catch (e) {
    // ignore and use defaults
  }

  const characters = await getCharacters({ sort, order });
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
        // pass the loader directly so React Router will call it with { request }
        loader: charactersLoader,
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
        loader: async ({ params } = {}) => {
          // generate id from params into a variable before using it
          const id = params && params.id ? params.id : '';
          const character = await getCharacterById(id);
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
