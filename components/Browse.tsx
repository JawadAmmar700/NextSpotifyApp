import React, { useEffect, useState } from "react"
import { getBrowseAll } from "../lib/queries/getBrowseCategory"

const Browse = ({ token }) => {
  const [categories, setCategories] = useState<any>()

  useEffect(() => {
    if (token) {
      getBrowseAll(token).then(data => {
        setCategories(data.data.categories.items)
      })
    }
  }, [token])
  return (
    <div className="mt-6 text-white px-4 mb-36">
      <h1 className="text-2xl font-bold">Browse all</h1>
      <div className="mt-6 grid grid-cols-5 gap-5 mb-10">
        {categories &&
          categories.map((category: any) => {
            return (
              <div key={category.id} className="relative cursor-pointer">
                <img
                  src={category.icons[0].url}
                  alt={category.name}
                  className="w-[200px] h-[200px] rounded-lg"
                />
                <p className="absolute top-3 left-5 text-2xl font-bold">
                  {category.name}
                </p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Browse
