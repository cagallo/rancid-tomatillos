# Rancid Tomatillos

It's Saturday night and you want to watch a movie, but you don't know what to watch? You're in luck! 'Rancid Tomatillos' is an easy-to-use web app for viewing movie posters, details and trailers.

# Table of Contents

1. [Overview](#overview)
2. [Installation Instructions](#installationInstructions)
3. [Project Goals](#projectGoals)
4. [Introduction](#introduction)
5. [Directions and Features](#directions)
6. [Code Architecture](#codeArchitecture)
7. [Project Challanges](#projectChallanges)
8. [Project Wins](#projectWins)
9. [Technologies Used](#techUsed)
10. [Authors](#authors)

## Overview <a name="overview"></a>

## Installation Instructions <a name="installationInstructions"></a>

1. Clone down the [Movie Data API](https://github.com/cagallo/movies-data-api)
2. `cd` into the directory
3. Rrun `npm install`
4. Run `npm start`
5. You should see the message: "Movies Data is now running on http://localhost:3001" in your terminal  
6. `cd` out of that directory then clone down [this repository](https://github.com/cagallo/overlook-hotel)
7. Run `npm install`
8. Run `npm start` in your terminal
9. Go to http://localhost:8080/ and you should see the website
10. Enter `control + c` in your terminal to stop the server(s) at any time.

## Project Goals <a name="projectGoals"></a>

- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router

## Introduction <a name="introduction"></a>

## Directions and Features <a name="directions"></a>

## Code Architecture <a name="codeArchitecture"></a>

The React architecture is based on two class components (App.js, MovieView.js) and five functional components (Header.js, MovieContainer.js, MovieDetails.js, MoviePoster.js, Trailer.js). The class components holds state and are in charge of the network requests, while the functional components render information passed down as props.

## Project Challanges <a name="projectChallanges"></a>

- This was our team's first time working with the following technology and concepts, which naturally came with a learning curve as we implemented them into our project:

    - Crearting local server to access data 
    - Implementing React and React Router
    - Testing React components and asychronous JS using Cypress

## Project Wins <a name="projectWins"></a>

- Created a fully funtional MVP with time scope of 1.5 weeks
- Gained a strong understanding of React framework 
- Successfully implemented asynchronous JS
- Completed a thorough project plan and wireframe, which kept our team on track 
- Implemented React Router for a multi-page UX
- Gained competency with Cypress E2E testing framework
- Utilized typechecking with PropTypes

---------------------------------------
## Technologies Used <a name="techUsed"></a>

- React
- React Router
- Javascript
- CSS3
- HTML5
- Fetch API
- webpack
- PropTypes
- NPM
- Cypress
- day.js
- EsLint 

## Authors <a name="authors"></a>

- [Chez Gallo](https://github.com/cagallo)
- [Ethan Tweitmann](https://github.com/ectweitmann)

- Project Manager: [Robbie Jaeger](https://github.com/robbiejaeger)
