import characters from './data/characters.json';
import NumberOfCharacters from './components/NumberOfCharacters';
import CharactersList from './components/CharactersList'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './App.css'


function App() {
  return (
    <div>
      {/* <h1>Marvel App</h1>
      <CharactersList characters={characters} />
      <NumberOfCharacters characters={characters} /> */
      <ContactPage />}
    </div>
  );
}

export default App;