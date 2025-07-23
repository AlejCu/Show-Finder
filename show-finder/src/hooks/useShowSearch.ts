import { useState } from 'react';

// Custom hook to search for shows using the TVMaze API
function useShowSearch() {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const searchShows = async (query: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch (`https://api.tvmaze.com/search/shows?q=${query}`);
            const data = await response.json();
            setShows(data);
        } catch (err) {
            setError('No Results Found');
        } finally {
            setLoading(false);
        }
    };

    return { shows, loading, error, searchShows };

}

export default useShowSearch;