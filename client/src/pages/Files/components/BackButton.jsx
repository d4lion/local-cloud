import { NavLink } from "react-router-dom"

const BackButton = () => {
  return (
    <div className="py-10 sm:py-0">
      <NavLink
        to="/"
        className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-8 border-b-4 border-slate-700 hover:border-slate-500 rounded"
      >
        Atras
      </NavLink>
    </div>
  )
}

export default BackButton
