import { useEffect, useState } from "react";

// Custom hook to fetch the episode information of a show by its ID
export function useShowEpisodes(showId: string | null) {
    const [episodes, setEpisodes] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect (() => {
        if (!showId) return;
        setLoading(true);
        fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
            .then(res => res.json())
            .then(setEpisodes)
            .catch(() => setError("Error fetching show episodes"))
            .finally(() => setLoading(false));
    }, [showId]);

    return { episodes, loading, error };
}