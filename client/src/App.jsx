import { BrowserRouter, Route, Routes, redirect, Link } from "react-router-dom"
import DirectoriesPage from "./pages/Directories/Directories"
import FilesPage from "./pages/Files/Files"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 h-screen">
        <Routes>
          <Route path="/directory" element={<DirectoriesPage />} />

          <Route path="/directory/:dirname" element={<FilesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
