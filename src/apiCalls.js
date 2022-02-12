import { checkResponse } from "./utilities";

const apiCalls = {
  async getMovieData (id) {
    let url = "http://localhost:3001/api/v1/movies/";
    if(id) {
      url += `${id}`
    }
    let response = await fetch(url);
      checkResponse(response);
      return await response.json();
  },

  async getTrailerData(id) {
    let response = await fetch(`http://localhost:3001/api/v1/movies/${id}/videos`);
    checkResponse(response);
    return await response.json();
  }
  
};

export default apiCalls;
