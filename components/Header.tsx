import React, { useEffect, useState } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import { back, forward } from "../lib/functions/history"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { searchText } from "../atom"

const Profile = ["Account", "Profile", "Upgrade to Premium", "Log out"]

const Header = () => {
  const { data: session } = useSession()
  const [profile, setProfile] = useState<boolean>(false)
  const [value, setValue] = useRecoilState(searchText)
  const router = useRouter()

  return (
    <div className="bg-[#101010] h-[60px]  flex items-center justify-between sticky top-0  p-3 z-30 ">
      <div className="flex space-x-3">
        <div
          className="flex items-center justify-center p-1 bg-black rounded-full cursor-pointer"
          onClick={() => back()}
        >
          <ChevronLeftIcon className="w-5 h-5 text-white" />
        </div>
        <div
          className="flex items-center justify-center p-1 bg-black rounded-full cursor-pointer "
          onClick={() => forward()}
        >
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </div>
        {router.pathname === "/search" && (
          <div className="flex space-x-3 items-center bg-white rounded-3xl w-[300px] px-2">
            <SearchIcon className="w-5 h-5 text-black" />
            <input
              type="text"
              className="flex-grow outline-none"
              placeholder="Artists, songs or prodcast"
              onChange={e => setValue(e.target.value)}
            />
          </div>
        )}
      </div>
      {!session ? (
        <div className="flex items-center justify-center space-x-3 text-white">
          <button className="text-sm uppercase font-medium scale-90 hover:scale-100">
            sign Up
          </button>
          <button
            onClick={() => signIn()}
            className="text-sm uppercase font-medium scale-90 hover:scale-100 py-2 w-[100px] text-black bg-white rounded-2xl"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-3 text-white">
          <button className="text-sm uppercase font-medium scale-90 hover:scale-100 border-2 bg-black border-white py-2 px-5 rounded-2xl">
            Upgrade
          </button>
          <div className="flex space-x-2 items-center justify-between px-3 py-2 bg-black rounded-3xl ">
            <div className="w-7 h-7 rounded-full bg-[#282828] flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
            <div
              className="flex items-center justify-between cursor-pointer relative"
              onClick={() => setProfile(!profile)}
            >
              <p>{session ? session?.user?.name : "Guest"}</p>
              {profile ? (
                <ChevronUpIcon className="w-5 h-5 text-white" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-white" />
              )}
            </div>
            {profile && (
              <div className="absolute w-[200px] py-1 px-2 bg-[#282828] top-14 right-3 flex flex-col space-y-2 z-10">
                {Profile.map((item, index) => (
                  <p
                    key={index}
                    className="px-3 hover:bg-[#534949] py-2 rounded text-sm z-0"
                    onClick={() => index === 3 && signOut()}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
