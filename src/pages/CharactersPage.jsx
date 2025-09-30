import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";

const CharactersPage = () => {
    // Get characters data from the loader
    const { characters } = useLoaderData();

    useEffect(() => {
        document.title = 'Characters | Marvel App';
    }, []); 

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;