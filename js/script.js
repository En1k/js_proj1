const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    
    let film = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', ''); 

    if(film != '' && film != null && film.length < 50 && rating != '' && rating != null) {       
        personalMovieDB.movies[film] = rating;    
    }else {
        i--;
    }       
}

if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
}else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
}else {
    alert('Произошла ошибка');
}


console.log(personalMovieDB);
