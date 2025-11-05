import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NotFoundPage from './NotFoundPage'

describe('NotFoundPage', () => {
  test('titre de la page et h2 sont corrects', () => {
    render(<NotFoundPage />)

    const heading = screen.getByRole('heading', { level: 2, name: '404 - Page Not Found' })
    expect(heading).toBeInTheDocument()

    expect(document.title).toBe('404 - Page Not Found')
  })
})
