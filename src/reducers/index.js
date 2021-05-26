import { ADD_MOVIES } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
};

export default function movies(state = initialMoviesState, action){
    if(action.type === ADD_MOVIES){
        // We cant modify the state (state object)
        // Therefore, new object need to be crearted having same properties.....  Using spread operator

        return {
            ...state,
            list: action.movies
        }
    }
    
    return state;
}