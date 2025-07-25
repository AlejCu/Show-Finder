import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { ShowInfo } from '../components/showInfo/showInfo';
import '@testing-library/jest-dom';

// Mock useParams de react-router-dom (mock plano, NO spyOn)
jest.mock('react-router-dom', () => ({
  useParams: () => ({ showId: '1' }),
}));

// Mock hooks personalizados
let mockShowDetails = {
  shows: {
    name: 'Friends',
    rating: { average: 8.5 },
    genres: ['Comedy'],
    premiered: '1994-09-22',
    schedule: { days: ['Thursday'] },
    status: 'Ended',
    image: { original: 'img.jpg' },
    summary: 'A sitcom about friends.'
  },
  loading: false,
  error: null,
};

jest.mock('../hooks/useShowDetails', () => ({
  useShowDetails: () => mockShowDetails,
}));
jest.mock('../hooks/useShowCast', () => ({
  useShowCast: () => ({
    cast: [
      {
        person: { id: 1, name: 'Jennifer Aniston', image: { medium: 'jen.jpg' } },
        character: { name: 'Rachel' }
      }
    ],
    loading: false,
    error: null,
  }),
}));
jest.mock('../hooks/useShowEpisodes', () => ({
  useShowEpisodes: () => ({
    episodes: [
      {
        id: 1,
        name: 'The Pilot',
        season: 1,
        number: 1,
        summary: 'First episode.',
        image: { original: 'ep1.jpg' },
        runtime: 22,
        rating: { average: 8.0 }
      }
    ],
    loading: false,
    error: null,
  }),
}));

describe('ShowInfo', () => {
  beforeEach(() => {
    // Estado por defecto para cada test
    mockShowDetails = {
      shows: {
        name: 'Friends',
        rating: { average: 8.5 },
        genres: ['Comedy'],
        premiered: '1994-09-22',
        schedule: { days: ['Thursday'] },
        status: 'Ended',
        image: { original: 'img.jpg' },
        summary: 'A sitcom about friends.'
      },
      loading: false,
      error: null,
    };
  });

  test('Renders the show details section', () => {
    render(<ShowInfo />);
    const detailsSection = screen.getByTestId('show-details');
    expect(within(detailsSection).getByText(/Rating/i)).toBeInTheDocument();
    expect(within(detailsSection).getByText(/Genres/i)).toBeInTheDocument();
    expect(within(detailsSection).getByText(/Premiered/i)).toBeInTheDocument();
    expect(within(detailsSection).getByText(/Schedule/i)).toBeInTheDocument();
    expect(within(detailsSection).getByText(/Status/i)).toBeInTheDocument();
  });

  test('Renders the show main section', () => {
    render(<ShowInfo />);
    const mainSection = screen.getByTestId('show-main');
    // Busca el h1 específico para Friends
    expect(
      within(mainSection).getByRole('heading', { name: /Friends/i })
    ).toBeInTheDocument();
    expect(within(mainSection).getByText(/A sitcom about friends/i)).toBeInTheDocument();
    expect(within(mainSection).getByText(/Cast/i)).toBeInTheDocument();
    expect(within(mainSection).getByText(/Jennifer Aniston/i)).toBeInTheDocument();
    expect(within(mainSection).getByText(/Rachel/i)).toBeInTheDocument();
  });

  test('Renders the episodes section', () => {
    render(<ShowInfo />);
    const episodesSection = screen.getByTestId('show-episodes');
    // Busca el heading "Episodes"
    expect(
      within(episodesSection).getByRole('heading', { name: /Episodes/i })
    ).toBeInTheDocument();
    // Busca el label "Season"
    expect(
      within(episodesSection).getByLabelText(/Season/i)
    ).toBeInTheDocument();
    expect(within(episodesSection).getByText(/The Pilot/i)).toBeInTheDocument();
    expect(within(episodesSection).getByText(/First episode/i)).toBeInTheDocument();
    expect(within(episodesSection).getByText(/Runtime: 22 minutes/i)).toBeInTheDocument();
    expect(within(episodesSection).getByText(/Rating: 8/i)).toBeInTheDocument();
  });

  test('Shows loading message when loading', () => {
    mockShowDetails = { shows: null, loading: true, error: null };
    render(<ShowInfo />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});