import { useEffect, useState } from "react";

// Custom hook to fetch the details of a show by its ID
export function useShowDetails(showId: string | null) {
    const [shows, setShows] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect (() => {
        if (!showId) return;
        setLoading(true);
        fetch(`https://api.tvmaze.com/shows/${showId}`)
            .then(res => res.json())
            .then(setShows)
            .catch(() => setError("Error fetching show details"))
            .finally(() => setLoading(false));
    }, [showId]);

    return { shows, loading, error };
}