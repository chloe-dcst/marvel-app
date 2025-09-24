import React from 'react';

// Composant pour afficher la liste des personnages
function CharactersList({ characters = [] }) {
  if (characters.length === 0) {
    return <p>Aucun personnage trouvé.</p>;
  }

  return (
    <ul id="characters">
      {characters.map((character, index) => (
        <li key={character.id || index}>
          {character.name || character}
        </li>
      ))}
    </ul>
  );
}

export default CharactersList;