
// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';



// Action creators
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    };
}

export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    };
}

export function addMovieToList (movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}