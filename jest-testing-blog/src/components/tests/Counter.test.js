
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './../Counter.js';
describe('Counter Component', () => {
    // First Test Case
    test('renders initial count of 0', () => {
        render(<Counter />);
        const countElement = screen.getByText(/Counter: 0/i);
        expect(countElement).toBeInTheDocument();
    });
    // Second Test Case
    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        fireEvent.click(incrementButton);
        const countElement = screen.getByText(/Counter: 1/i);
        expect(countElement).toBeInTheDocument();
    });
    // Third Test Case
    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const decrementButton = screen.getByText(/Decrement/i);
        fireEvent.click(decrementButton);
        const countElement = screen.getByText(/Counter: -1/i);
        expect(countElement).toBeInTheDocument();
    });
    // Fourth Test Case
    test('correctly updates count with multiple clicks', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        const decrementButton = screen.getByText(/Decrement/i);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);
        const countElement = screen.getByText(/Counter: 1/i);
        expect(countElement).toBeInTheDocument();
    });
});