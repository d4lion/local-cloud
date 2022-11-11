import { useState } from "react"
import CreateDirectoryReq from "./CreateDirectoryReq"

//Icons
import { AiOutlineClose } from "react-icons/ai"

export default function ModalCard({ visible, onClose }) {
  const [dirCreationName, setDirCreationName] = useState("")

  if (!visible) {
    return null
  } else {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <form className="bg-white p-6 rounded w-72">
          <div className="flex flex-col mb-7">
            <button className="items-start self-end" onClick={onClose}>
              <AiOutlineClose />
            </button>
          </div>
          <h1 className="font-semibold text-center text-xl text-gray-700">
            Create Directory
          </h1>
          <p className="text-center text-gray-700 mb-7">Input Name</p>

          <div className="flex flex-col m-5">
            <input
              type="text"
              className="border border-gray-700 p-2 rounded mb-5"
              placeholder="docs"
              onChange={(e) => setDirCreationName(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              className="px-5 py-2 bg-gray-700 text-white rounded"
              onClick={() => CreateDirectoryReq(dirCreationName)}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
}
