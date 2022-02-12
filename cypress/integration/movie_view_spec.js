describe('Rancid Tomatillos selected movie flow', () => {

  it('should display selected movie details and trailer', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      'movies': [
        {
          'id': 694919,
          'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
          'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
          'title': 'Money Plane',
          'average_rating': 6.625,
          'release_date': '2020-09-29'
        },
      ]
    });

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      'movie': {
        'id': 694919,
        'title': 'Money Plane',
        'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
        'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
        'release_date': '2020-09-29',
        'overview': 'A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.',
        'genres': [
          'Action'
        ],
        'budget': 0,
        'revenue': 0,
        'runtime': 82,
        'tagline': '',
        'average_rating': 6.625
      }
    }).as('getSingleMovie');

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
      'videos': [
        {
          'id': 330,
          'movie_id': 694919,
          'key': 'aETz_dRDEys',
          'site': 'YouTube',
          'type': 'Trailer'
        }
      ]
    }).as('getSingleMovieTrailer');

    cy.visit('http://localhost:3000')
      .get('.poster-frame').click();
    cy.wait(['@getSingleMovie', '@getSingleMovieTrailer']);
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/694919');
    })
      .get('.movie-view')
      .get('.movie-trailer')
      .get('.single-view-poster')
      .get('.single-view-title').contains('Money Plane')
      .get('p').contains('1h 22m')
      .get('p').contains('Rating: 6.6 / 10')
      .get('p').contains('Release Date: Sep. 29, 2020')
      .get('h3').contains('Overview')
      .get('.single-view-overview').contains('A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
      .get('.back-button').contains('Back ▶︎');
  });

  it('should allow user to return to the landing page', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      'movie': {
        'id': 694919,
        'title': 'Money Plane',
        'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
        'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
        'release_date': '2020-09-29',
        'overview': 'A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.',
        'genres': [
          'Action'
        ],
        'budget': 0,
        'revenue': 0,
        'runtime': 82,
        'tagline': '',
        'average_rating': 6.625
      }
    }).as('getSingleMovie');

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
      'videos': [
        {
          'id': 330,
          'movie_id': 694919,
          'key': 'aETz_dRDEys',
          'site': 'YouTube',
          'type': 'Trailer'
        }
      ]
    }).as('getSingleMovieTrailer');

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      'movies': [
        {
          'id': 694919,
          'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
          'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
          'title': 'Money Plane',
          'average_rating': 6.625,
          'release_date': '2020-09-29'
        },
      ]
    })

    cy.visit('http://localhost:3000/694919');
    cy.wait(['@getSingleMovie', '@getSingleMovieTrailer']);
    cy.get('.back-button').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');
    })
      .get('.logo')
      .get('.movies-container')
      .get('.poster-frame')
      .get('.poster')
      .get('p').contains('Rating: 6.6 / 10')
      .get('h2').contains('Money Plane');
  });

  it('should return an error message if unable to load movie content', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      'movies': [
        {
          'id': 694919,
          'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
          'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
          'title': 'Money Plane',
          'average_rating': 6.625,
          'release_date': '2020-09-29'
        },
      ]
    });

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', (req) => {
      req.reply({
        statusCode: 500,
        statusText: 'Internal Server Error'
      });
    });

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
      'videos': [
        {
          'id': 330,
          'movie_id': 694919,
          'key': 'aETz_dRDEys',
          'site': 'YouTube',
          'type': 'Trailer'
        }
      ]
    });
    cy.visit('http://localhost:3000')
      .get('.poster-frame').click()
      .get('.error-message').contains('500 Internal Server Error: Unable to load content.')
      .get('.return-home-button').contains('Go back to main page ▶︎').click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');
    });
  });
});
