import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  // console.log(listings)

  const searchResult = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header setSearch={setSearch} search={search}/>
      <ListingsContainer listings={listings} searchResult={ searchResult } />
    </div>
  );
}

export default App;
