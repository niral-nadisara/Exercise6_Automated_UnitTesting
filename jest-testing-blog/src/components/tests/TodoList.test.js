import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './../TodoList.js';
test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(button);
    expect(screen.getByText('New todo')).toBeInTheDocument();
});

test('marks a todo as complete', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(addButton);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
});

test('deletes a todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(addButton);
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('New todo')).not.toBeInTheDocument();
});

test('filters todos', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'Todo 1' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: 'Todo 2' } });
    fireEvent.click(addButton);
    const firstCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstCheckbox);
    const activeFilterButton = screen.getByText('Active');
    fireEvent.click(activeFilterButton);
    expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
});