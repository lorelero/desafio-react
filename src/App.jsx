// App.jsx

import React, { useState } from 'react';
import Buscador from './components/Buscador';
import MiApi from './components/MiApi';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const data = await MiApi.searchMovies(query);
    setMovies(data);
  };

  return (
    <div className="container">
      <h1>Buscador de Películas</h1>
      <Buscador onSearch={searchMovies} />
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card">
              <img src={movie.poster} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
