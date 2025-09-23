## Show Finder

Developed using REACT, HTML, Typescript, Jest, react-router and styled-components

This site was developed to use the TVMaze API ( https://www.tvmaze.com/api ) in order to search for shows and see detailed information about them.

For the fetch of each endpoint a custom hook was created to facilitate the process with this REACT project

You can search for them by entering the name of the show in the search box and this will show you a list of all the shows that match that name 

<img width="1835" height="910" alt="image" src="https://github.com/user-attachments/assets/0a74883e-f195-44bc-b63e-f3c36c8007a1" />


If you click on the image for one of these results, you will be taken to the show details route.


<img width="1850" height="914" alt="image" src="https://github.com/user-attachments/assets/e77b0ddd-68bd-427b-b62c-5b0ea0fc38a3" />


From this route you will see a description of the show, the rating for it, a list of the cast memebers and episodes available, within this episodes section, you can use the dropdown menu to only display episodes from a specific season, this was added because scrolling through all the episodes for a long season made things tedious.


<img width="1839" height="540" alt="image" src="https://github.com/user-attachments/assets/929c9d55-f28a-49de-858e-db88d3e7387e" />

## Future Plans

I plan on expanding on this site by adding a couple more pages or routes with react-router, one route will show the details from the cast members when clicking on one of their images, and the other route will show you details for the episode you click the image for.

This site also needs some design changes, along with performance and accesibility improvements

## How to install and scripts

Using your terminal you can run "npm install" to install the dependencies needed to run the code

SCRIPTS

npm start: Can be used to start the site on a local host

npm test: Can be used to run all the jest tests available in the tests folder

npm predeploy and npm deploy: Can only be used to deploy the site to be used with gh-pages
