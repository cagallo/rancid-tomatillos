import dayjs from "dayjs";
import numeral from "numeral";

export const checkResponse = (response) => {
  if(!response.ok) {
    throw new Error('Something went wrong. Please try again!');
  } else {
    return response.json();
  }
}

export const cleanMovieData = (movie) => {
  return {
    release_date: formatReleaseDate(movie['release_date']),
    budget: formatBudget(movie.budget),
    revenue: formatRevenue(movie.revenue),
    runtime: formatRuntime(movie.runtime),
    overview: verifyOverview(movie.overview),
    genres: verifyGenres(movie.genres),
    average_rating: formatAverageRating(movie['average_rating']),
    tagline: verifyTagline(movie.tagline)
  };
};

const formatReleaseDate = (date) => {
  if (!date) {
    return null;
  }
  return dayjs(date).format("MMM DD, YYYY");
};

const formatBudget = (budget) => {
  if (!budget) {
    return null;
  }
  return numeral(budget).format("$0,0[.]00");
};

const formatRevenue = (revenue) => {
  if (!revenue) {
    return null;
  }
  return numeral(revenue).format("($0.00a)");
};

const formatRuntime = (time) => {
  if (!time) {
    return null;
  }
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

const verifyOverview = (overview) => {
  if (!overview) {
    return null;
  }
  return overview;
};

const verifyGenres = (genre) => {
  if (!genre.length) {
    return null;
  }
  return genre;
};

export const formatAverageRating = (rating) => {
  if (!rating) {
    return null;
  }
  return parseFloat(rating).toFixed(1);
};

const verifyTagline = (tagline) => {
  if (!tagline) {
    return null;
  }
  return tagline;
};
