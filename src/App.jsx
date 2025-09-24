import characters from './data/characters.json';
import NumberOfCharacters from './components/NumberOfCharacters';
import CharactersList from './components/CharactersList'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CharactersPage from './pages/CharactersPage';

import './App.css'



function App() {
  return (
    <div>
      {/* <h1>Marvel App</h1> */
      <CharactersPage />}
    </div>
  );
}

export default App;