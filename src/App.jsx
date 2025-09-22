import characters from './data/characters.json';
import NumberOfCharacters from './components/NumberOfCharacters';
import CharactersList from './components/CharactersList'

import './App.css'

function App() {
  return (
    <div>
      <h1>Marvel App</h1>
      <CharactersList characters={characters} />
      <NumberOfCharacters characters={characters} />
    </div>
  );
}

export default App;