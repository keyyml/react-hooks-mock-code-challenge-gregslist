import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, searchResult }) {

  const listingsToDisplay = searchResult.map((listing) => {
    return <ListingCard key={listing.id} {...listing}/> 
  })
  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
