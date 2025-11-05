import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CharactersList from './CharactersList';
import characters from '../data/characters.json';

	describe('CharactersList component', () => {

		test('La liste est vide', () => {
			render(<CharactersList characters={[]} />);
			const list = screen.getByRole('list');
			expect(list).toBeEmptyDOMElement();
		});

		test('Affiche tous les personnages passés en paramètre (fixture)', () => {
			// use fixtures: take first two characters
			const chars = characters.slice(0, 2).map(c => ({ id: c.id, name: c.name }));

			render(
				<MemoryRouter>
					<CharactersList characters={chars} />
				</MemoryRouter>
			);

			const items = screen.getAllByRole('listitem');
			expect(items).toHaveLength(2);
			expect(screen.getByText(chars[0].name)).toBeInTheDocument();
			expect(screen.getByText(chars[1].name)).toBeInTheDocument();
		});

	})