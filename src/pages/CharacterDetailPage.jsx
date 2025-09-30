import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CharacterDetail from '../components/CharacterDetail';

const CharacterDetailPage = () => {
  // Get character data from the loader
  const { character } = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    document.title = character ? `${character.name} | Marvel App` : 'Character Not Found | Marvel App';
  }, [character]);

  if (!character) {
    return (
      <div>
        <h2>Personnage non trouvé</h2>
        <p>Le personnage avec l'ID {id} n'existe pas.</p>
      </div>
    );
  }

  return (
    <div>
      <CharacterDetail character={character} />
    </div>
  );
};

export default CharacterDetailPage;
