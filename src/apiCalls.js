const apiCalls = {
  getAllMovies() {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies");
  }
};

export default apiCalls;
