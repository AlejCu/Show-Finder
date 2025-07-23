import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../components/footer/footer';
import '@testing-library/jest-dom'

describe('Footer', () => {
  test('REnders the TVMaze text', () => {
    render(<Footer />);
    expect(screen.getByText(/Created using the TVmaze API/i)).toBeInTheDocument();
  });

  test('Renders the TVMaze logo with the link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /TVMaze API Logo/i });
    expect(link).toHaveAttribute('href', 'https://www.tvmaze.com/api');
    const img = screen.getByAltText(/TVMaze API Logo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/assets/img/tvm_api.png');
  });

  test('REnders the github logo and link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /Github Logo/i });
    expect(link).toHaveAttribute('href', 'https://github.com/AlejCu?tab=repositories');
    const img = screen.getByAltText(/Github Logo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/assets/img/github-mark-white.svg');
  });

  test('Renders the Linkedin logo and link', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    const linkedinLink = links.find(link => link.href.includes('linkedin.com/in/alex-curiel-front-end-developer'));
    expect(linkedinLink).toBeInTheDocument();
  });
});