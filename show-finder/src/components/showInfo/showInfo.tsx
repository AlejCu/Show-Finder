import { useParams } from "react-router-dom";

// Imports for hooks and states
import { useShowDetails } from "../../hooks/useShowDetails";
import { useShowCast } from "../../hooks/useShowCast";
import { useShowEpisodes } from "../../hooks/useShowEpisodes";
import React, { useState } from "react";

// Styling import 
import { ShowInfoContainer } from "./showInfoStyles";

function ShowInfo() {

    const { showId } = useParams();// Logic to pull showId for the fetch to work

    //Custom hooks to fetch show details, cast, and episodes
    const { shows: show, loading: loadingShow } = useShowDetails(showId || null);
    const { cast, loading: loadingCast } = useShowCast(showId || null);
    const { episodes, loading: loadingEpisodes } = useShowEpisodes(showId || null);

    //State to manage selected season for filtering episodes
    const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
    const seasons = Array.from(new Set(episodes.map((ep: any) => ep.season)));
    const filteredEpisodes = selectedSeason
    ? episodes.filter((ep: any) => ep.season === selectedSeason)
    : episodes;

    //Conditional rendering based on loading states and show existence
    if (loadingShow || loadingCast || loadingEpisodes) return <p>Loading...</p>;
    if (!show) return <p>No show found.</p>;

    return (
    <ShowInfoContainer>
            {/* Extra show info */}
            <article className="show_info" id="show_details" data-testid="show-details">
                <div className="show_rating">
                    <h2>Rating</h2>
                    <div className="rating_container">
                        <p>{show.rating?.average || "N/A"}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    </div>
                </div>
                <div className="show_genres">
                    <h2>Genres</h2>
                    <p>{show.genres?.join(", ") || "N/A"}</p>
                </div>
                <div className="show_premiered">
                    <h2>Premiered</h2>
                    <p>{show.premiered || "N/A"}</p>
                </div>
                <div className="show_schedule">
                    <h2>Schedule</h2>
                    <p>{show.schedule?.days?.join(", ") || "N/A"}</p>
                </div>
                <div className="show_status">
                    <h2>Status</h2>
                    <p>{show.status || "N/A"}</p>
                </div>
            </article>

            <article id="show_main" data-testid="show-main">
                <div className="show_topSection">
                    <div className="show_info" id="show_container">
                        <div className="show_picture">
                            <h1>{show.name}</h1>
                            {show.image?.original && (
                                <img src={show.image.original} alt={show.name} />
                            )}
                        </div>
                        <p id="show_description">
                            {show.summary ? show.summary.replace(/<[^>]+>/g, "") : "No summary available."}
                        </p>
                    </div>
                    {/* Cast information */}
                    <div className="show_info" id="cast_info">
                        <h1>Cast</h1>
                        <div className="cast_container">
                            {cast.map((member: any) => (
                                <div className="cast_photo" key={member.person.id}>
                                    {member.person.image?.medium && (
                                        <img src={member.person.image.medium} alt={member.person.name} />
                                    )}
                                    <p>{member.person.name}</p>
                                    <p id="cast_characterName">{member.character.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* Episodes section */}
            <section className="show_info-container">
                <article className="show_info" id="show_episodes" data-testid="show-episodes">
                    <h1>Episodes</h1>
                    {/* Season selection dropdown */}
                    <div className="season-selector">
                        <label htmlFor="season-select">Season: </label>
                        <select 
                            id="season-select"
                            value={selectedSeason ?? ""}
                            onChange={e => setSelectedSeason(e.target.value ? Number(e.target.value) : null)}>
                            
                            <option value="">All Seasons</option>
                            {seasons.map((season: number) => (
                                <option key={season} value={season}>
                                    {season}
                                </option>
                            ))}
                        </select>
                    </div>
                    <ul>
                        {filteredEpisodes.map((ep: any) => (
                            <li key={ep.id}>
                                <h3><span>Episode {ep.number} -</span><span> {ep.name}</span></h3>

                                <div className="episode_container">

                                    {ep.image?.medium && (
                                        <img src={ep.image.original} alt={ep.name} />
                                    )}
                                    <div className="episode_info">
                                        <p>{ep.summary ? ep.summary.replace(/<[^>]+>/g, "") : "No summary available."}</p>

                                        <div className="episode_extra-info">
                                            <p>Runtime: {ep.runtime} minutes</p>
                                            <p>Rating: {ep.rating.average} <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </ShowInfoContainer>
    );
        
}

export { ShowInfo };