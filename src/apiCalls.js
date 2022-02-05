const apiCalls = {
  getMovieData(id) {
    if (!id) {
      return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies");
    } else {
      return fetch(
        `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
      );
    }
  }
};

export default apiCalls;
