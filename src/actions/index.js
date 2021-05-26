// {
//     type: 'ADD_MOVIES',
//     movies: []
// }


// Action types
export const ADD_MOVIES = 'ADD_MOVIES';

// Action creators
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}