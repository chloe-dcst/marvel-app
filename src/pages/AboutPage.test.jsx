import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AboutPage from './AboutPage'

describe('AboutPage', () => {
	test('titre de la page et h2 sont corrects', () => {
		render(<AboutPage />)

		// h2 with text
		const heading = screen.getByRole('heading', { level: 2, name: 'About Us' })
		expect(heading).toBeInTheDocument()

		// document title
		expect(document.title).toBe('About | Marvel App')
	})
})
