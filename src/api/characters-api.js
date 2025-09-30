import characters from '../data/characters.json';

// Fonction pour récupérer la liste des personnages
export const getCharacters = async () => {
  // Simule un appel API asynchrone
  return Promise.resolve(characters);
}

// Fonction pour récupérer un personnage par son id
export const getCharacterById = async (id) => {
  // Simule un appel API asynchrone
  const character = characters.find(character => character.id === id);
  return Promise.resolve(character);
}