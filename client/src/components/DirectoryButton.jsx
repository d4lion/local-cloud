import { useEffect, useState } from "react"

const DirectoryButton = () => {
  const [dir, setDir] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/upload/directory")
      const data = await response.json()
      setDir(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Response</h1>
      {dir.map((dir) => {
        return <button key={dir.name}>{dir.name}</button>
      })}
    </div>
  )
}

export default DirectoryButton
