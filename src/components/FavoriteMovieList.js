import React from 'react';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    console.log("Favorites:",favorites);
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps=(state)=>{
    return {favorites:state.favorites.favorites}
}


export default connect(mapStateToProps)(FavoriteMovieList);