import CreateDirectory from "./components/CreateDirectory/CreateDirectory"
import DirectoryButton from "./components/DirectoryButton"
const DirectoriesPage = () => {
  return (
    <>
      <h1 className="text-center text-white font-bold py-16 text-4xl">
        Directories
      </h1>
      <div className="grid grid-cols-1   sm:grid-cols-4 gap-4 px-16 lg:py-0 py-5">
        <DirectoryButton />

        <CreateDirectory />
      </div>
    </>
  )
}

export default DirectoriesPage
