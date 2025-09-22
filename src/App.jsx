import characters from './data/characters.json'
import CharactersList from './components/CharactersList'
import './App.css'

function App() {
  return (
    <div>
      <h1>Marvel App</h1>
      <CharactersList characters={characters} />
    </div>
  );
}

export default App;