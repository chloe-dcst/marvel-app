import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CharactersList from './CharactersList';

	describe('CharactersList component', () => {

		test('La liste est vide', () => {
			render(<CharactersList characters={[]} />);
			const list = screen.getByRole('list');
			expect(list).toBeEmptyDOMElement();
		});

		test('Affiche tous les personnages passés en paramètre', () => {
			const characters = [
				{ id: 1, name: 'Alpha' },
				{ id: 2, name: 'Beta' },
			];

			render(
				<MemoryRouter>
					<CharactersList characters={characters} />
				</MemoryRouter>
			);

			const items = screen.getAllByRole('listitem');
			expect(items).toHaveLength(2);
			expect(screen.getByText('Alpha')).toBeInTheDocument();
			expect(screen.getByText('Beta')).toBeInTheDocument();
		});

	})