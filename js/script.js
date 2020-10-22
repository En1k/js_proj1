const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film = prompt('Один из последних просмотренных фильмов?', ''),
      rating = prompt('На сколько оцените его?', ''),
      film1 = prompt('Один из последних просмотренных фильмов?', ''),
      rating1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[film] = rating;
personalMovieDB.movies[film1] = rating1;

console.log(personalMovieDB.movies);
