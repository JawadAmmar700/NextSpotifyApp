import React, { useEffect, useState } from "react"
import Image from "next/image"
import {
  HomeIcon,
  SearchIcon,
  MenuAlt2Icon,
  PlusIcon,
} from "@heroicons/react/outline"
import { HeartIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"

const Navigations = [
  {
    name: "Home",
    id: 0,
    link: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    name: "Search",
    id: 1,
    link: "/search",
    icon: <SearchIcon className="w-6 h-6" />,
  },
  {
    name: "Library",
    id: 2,
    icon: <MenuAlt2Icon className="w-6 h-6" />,
  },
]

const Navigation = () => {
  const [active, setActive] = useState<number>(0)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === "/") {
      setActive(0)
    } else if (router.pathname === "/search") {
      setActive(1)
    } else {
      setActive(2)
    }
  }, [])

  const navigate = (nav: any) => {
    setActive(nav.id)
    if (nav.link !== router.pathname && nav.link) {
      router.push(nav?.link)
    }
  }

  return (
    <div className="w-[250px] h-screen bg-black sticky top-0  px-2 py-5 ">
      <div className=" ml-3">
        <Image
          src="/spotify-logo.png"
          objectFit="contain"
          width={150}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col space-y-3 text-white mt-6">
        {Navigations.map((nav, id) => (
          <div
            key={id}
            className={`flex items-center ${
              active === id
                ? " bg-[#282828] text-white"
                : "bg-black text-[#B3B3B3]"
            } p-2   hover:text-white transition-all cursor-pointer rounded`}
            onClick={() => {
              nav.link && navigate(nav)
            }}
          >
            {nav.icon}
            <p className="ml-4 font-medium">{nav.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-3 text-white mt-6">
        <div
          className={`flex items-center hover:text-white bg-black text-[#B3B3B3]
           py-2 transition-all cursor-pointer rounded group`}
        >
          <div className="w-[25px] h-[25px] flex items-center justify-center bg-[#B3B3B3] ml-4 group-hover:bg-white">
            <PlusIcon className="w-3 h-3 text-black" />
          </div>
          <p className="ml-4 font-medium">Create Playlist</p>
        </div>
        <div
          className={`flex items-center hover:text-white bg-black text-[#B3B3B3]
           py-2 transition-all cursor-pointer rounded group`}
        >
          <div className="w-[25px] h-[25px] opacity-80 transition-colors flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 ml-4 group-hover:opacity-100">
            <HeartIcon className="w-3 h-3 text-white" />
          </div>
          <p className="ml-4 font-medium">Liked Songs</p>
        </div>
      </div>
      <div className="text-[#B3B3B3] mt-36 ml-4 text-sm">
        <p className="hover:text-white hover:underline cursor-pointer">
          cookie
        </p>
        <p className="mt-2 hover:text-white hover:underline cursor-pointer">
          privacy
        </p>
      </div>
    </div>
  )
}

export default Navigation
