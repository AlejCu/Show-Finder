import { useEffect, useState } from "react";

// Custom hook to fetch the cast of a show by its ID
export function useShowCast(showId: string | null) {
    const [cast, setCast] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect (() => {
        if (!showId) return;
        setLoading(true);
        fetch(`https://api.tvmaze.com/shows/${showId}/cast`)
            .then(res => res.json())
            .then(setCast)
            .catch(() => setError("Error fetching show cast"))
            .finally(() => setLoading(false));
    }, [showId]);

    return { cast, loading, error };
}