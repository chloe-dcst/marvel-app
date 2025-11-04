import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
    test("affiche les informations et l'image quand le thumbnail existe", () => {
        const character = {
            id: 123,
            name: 'Spider Test',
            thumbnail: { path: 'http://example.com/image', extension: 'jpg' },
            description: 'Un personnage de test',
            modified: '2020-01-01T00:00:00Z',
        };

        render(<CharacterDetail character={character} />);

        // Le titre (h2) doit contenir le nom
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent('Spider Test');

        // ID et Nom doivent être affichés — match the full paragraph text to avoid
        // selecting the inner <strong> node only.
        // the labels are wrapped in <strong>, so select the label and assert on its parent
        const idLabel = screen.getByText('ID:');
        expect(idLabel.parentElement).toHaveTextContent(`ID: ${character.id}`);
        const nameLabel = screen.getByText('Nom:');
        expect(nameLabel.parentElement).toHaveTextContent(`Nom: ${character.name}`);

        // L'image doit être présente et utiliser la bonne src/alt
        const imgs = screen.getAllByRole('img');
        expect(imgs).toHaveLength(1);
        expect(imgs[0]).toHaveAttribute('src', 'http://example.com/image.jpg');
        expect(imgs[0]).toHaveAttribute('alt', character.name);
    });

    test("n'affiche pas d'image quand il n'y a pas de thumbnail", () => {
        const character = {
            id: 456,
            name: 'NoImage Hero',
            description: 'Sans image',
        };

        render(<CharacterDetail character={character} />);

        // Aucun élément img ne doit être rendu
        const imgs = screen.queryAllByRole('img');
        expect(imgs).toHaveLength(0);

        // Les informations textuelles doivent quand même être présentes
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('NoImage Hero');
        const idLabel = screen.getByText('ID:');
        expect(idLabel.parentElement).toHaveTextContent(`ID: ${character.id}`);
    });
});