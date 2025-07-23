import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShowList } from '../components/showList/showList';
import '@testing-library/jest-dom'

describe('ShowList', () => {
  test('Shows the loading message', () => {
    render(<ShowList shows={[]} loading={true} error={null} />);
    expect(screen.getByText(/Loading shows/i)).toBeInTheDocument();
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
    render(<ShowList shows={shows} loading={false} error={null} />);
    expect(screen.getByText(/Friends/i)).toBeInTheDocument();
    expect(screen.getByText(/Breaking Bad/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});