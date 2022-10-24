import DirectoryButton from "./components/DirectoryButton"

const DirectoriesPage = () => {
  return (
    <>
      <h1 className="text-center text-white font-bold py-16 text-4xl">
        Directories
      </h1>
      <div className="grid grid-cols-1   sm:grid-cols-4 gap-4 px-16">
        <DirectoryButton />
      </div>
    </>
  )
}

export default DirectoriesPage
