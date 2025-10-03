import { useParams } from "react-router-dom";

// Imports for hooks and states
import { useShowDetails } from "../../hooks/useShowDetails";
import { useShowCast } from "../../hooks/useShowCast";
import { useShowEpisodes } from "../../hooks/useShowEpisodes";
import React, { useState } from "react";

// FontAwesome imports for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon icon={faStar} />
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
                            {/* Logic to show image if available, if not a placeholder */}
                            {show.image?.original ? (
                                <img src={show.image.original} alt={show.name} fetchPriority='high' />
                            ) : (
                                <div className="no-image">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                    No image available
                                </div>
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
                                    {/* Logic to show image if available, if not a placeholder */}
                                    {member.person.image?.medium ? (
                                        <img src={member.person.image.medium} alt={member.person.name}  loading="lazy"/>
                                    ) : (
                                        <div className="no-image_cast">
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                            No image available
                                        </div>
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
                    {/* Season selection dropdown */}
                    <div className="season-selector">
                        <h1>Episodes</h1>

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
                        {filteredEpisodes.map((ep: any, idx: number) => {
                            // Logic to show season header only once per season
                            let showSeasonHeader = false;
                            if (selectedSeason === null) {
                            if (idx === 0 || ep.season !== filteredEpisodes[idx - 1].season) {
                                showSeasonHeader = true;
                            }
                            }

                            return (
                            <React.Fragment key={ep.id}>
                                {showSeasonHeader && (
                                <h2>Season {ep.season}</h2>
                                )}
                                <li>
                                <h3>
                                    <span>Episode {ep.number}</span> - {ep.name}
                                </h3>
                                <div className="episode_container">
                                    {/* Logic to show image if available, if not a placeholder */}
                                    {ep.image?.medium ? (
                                    <img src={ep.image.medium} alt={ep.name} loading="lazy" />
                                    ) : (
                                    <div className="no-image_episode">
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                        No image available
                                    </div>
                                    )}
                                    <div className="episode_info">
                                    <p>
                                        {ep.summary
                                        ? ep.summary.replace(/<[^>]+>/g, "")
                                        : "No summary available."}
                                    </p>
                                    <div className="episode_extra-info">
                                        <p>
                                        <span>Runtime:</span> {ep.runtime} minutes
                                        </p>
                                        <p>
                                        <span>Rating:</span> {ep.rating.average}{" "}
                                        <span id="star_icon">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </React.Fragment>
                            );
                        })}
                    </ul>
                </article>
            </section>
        </ShowInfoContainer>
    );
        
}

export { ShowInfo };