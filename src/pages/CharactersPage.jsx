import React, { useEffect, useMemo } from 'react';
import { useLoaderData, useSearchParams } from 'react-router';
import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";

// helper for sorting
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
};

const CharactersPage = () => {
        // Get characters data from the loader
        const { characters } = useLoaderData();
        const [searchParams, setSearchParams] = useSearchParams();

        // read sort params from URL, default to name asc
        const sortParam = searchParams.get('sort') || 'name';
        const orderParam = searchParams.get('order') || 'asc';

        useEffect(() => {
                document.title = 'Characters | Marvel App';
        }, []);

        // compute sorted characters memoized
        const sortedCharacters = useMemo(() => {
            if (!Array.isArray(characters)) return [];
            const arr = [...characters];
            arr.sort(compareBy(sortParam));
            if (orderParam === 'desc') arr.reverse();
            return arr;
        }, [characters, sortParam, orderParam]);

        const updateSort = (e) => {
            const newSort = e.target.value;
            const next = new URLSearchParams(Object.fromEntries(searchParams.entries()));
            next.set('sort', newSort);
            setSearchParams(next);
        };

        const updateOrder = (e) => {
            const newOrder = e.target.value;
            const next = new URLSearchParams(Object.fromEntries(searchParams.entries()));
            next.set('order', newOrder);
            setSearchParams(next);
        };

        return (
                <>
                        <h2>Marvel Characters</h2>

                        <div style={{ marginBottom: 12 }}>
                            <label style={{ marginRight: 8 }} htmlFor="sort-select">Trier par:</label>
                            <select id="sort-select" value={sortParam} onChange={updateSort}>
                                <option value="name">Name</option>
                                <option value="modified">Modified</option>
                            </select>

                            <label style={{ marginLeft: 16, marginRight: 8 }} htmlFor="order-select">Ordre:</label>
                            <select id="order-select" value={orderParam} onChange={updateOrder}>
                                <option value="asc">Asc</option>
                                <option value="desc">Desc</option>
                            </select>
                        </div>

                        <CharactersList characters={sortedCharacters} />
                        <br />
                        <NumberOfCharacters characters={sortedCharacters} />
                </>
        );
};

export default CharactersPage;