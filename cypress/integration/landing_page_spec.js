describe('Rancid Tomatillos landing page flow', () => {

  it('should display the page title and all the movie posters', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      "movies": [
        {
          "id": 694919,
          "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          "title": "Money Plane",
          "average_rating": 6.625,
          "release_date": "2020-09-29"
        },
      ]
    })
    cy.visit('http://localhost:3000');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');
    })
      .get('.logo')
      .get('.movies-container')
      .get('.poster-frame')
      .get('.poster')
      .get('p')
        .contains('Rating: 6.6 / 10')
      .get('h2')
        .contains('Money Plane');
  });

  it('should render error message if unable to retrieve data', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', (req) => {
      req.reply({
        statusCode: 404,
        statusText: 'Not Found'
      });
    });

    cy.visit('http://localhost:3000')
      .get('.landing-page-error-message')
      .contains('404 Not Found: Unable to load content.')
  });
});
