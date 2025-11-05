
// src/api/characters-api.test.js

import { describe, expect, jest, test } from '@jest/globals'

import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

// Mock the characters data for testing purposes
jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Character One', modified: '2020-01-01T00:00:00Z' },
    { id: 2, name: 'Character Two', modified: '2021-01-01T00:00:00Z' },
]);

// Test suite for characters-api.js
describe('characters-api', () => {

    // Test for getCharacters function
    describe('getCharacters', () => {

        // Test to check if the function returns the full list of characters
        test('should return the list of characters', () => {
            const result = getCharacters();
            expect(result).toEqual(characters);
        });

        test('should return characters sorted by name desc when requested', () => {
            const result = getCharacters({ sort: 'name', order: 'desc' });
            expect(result[0].name).toBe('Character Two');
            expect(result[1].name).toBe('Character One');
        });

        test('should return characters sorted by modified asc when requested', () => {
            const result = getCharacters({ sort: 'modified', order: 'asc' });
            expect(result[0].id).toBe(1);
            expect(result[1].id).toBe(2);
        });
    });

    // Test for getCharacterById function
    describe('getCharacterById', () => {
        // Test to check if the function returns the correct character for a valid ID
        test('should return the correct character when a valid ID is provided', () => {
            const result = getCharacterById(1);
            expect(result).toEqual({ id: 1, name: 'Character One', modified: '2020-01-01T00:00:00Z' });
        });

        // New test to cover the case where the character is not found
        test('should throw an error when no character with the provided ID exists', () => {
            expect(() => getCharacterById(3)).toThrow('Character with id 3 not found');
        });
    });

});