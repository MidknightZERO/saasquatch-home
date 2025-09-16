import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FAQ from '@/components/FAQ'

describe('FAQ', () => {
  it('renders all FAQ questions', () => {
    render(<FAQ />)
    
    // Check that we have FAQ questions rendered
    expect(screen.getByText(/What's included in the monthly hosting fee?/)).toBeInTheDocument()
    expect(screen.getByText(/Can I switch between plans?/)).toBeInTheDocument()
    expect(screen.getByText(/What happens if I need to cancel?/)).toBeInTheDocument()
  })

  it('shows FAQ answers when questions are clicked', () => {
    render(<FAQ />)
    
    const firstQuestion = screen.getByText(/What's included in the monthly hosting fee?/)
    fireEvent.click(firstQuestion)
    
    // Check that the answer is now visible
    expect(screen.getByText(/Your monthly hosting includes SSL certificates/)).toBeInTheDocument()
  })

  it('hides FAQ answers when questions are clicked again', () => {
    render(<FAQ />)
    
    const firstQuestion = screen.getByText(/What's included in the monthly hosting fee?/)
    
    // Click to open
    fireEvent.click(firstQuestion)
    expect(screen.getByText(/Your monthly hosting includes SSL certificates/)).toBeInTheDocument()
    
    // Click to close
    fireEvent.click(firstQuestion)
    expect(screen.queryByText(/Your monthly hosting includes SSL certificates/)).not.toBeInTheDocument()
  })

  it('only shows one FAQ answer at a time', () => {
    render(<FAQ />)
    
    const firstQuestion = screen.getByText(/What's included in the monthly hosting fee?/)
    const secondQuestion = screen.getByText(/Can I switch between plans?/)
    
    // Click first question
    fireEvent.click(firstQuestion)
    expect(screen.getByText(/Your monthly hosting includes SSL certificates/)).toBeInTheDocument()
    
    // Click second question
    fireEvent.click(secondQuestion)
    
    // First answer should be hidden, second should be visible
    expect(screen.queryByText(/Your monthly hosting includes SSL certificates/)).not.toBeInTheDocument()
    expect(screen.getByText(/Absolutely! You can upgrade your plan/)).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<FAQ />)
    
    const firstQuestion = screen.getByText(/What's included in the monthly hosting fee?/)
    
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
    expect(firstQuestion).toHaveAttribute('aria-controls')
    
    // Click to open
    fireEvent.click(firstQuestion)
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')
  })

  it('supports keyboard navigation', () => {
    render(<FAQ />)
    
    const firstQuestion = screen.getByText(/What's included in the monthly hosting fee?/)
    
    // Focus and press Enter
    firstQuestion.focus()
    fireEvent.keyDown(firstQuestion, { key: 'Enter', code: 'Enter' })
    
    expect(screen.getByText(/Your monthly hosting includes SSL certificates/)).toBeInTheDocument()
  })

  it('renders contact link', () => {
    render(<FAQ />)
    
    const contactLink = screen.getByText('Contact us')
    expect(contactLink).toBeInTheDocument()
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact')
  })
})
