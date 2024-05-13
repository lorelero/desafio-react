import React, { useState } from 'react';

function Buscador({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar películas"
          value={query}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default Buscador;

