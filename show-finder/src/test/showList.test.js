import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShowList } from '../components/showList/showList';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

describe('ShowList', () => {
  test('Shows the loading message', () => {
    render(<ShowList shows={[]} loading={true} error={null} />);
    expect(screen.getByTestId('loading-animation')).toBeInTheDocument();
  });

  test('Shows the error message', () => {
    render(<ShowList shows={[]} loading={false} error="No Results Found" />);
    expect(screen.getByText(/No Results Found/i)).toBeInTheDocument();
  });

  test('Renders a list of shows ', () => {
    const shows = [
      {
        show: {
          id: 1,
          name: 'Friends',
          image: { original: 'friends.jpg' }
        }
      },
      {
        show: {
          id: 2,
          name: 'Breaking Bad',
          image: { original: 'bb.jpg' }
        }
      }
    ];
    render(
    <MemoryRouter>
      <ShowList shows={shows} loading={false} error={null} />
    </MemoryRouter>);
    expect(screen.getByText(/Friends/i)).toBeInTheDocument();
    expect(screen.getByText(/Breaking Bad/i)).toBeInTheDocument();
  });

  test('Renders image if show has image', () => {
    const shows = [
      {
        show: {
          id: 1,
          name: 'Friends',
          image: { medium: 'friends.jpg' }
        }
      }
    ];
    render(
      <MemoryRouter>
        <ShowList shows={shows} loading={false} error={null} />
      </MemoryRouter>
    );
    const img = screen.getByRole('img', { name: /friends/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'friends.jpg');
    expect(screen.queryByText(/No image available/i)).not.toBeInTheDocument();
  });

  test('Renders "No image available" if show has no image', () => {
    const shows = [
      {
        show: {
          id: 2,
          name: 'NoImageShow',
          image: null
        }
      }
    ];
    render(
      <MemoryRouter>
        <ShowList shows={shows} loading={false} error={null} />
      </MemoryRouter>
    );
    expect(screen.queryByRole('img', { name: /NoImageShow/i })).not.toBeInTheDocument();
    expect(screen.getByText(/No image available/i)).toBeInTheDocument();
  });
});