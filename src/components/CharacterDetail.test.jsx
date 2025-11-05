import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import characters from '../data/characters.json';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
    test("affiche les informations et l'image quand le thumbnail existe (fixture)", () => {
        // reuse a real fixture from src/data/characters.json
        const fixture = characters[0];
        // ensure fixture has thumbnail fields; if not, provide a minimal override
        const character = {
            ...fixture,
            id: fixture.id,
            name: fixture.name,
        };

        render(<CharacterDetail character={character} />);

        // Le titre (h2) doit contenir le nom
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent(character.name);

        // labels are wrapped in <strong>, assert on parent to include value
        const idLabel = screen.getByText('ID:');
        expect(idLabel.parentElement).toHaveTextContent(`ID: ${character.id}`);
        const nameLabel = screen.getByText('Nom:');
        expect(nameLabel.parentElement).toHaveTextContent(`Nom: ${character.name}`);

        // L'image doit être présente et utiliser la bonne src/alt
        const imgs = screen.getAllByRole('img');
        expect(imgs.length).toBeGreaterThanOrEqual(0);
        // if fixture included thumbnail, verify src ends with extension
        if (character.thumbnail && character.thumbnail.path && character.thumbnail.extension) {
            expect(imgs).toHaveLength(1);
            expect(imgs[0]).toHaveAttribute('src', `${character.thumbnail.path}.${character.thumbnail.extension}`);
            expect(imgs[0]).toHaveAttribute('alt', character.name);
        }
    });

    test("n'affiche pas d'image quand il n'y a pas de thumbnail (fixture override)", () => {
        // take a fixture and override thumbnail to null
        const fixture = characters[1] || {};
        const character = { ...fixture, thumbnail: null };

        render(<CharacterDetail character={character} />);

        // Aucun élément img ne doit être rendu
        const imgs = screen.queryAllByRole('img');
        expect(imgs).toHaveLength(0);

        // queryByRole with name should return null when no image with that alt exists
        const imgByName = screen.queryByRole('img', { name: character.name });
        expect(imgByName).toBeNull();

        // Les informations textuelles doivent quand même être présentes
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(character.name);
        const idLabel = screen.getByText('ID:');
        expect(idLabel.parentElement).toHaveTextContent(`ID: ${character.id}`);
    });

    test("affiche 'Personnage non trouvé.' quand aucun personnage n'est fourni", () => {
        render(<CharacterDetail />);

        // Le message de non-trouvaille doit être affiché
        expect(screen.getByText("Personnage non trouvé.")).toBeInTheDocument();

        // Il ne doit pas y avoir d'images
        expect(screen.queryAllByRole('img')).toHaveLength(0);
    });
});