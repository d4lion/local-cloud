import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineFolder } from "react-icons/ai"
import { url } from "../../../constants/urls"

const DirectoryButton = () => {
  const [dir, setDir] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://${url.url}:${url.port}/upload/directory`
      )
      const data = await response.json()
      setDir(data)
    }
    fetchData()
  }, [])

  return (
    <>
      {dir.map((dir) => {
        return (
          <Link
            to={`/directory/${dir.name}`}
            key={dir.name}
            className="flex justify-center   bg-slate-700 hover:bg-slate-500 p-4 rounded-md text-slate-200 "
          >
            <button id={dir.name} className="flex items-center capitalize">
              <AiOutlineFolder className="mr-3" />
              {dir.name}
            </button>
          </Link>
        )
      })}
    </>
  )
}

export default DirectoryButton
