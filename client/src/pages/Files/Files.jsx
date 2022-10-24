import FilesButton from "./components/FilesButton"
import UploadFile from "./components/UploadFile"
import { useParams, NavLink } from "react-router-dom"

const FilesPage = () => {
  const { dirname } = useParams()
  return (
    <div className="bg-gray-900">
      <h1 className="text-center text-white font-bold py-16 text-4xl uppercase justify-self-center">
        {dirname} Files
      </h1>

      <div className="grid px-2 sm:grid-cols-2 gap-2 sm:px-40">
        <FilesButton />
      </div>
      <footer className="flex py-16 justify-evenly items-center">
        <NavLink
          to="/directory"
          className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-8 border-b-4 border-slate-700 hover:border-slate-500 rounded"
        >
          Atras
        </NavLink>

        <UploadFile />
      </footer>
    </div>
  )
}

export default FilesPage
