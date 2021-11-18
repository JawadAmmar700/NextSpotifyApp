import React from "react"

const SearchAblums = ({ albums }) => {
  return (
    <div className="px-4 mt-8">
      <h1 className="text-white text-2xl font-medium">Albums</h1>
      {albums && (
        <div className="flex space-x-4 mt-4  ">
          {albums.map((album, index) => (
            <div
              key={index}
              className="w-[200px] bg-[#171717] h-[250px] flex justify-center items-center hover:bg-[#282828] group cursor-pointer"
            >
              <div className="flex flex-col space-y-4 text-white ">
                <img
                  src={album.images[0].url}
                  alt={album.name}
                  className="w-[150px] h-[150px] scale-100  group-hover:scale-105 "
                />
                <div>
                  <p className="text-sm font-bold">
                    {album.name.substring(0, 20)}...
                  </p>
                  <p className="text-sm">{album.artists[0].name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchAblums
