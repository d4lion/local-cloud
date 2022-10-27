import DirectoryButton from "./components/DirectoryButton"
import { AiOutlinePlus } from "react-icons/ai"

const DirectoriesPage = () => {
  return (
    <>
      <h1 className="text-center text-white font-bold py-16 text-4xl">
        Directories
      </h1>
      <div className="grid grid-cols-1   sm:grid-cols-4 gap-4 px-16">
        <DirectoryButton />
        <button className="flex justify-center   bg-slate-700 hover:bg-slate-500 p-4 rounded-md text-slate-200">
          <AiOutlinePlus className="h-8" />
        </button>
      </div>
    </>
  )
}

export default DirectoriesPage
