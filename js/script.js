

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
    
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
        
            let film = prompt('Один из последних просмотренных фильмов?', ''),
                rating = prompt('На сколько оцените его?', ''); 
        
            if(film != '' && film != null && film.length < 50 && rating != '' && rating != null) {       
                personalMovieDB.movies[film] = rating;    
            }else {
                i--;
            }       
        }
    },

    detectPersonalLevel: function () {
   
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        }else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function () {
        if(personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () { 
        for(let i = 0; i < 3; i++) {
            
            let answ = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            
            if (answ != '' && answ != null){
                personalMovieDB.genres[i] = answ;
            } else {
                i--;
            }  
        }
        personalMovieDB.genres.forEach(function(genre, i){
            console.log(`Любимый жанр #${i + 1} - это ${genre}`);
        });
        
    },

    toggleVisibleMyDB: function () {
        if(personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
            personalMovieDB.showMyDB();
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

