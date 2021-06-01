import React from 'react';
import { data } from '../data';
import { addMovieToList } from '../actions';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearchResults: true
        };
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.state = {
            showSearchResults: true
        };
    }

    handleSearch = () => {};

    render () {
        const { showSearchResults } = this.state;
        return(
        <div className="nav">
            <div className="search-container">
                <input></input>
                <button id="search-btn" onClick={this.handleSearch}>Search</button>

                {showSearchResults &&
                    <div className="search-results">
                        <div className="search-result">
                            <img src={data[0].Poster} alt="search-pic"></img>

                            <div className="movie-info">
                                <span>{data[0].Title}</span>
                                <button onClick={() => this.handleAddToMovies(data[0])}>
                                    Add to Movies
                                </button>

                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
        );
    }
}

export default Navbar;