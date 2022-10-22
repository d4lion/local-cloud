import { useEffect, useState } from "react"
const [files, setFiles] = useState([])

useEffect(() => {
  async function fetchData() {
    const response = await fetch("http://localhost:3000/upload/files/personal")
    const data = await response.json()
    console.log(data.files)
    setFiles(data.files)
  }
  fetchData()
}, [])

export default files
