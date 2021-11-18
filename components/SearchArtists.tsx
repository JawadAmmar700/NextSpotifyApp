import React from "react"

const SearchArtists = ({ artists }) => {
  return (
    <div className="px-4 mt-8">
      <div>
        <h1 className="text-white text-2xl font-medium">Artists</h1>
      </div>
      <div className="flex mt-6  space-x-4">
        {artists &&
          artists.slice(0, 5).map((artist, index) => (
            <div
              key={index}
              className="w-[200px] bg-[#171717] h-[250px] flex justify-center items-center hover:bg-[#282828] group cursor-pointer"
            >
              <div className="flex flex-col space-y-4 text-white ">
                <img
                  src={artist?.images[0]?.url}
                  alt={artist.name}
                  className="w-[150px] h-[150px] scale-100  group-hover:scale-105 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold">
                    {artist.name.substring(0, 20)}...
                  </p>
                  <p className="text-sm">Artist</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchArtists
