import React from 'react';

const CharacterDetail = ({ character }) => {
  if (!character) {
    return <p>Personnage non trouvé.</p>;
  }

  // Construire l'URL de l'image si thumbnail existe
  const imageUrl = character.thumbnail && character.thumbnail.path && character.thumbnail.extension
    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
    : null;

  return (
    <div>
      <h2>{character.name}</h2>
      
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={character.name} 
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      )}
      
      <div>
        <p><strong>ID:</strong> {character.id}</p>
        <p><strong>Nom:</strong> {character.name}</p>
        
        {character.description && character.description.trim() !== '' && (
          <div>
            <p><strong>Description:</strong></p>
            <p>{character.description}</p>
          </div>
        )}
        
        {character.modified && (
          <p><strong>Dernière modification:</strong> {new Date(character.modified).toLocaleString('fr-FR')}</p>
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
