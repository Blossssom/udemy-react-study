import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Slider from './components/Slider';

 function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://post-react-9067f-default-rtdb.firebaseio.com/movies.json')
        .then(res => {
          if(!res.ok) {
            throw new Error('Error!!');
          }else {
            return res.json();
          }
        });
      setMovies(response.results);
    }catch(err) {
      setError(err.message);
    }finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <React.Fragment>
      <section>
        <Slider />
        <button onClick={fetchMoviesHandler} disabled={isLoading}>Fetch Movies</button>
      </section>
      <section>
        {
          isLoading 
            ? <p>Loading...</p>
            : movies.length > 0 
              ? <MoviesList movies={movies} />
              : <p>none moives</p>
        }
        {
          error && <p>Error....</p>
        }
      </section>
    </React.Fragment>
  );
}

export default App;
