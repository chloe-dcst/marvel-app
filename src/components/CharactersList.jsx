import React from 'react';
import { Link } from 'react-router';

// Composant pour afficher la liste des personnages
function CharactersList({ characters = [] }) {
  // Always render a list element so tests can query it by role 'list'.
  // If there are no characters the <ul> will simply be empty.
  return (
    <ul id="characters" role="list">
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