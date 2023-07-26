import { NavLink } from 'react-router-dom'
const handleBack = () => {
  window.history.back()
}

const NavLayout = (props) => {
  return (
    <div>
      <div className="navbar shadow-md top-0 sticky bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-sm w-52"
            >
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/income"> Income</NavLink>
              </li>
              <li>
                <NavLink to="/expense"> Expense</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Income&Expense</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/income"> Income</NavLink>
            </li>
            <li>
              <NavLink to="/expense"> Expense</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center mt-2 mb-2">
        <button
          onClick={handleBack}
          className="flex items-center mx-10 bg-slate-200 rounded-md shadow-md font-bold border p-2 space-x-2 text-gray-600 hover:bg-slate-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back</span>
        </button>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default NavLayout
