import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../components/portfolio/Contact'

describe('Contact Component', () => {
  it('renders contact form fields', () => {
    render(<Contact />)
    
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })
})
