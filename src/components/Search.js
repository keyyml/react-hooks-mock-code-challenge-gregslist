import React from "react";

function Search({ setSearch, search }) {

  function handleSubmit(e){
    e.preventDefault()
    setSearch(e.target.search.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit} >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => e.target.value == "" ? setSearch("") : undefined}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
