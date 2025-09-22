import React from "react";

// Composant pour afficher le nombre de personnages
function NumberOfCharacters({ characters }) {
  if (!characters || characters.length === 0) {
    return <p>There is no character</p>;
  }
  
  const count = characters.length;
  return (
    <p>There is {count} character{count > 1 ? 's' : ''}</p>
  );
}

export default NumberOfCharacters;