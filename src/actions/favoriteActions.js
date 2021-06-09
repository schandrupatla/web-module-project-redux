export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export const toggleFavorites = (isFavorites)=>{
    return({type: TOGGLE_FAVORITES, payload:isFavorites});
}

export const addFavorite = (movie) =>{
    return ({type:ADD_FAVORITE, payload:movie});
}

export const removeFavorite = (id) =>{
    return ({type:REMOVE_FAVORITE, payload:id});
}
