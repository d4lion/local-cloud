import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
import ModalCard from "./ModalCard"

const CreateDirectory = () => {
  const [ShowModal, setShowModal] = useState(false)

  const HandleOnClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <button
        className="flex justify-center  bg-slate-700 hover:bg-slate-500 p-4 rounded-md text-slate-200"
        onClick={() => {
          setShowModal(true)
        }}
      >
        <AiOutlinePlus className="h-8" />
      </button>
      <ModalCard visible={ShowModal} onClose={HandleOnClose} />
    </>
  )
}

export default CreateDirectory
