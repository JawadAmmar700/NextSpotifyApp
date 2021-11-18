import { GetServerSideProps, NextPage } from "next"
import React from "react"
import Header from "../../components/Header"
import Navigation from "../../components/Navigation"
import Player from "../../components/Player"
import SearchPage from "../../components/Search"

const Search: NextPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-none">
          <Navigation />
        </div>
        <div className="flex-grow bg-[#121212]">
          <Header />
          <SearchPage />
        </div>
        <div className="w-full h-[90px] bg-[#181818] fixed bottom-0 ">
          <Player />
        </div>
      </div>
    </div>
  )
}

export default Search
