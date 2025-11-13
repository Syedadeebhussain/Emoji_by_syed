import React from "react";

function MemeCard({ meme }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
      <img
        src={meme.url}
        alt={meme.name}
        className="w-16 h-16 mx-auto object-contain"
      />
      <h2 className="text-lg font-semibold text-center mt-3 truncate">
        {meme.name}
      </h2>
      <p className="text-gray-500 text-sm text-center mt-1 truncate">
        meme, funny, laugh
      </p>
    </div>
  );
}

export default MemeCard;
