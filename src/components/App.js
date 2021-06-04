import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';
import { connect } from '../index';

class App extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;

    // Dispatch action
    dispatch(addMovies(data));

  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      // Found the movie
      return true;
    }

    return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  }

  render() {
    const { movies, search } = this.props;   // { movies: {}, search: {} }
    const { list, favourites, showFavourites } = movies;

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab  ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab  ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
  
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.dispatch} 
              isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies to display!!</div> : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {/* It calls this function passing the store*/}
//         {(store) => <App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(store){
  return {
    movies: store.movies,
    search: store.search
  };
}

// through connect() we convey that we want these properties (returned from callback()) from store as props in App
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
