import react from 'react';
import {TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from '../actions/favoriteActions'

const initialState ={
    favorites: [],
    displayFavorites:false
}
 const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
        return {
             ...state, displayFavorites: !state.displayFavorites
        }      
        case ADD_FAVORITE:
        return{
            ...state, favorites:[...state.favorites, action.payload]
        }
        case REMOVE_FAVORITE:  
            return{
                favorites: state.favorites.filter(favorite=>favorite.id!==action.payload)
            }
                
        default:
            return state;
    }
}
export default reducer;