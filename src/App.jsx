import characters from './data/characters.json'
import './App.css'

function App() {
  return (
    <div>
      <h1>Marvel App</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;