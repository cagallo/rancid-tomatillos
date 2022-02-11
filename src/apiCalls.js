import {checkResponse} from "./utilities.js";


const apiCalls = {
  async getMovieData (id) {
    let url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies/";
    if(id) {
      url += `${id}`
    }
    let response = await fetch(url);
      return await response.json();
  },

  async getTrailerData(id) {
    let response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    return await response.json();
  }
  
};

export default apiCalls;
