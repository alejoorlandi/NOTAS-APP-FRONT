import { NavLink } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const NavBar = () => {
  return (
    <header>
      <div>
        <NavLink className="text-3xl font-bold" to="/">
          TodoApp
        </NavLink>

        <NavLink>
          <PlusIcon />
          Crear una nota
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
