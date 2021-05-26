import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

class App extends React.Component {
  componentDidMount(){
    const { store } = this.props;

    // Executed after dispatch is called
    store.subscribe(() => {
      console.log('UPDARED');
      this.forceUpdate();  // To forcefully update the component (Not recommended to use)
    });

    // TODO:: Make an api call
    // Dispatch action
    store.dispatch(addMovies(data));

    console.log('STATE', store.getState());
  }

  render() {
    const { list } = this.props.store.getState();   // {list: [], favourites: []}
    console.log("RENDER");

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
  
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
