import React from "react";
import { IoSearch } from "react-icons/io5";

function Search({ allMemes, setFilteredMemes, setIsSearching }) {
  function handleSearch(e) {
    const text = e.target.value.toLowerCase();

    if (text === "") {
      setFilteredMemes([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    const filtered = allMemes.filter((meme) =>
      meme.name.toLowerCase().includes(text)
    );

    setFilteredMemes(filtered);
  }

  return (
    <div className="flex justify-center w-full mt-4">
      <div className="flex items-center w-11/12 md:w-2/3 lg:w-1/2 bg-white rounded-md shadow border overflow-hidden">

        {/* Input */}
        <input
          type="text"
          placeholder="Search emojis..."
          onChange={handleSearch}
          className="w-full px-4 py-2 outline-none text-gray-700"
        />

        {/* Black button with search icon */}
        <button className="bg-black px-4 py-2 flex items-center justify-center">
          <IoSearch size={22} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Search;
