export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";


export const toggleFavorites = (isFavorites)=>{
    return({type: TOGGLE_FAVORITES, payload:isFavorites});
}

export const addFavorite = (movie) =>{
    return ({type:ADD_FAVORITE, payload:movie});
}
