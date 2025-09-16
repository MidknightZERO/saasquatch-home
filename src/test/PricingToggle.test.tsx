import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PricingToggle from '@/components/PricingToggle'

describe('PricingToggle', () => {
  it('renders both toggle options', () => {
    const mockOnToggle = vi.fn()
    render(<PricingToggle onToggle={mockOnToggle} defaultAnnual={true} />)
    
    expect(screen.getByText('30-day rolling')).toBeInTheDocument()
    expect(screen.getByText('12-month contract')).toBeInTheDocument()
  })

  it('calls onToggle when clicking 30-day option', () => {
    const mockOnToggle = vi.fn()
    render(<PricingToggle onToggle={mockOnToggle} defaultAnnual={true} />)
    
    fireEvent.click(screen.getByText('30-day rolling'))
    
    expect(mockOnToggle).toHaveBeenCalledWith(false)
  })

  it('calls onToggle when clicking 12-month option', () => {
    const mockOnToggle = vi.fn()
    render(<PricingToggle onToggle={mockOnToggle} defaultAnnual={false} />)
    
    fireEvent.click(screen.getByText('12-month contract'))
    
    expect(mockOnToggle).toHaveBeenCalledWith(true)
  })

  it('shows correct initial state based on defaultAnnual prop', () => {
    const mockOnToggle = vi.fn()
    const { rerender } = render(<PricingToggle onToggle={mockOnToggle} defaultAnnual={true} />)
    
    // Check that 12-month is active initially
    const annualButton = screen.getByText('12-month contract')
    expect(annualButton).toHaveClass('bg-white', 'text-pine-400')
    
    // Rerender with defaultAnnual=false
    rerender(<PricingToggle onToggle={mockOnToggle} defaultAnnual={false} />)
    
    // Check that 30-day is active
    const rollingButton = screen.getByText('30-day rolling')
    expect(rollingButton).toHaveClass('bg-white', 'text-pine-400')
  })

  it('shows save badge when annual is selected', () => {
    const mockOnToggle = vi.fn()
    render(<PricingToggle onToggle={mockOnToggle} defaultAnnual={true} />)
    
    expect(screen.getByText('Save')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    const mockOnToggle = vi.fn()
    render(<PricingToggle onToggle={mockOnToggle} defaultAnnual={true} />)
    
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    
    buttons.forEach(button => {
      expect(button).toHaveAttribute('type', 'button')
    })
  })
})
