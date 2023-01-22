import React, { useState } from "react";

function GifSearch({ onSubmitQuery }) {
  const [querySearch, setQuerySearch] = useState("");

  function handleSearch(e) {
    setQuerySearch(e.target.value);
  }
  
  function handleQuerySearch(e) {
    e.preventDefault();
    onSubmitQuery(querySearch);
  }

  return (
    <div>
      <form onSubmit={handleQuerySearch}>
        <div className="form-group">
          <label htmlFor="search">Enter a Search Term:</label>
          <input id="search"  className="form-control"
            type="text"
            value={querySearch}
            onChange={handleSearch}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;