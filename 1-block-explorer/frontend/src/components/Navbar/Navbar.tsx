import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-red-500 p-6 w-screen h-40 justify-center">
      <div className="flex items-center h-full justify-center">
        <div className="flex items-center gap-20 space-x-12 lg:gap-48 ">
          <div className="flex items-center justify-center w-auto h-full">
            <h3 className="text-3xl font-bold flex ">Ninja Explorer</h3>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row md:gap-14 ">
            <NavLink
              to="/balance"
              className={({ isActive }) => `
              px-3 py-2 rounded-md text-sm font-medium
              ${
                isActive
                  ? "bg-gray-900  text-red-500"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            `}
            >
              Balance
            </NavLink>
            <NavLink
              to="/transacao"
              className={({ isActive }) => `
              px-3 py-2 rounded-md text-sm font-medium
              ${
                isActive
                  ? "bg-gray-900 text-red-500"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            `}
            >
              Transação
            </NavLink>
            <NavLink
              to="/block"
              className={({ isActive }) => `
              px-3 py-2 rounded-md text-sm font-medium
              ${
                isActive
                  ? "bg-gray-900 text-red-500"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            `}
            >
              Block
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
