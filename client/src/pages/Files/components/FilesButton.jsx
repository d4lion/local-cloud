import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import React from "react"

const FilesButton = () => {
  const { dirname } = useParams()

  const [Files, setFiles] = useState([])
  useEffect(() => {
    async function getFiles() {
      const response = await fetch(
        `http://localhost:3000/upload/files/${dirname}`
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
            className="lg:flex text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 bg-slate-800   px-4 rounded-l p-4 overflow-hidden "
          >
            {file.name}
          </button>
        )
      })}
    </>
  )
}

export default FilesButton
