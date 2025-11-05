
// src/api/characters-api.js

import characters from '../data/characters.json'

// helper for sorting used by the API
const compareBy = (key) => (a, b) => {
  if (key === 'name') {
    const an = (a.name || '').toString();
    const bn = (b.name || '').toString();
    return an.localeCompare(bn, undefined, { sensitivity: 'base' });
  }

  if (key === 'modified') {
    const at = a.modified ? new Date(a.modified).getTime() : 0;
    const bt = b.modified ? new Date(b.modified).getTime() : 0;
    return at - bt;
  }

  return 0;
}

/**
 * returns the list of characters
 * accepts optional sorting options: { sort: 'name'|'modified', order: 'asc'|'desc' }
 */
export const getCharacters = ({ sort = 'name', order = 'asc' } = {}) => {
  const arr = Array.isArray(characters) ? [...characters] : [];
  arr.sort(compareBy(sort));
  if (order === 'desc') arr.reverse();
  return arr;
}

/**
 * returns a character by id
 * @param {*} id 
 * @returns 
 */
export const getCharacterById = (id) => {
  const found = characters.find(character => character.id === id);
  if (!found) {
    throw new Error(`Character with id ${id} not found`);
  }
  return found;
}
