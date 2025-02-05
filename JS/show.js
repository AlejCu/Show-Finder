document.addEventListener('DOMContentLoaded', () => {
    const showId = localStorage.getItem('showId');
    if (showId) {
        fetch(`https://api.tvmaze.com/shows/${showId}`)
            .then(response => response.json())
            .then(show => {
                console.log(show);
                document.querySelector('#show_main h1').textContent = show.name;
                document.querySelector('#show_main img').src = show.image ? show.image.original : '';
                document.querySelector('#show_main p').textContent = show.summary ? show.summary.replace(/<[^>]+>/g, '') : 'No summary available.';
                document.querySelector('.show_rating p').textContent = show.rating.average || 'N/A';
                document.querySelector('.show_genres p').textContent = show.genres.join(', ') || 'N/A';
                document.querySelector('.show_premiered p').textContent = show.premiered || 'N/A';
                document.querySelector('.show_status p').textContent = show.status || 'N/A';
                document.querySelector('.show_schedule p').textContent = show.schedule.days || 'N/A';
            })
            .catch(error => console.error('Error fetching show details:', error));

        // Fetch cast information
        fetch(`https://api.tvmaze.com/shows/${showId}/cast`)
            .then(response => response.json())
            .then(cast => {
                console.log(cast);
                const castContainer = document.querySelector('.cast_container');
                castContainer.innerHTML = '';
                cast.forEach(member => {
                    const castPhoto = document.createElement('div');
                    castPhoto.classList.add('cast_photo');
                    castPhoto.innerHTML = `
                        <img src="${member.person.image ? member.person.image.medium : ''}" alt="${member.person.name}">
                        <p>${member.person.name}</p>
                        <p id="cast_characterName">${member.character.name}</p>
                    `;
                    castContainer.appendChild(castPhoto);
                });
            })
            .catch(error => console.error('Error fetching cast details:', error));

        // Fetch episodes list
        fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
            .then(response => response.json())
            .then(episodes => {
                console.log(episodes);
                const episodesList = document.querySelector('#show_episodes ul');
                episodesList.innerHTML = '';

                // Group episodes by season
                const seasons = {};
                episodes.forEach(episode => {
                    if (!seasons[episode.season]) {
                        seasons[episode.season] = [];
                    }
                    seasons[episode.season].push(episode);
                });

                // Create season sections
                for (const season in seasons) {
                    const seasonHeader = document.createElement('h2');
                    seasonHeader.textContent = `Season ${season}`;
                    episodesList.appendChild(seasonHeader);

                    seasons[season].forEach(episode => {
                        const episodeItem = document.createElement('li');
                        episodeItem.innerHTML = `
                            <h3><span>Episode ${episode.number} -</span> ${episode.name}</h3>

                            <div class="episode_container">

                            <img src="${episode.image ? episode.image.original : ''}" alt="${episode.name}">

                            <div class="episode_info">

                            <p>${episode.summary ? episode.summary.replace(/<[^>]+>/g, '') : 'No summary available.'}</p>

                            <div class="episode_extra-info">

                            <p>Runtime: ${episode.runtime} minutes</p>
                            <p>Rating: ${episode.rating.average} <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span></p>

                            </div>

                            </div>

                            </div>
                        `;
                        episodesList.appendChild(episodeItem);
                    });
                }
            })
            .catch(error => console.error('Error fetching episodes list:', error));
    } else {
        console.error('No show ID found in local storage.');
    }
});
