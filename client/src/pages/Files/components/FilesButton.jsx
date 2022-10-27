import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import React from "react"
import { AiOutlineFile } from "react-icons/ai"
import { url } from "../../../constants/urls"

const FilesButton = () => {
  const { dirname } = useParams()

  const [Files, setFiles] = useState([])
  useEffect(() => {
    async function getFiles() {
      const response = await fetch(
        //To use in your other devices use your ipv4
        `http://${url.url}:${url.port}/upload/files/${dirname}`
      )
      const data = await response.json()
      setFiles(data)
    }
    getFiles()
  }, [])

  return (
    <>
      {Files.map((file) => {
        return (
          <button
            key={file.name}
            className="lg:flex text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 bg-slate-800   px-4 rounded-l p-8 overflow-hidden flex items-center transition ease-in-out delay-[1] hover:-translate-y-1 hover:scale-[1] hover:bg-slate-500 hover:text-white "
          >
            <div className="mr-1">
              <AiOutlineFile />
            </div>
            <div>{file.name}</div>
          </button>
        )
      })}
    </>
  )
}

export default FilesButton
