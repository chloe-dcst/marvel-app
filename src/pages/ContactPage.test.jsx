import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ContactPage from './ContactPage'

describe('ContactPage', () => {
	test('titre de la page et h2 sont corrects', () => {
		render(<ContactPage />)

		const heading = screen.getByRole('heading', { level: 2, name: 'Contact Us' })
		expect(heading).toBeInTheDocument()

		expect(document.title).toBe('Contact | Marvel App')
	})
})
