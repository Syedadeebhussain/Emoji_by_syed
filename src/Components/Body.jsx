import React, { useEffect, useState } from "react";
import Apicalling from "./Apicalling";
import MemeCard from "./MemeCard";
import Search from "./Search";

function Body() {
  const allMemes = Apicalling();
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center pt-20">

    
      <h1 className="text-3xl font-bold text-center mb-4">Emoji Search</h1>

      <Search
        allMemes={allMemes}
        setFilteredMemes={setFilteredMemes}
        setIsSearching={setIsSearching}
      />

     
      {!isSearching && (
        <p className="text-gray-500 text-lg mt-6">
          Type something to search emojis...
        </p>
      )}

      {/* Show no results */}
      {isSearching && filteredMemes.length === 0 && (
        <p className="text-gray-500 text-lg mt-6">No results found 😕</p>
      )}

      {/* Cards Grid */}
      {isSearching && filteredMemes.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-11/12 mx-auto mt-10">
          {filteredMemes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Body;
