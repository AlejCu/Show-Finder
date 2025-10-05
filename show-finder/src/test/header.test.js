import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components/header/header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  test('Renders the title and the search input', () => {
    render(
      <MemoryRouter>
        <Header onSearch={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Show Finder/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Find your fav show/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });

  test('Makes sure you can write in the search box', () => {
    render(
      <MemoryRouter>
        <Header onSearch={() => {}} />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/Find your fav show/i);
    fireEvent.change(input, { target: { value: 'Friends' } });
    expect(input.value).toBe('Friends');
  });

  test('Calls the onSearch with the correct value', () => {
    const onSearchMock = jest.fn();
    render(
      <MemoryRouter>
        <Header onSearch={onSearchMock} />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/Find your fav show/i);
    const button = screen.getByRole('button', { name: /Search/i });

    fireEvent.change(input, { target: { value: 'Friends' } });
    fireEvent.click(button);

    expect(onSearchMock).toHaveBeenCalledWith('Friends');
  });

  test('On search is not called if the input is empty', () => {
    const onSearchMock = jest.fn();
    render(
      <MemoryRouter>
        <Header onSearch={onSearchMock} />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: /Search/i });

    fireEvent.click(button);

    expect(onSearchMock).not.toHaveBeenCalled();
  });

  test('Clicking the title clears the input and calls onSearch with empty string', () => {
    const onSearchMock = jest.fn();
    render(
      <MemoryRouter>
        <Header onSearch={onSearchMock} />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/Find your fav show/i);
    const titleLink = screen.getByTestId('home-link');

    fireEvent.change(input, { target: { value: 'Friends' } });
    expect(input.value).toBe('Friends');

    fireEvent.click(titleLink);

    expect(input.value).toBe('');
    expect(onSearchMock).toHaveBeenCalledWith('');
  });
});