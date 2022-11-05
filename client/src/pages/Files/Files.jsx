import FilesButton from "./components/FilesButton"
import UploadFile from "./components/UploadFile"
import BackButton from "./components/BackButton"
import { useParams } from "react-router-dom"

const FilesPage = () => {
  const { dirname } = useParams()
  return (
    <div className="bg-[#1c212e]">
      <h1 className="text-center text-white font-bold py-16 text-4xl uppercase justify-self-center">
        {dirname} Files
      </h1>

      <div className="grid px-2 sm:grid-cols-2 gap-3 sm:px-40">
        <FilesButton />
      </div>

      <div className="sm:m-0 sm:flex px-5 py-10 justify-around items-center">
        <BackButton />
        <div>
          <UploadFile />
        </div>
      </div>
    </div>
  )
}

export default FilesPage
