// Logic for the search form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#search_section');
    //listens for the submit event on the form
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = document.querySelector('#search').value;
        console.log(`Searching for: ${searchTerm}`);
        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const showsSection = document.querySelector('#shows_section');
                showsSection.innerHTML = '';
                //creates a container for each show
                data.forEach(show => {
                    const showContainer = document.createElement('article');
                    showContainer.classList.add('show_container');
                    showContainer.innerHTML = `
                        <a href="shows.html" data-id="${show.show.id}">
                            <img src="${show.show.image ? show.show.image.original : ''}" alt="${show.show.name}">
                        </a>
                        <h1>${show.show.name}</h1>
                    `;
                    showsSection.appendChild(showContainer);
                });

                // Add event listener to each show container
                document.querySelectorAll('.show_container a').forEach(anchor => {
                    anchor.addEventListener('click', (event) => {
                        event.preventDefault();
                        const showId = anchor.getAttribute('data-id');
                        localStorage.setItem('showId', showId);
                        window.location.href = 'shows.html';
                    });
                });
            })
            .catch(error => console.error('No Results'));
    });
});
