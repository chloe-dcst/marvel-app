import React from 'react';
import { Link } from 'react-router';

// Composant pour afficher la liste des personnages
function CharactersList({ characters = [] }) {
  if (characters.length === 0) {
    return <p>Aucun personnage trouvé.</p>;
  }

  return (
    <ul id="characters">
      {characters.map((character, index) => (
        <li key={character.id || index}>
          <Link to={`/characters/${character.id}`}>
            {character.name || character}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CharactersList;