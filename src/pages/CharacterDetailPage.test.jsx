import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import CharacterDetailPage from './CharacterDetailPage'
import characters from '../data/characters.json'

describe('CharacterDetailPage', () => {
	test("titre et h2 pour un personnage existant via loader", async () => {
		const fixture = characters[1] // take a real fixture

		const Stub = createRoutesStub([
			{
				path: '/characters/:id',
				Component: CharacterDetailPage,
				loader: () => ({ character: fixture }),
			},
		])

		render(<Stub initialEntries={[`/characters/${fixture.id}`]} />)

		const heading = await screen.findByRole('heading', { level: 2, name: fixture.name })
		expect(heading).toBeInTheDocument()
		expect(document.title).toBe(`${fixture.name} | Marvel App`)
	})

	test("titre et h2 quand le personnage n'existe pas via loader", async () => {
		const missingId = 'not-found'

		const Stub = createRoutesStub([
			{
				path: '/characters/:id',
				Component: CharacterDetailPage,
				loader: () => ({ character: null }),
			},
		])

		render(<Stub initialEntries={[`/characters/${missingId}`]} />)

		const heading = await screen.findByRole('heading', { level: 2, name: 'Personnage non trouvé' })
		expect(heading).toBeInTheDocument()
		expect(document.title).toBe('Character Not Found | Marvel App')
	})
})

