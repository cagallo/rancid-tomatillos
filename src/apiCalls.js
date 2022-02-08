import {checkResponse} from "./utilities.js";


const apiCalls = {
  getMovieData(id) {
    let url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies/";
    if(id) {
      url += `${id}`
    }
    return fetch(url)
      .then((response) => checkResponse(response))
  },

  getTrailerData(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then((response) => checkResponse(response))
  }
  
};

export default apiCalls;
