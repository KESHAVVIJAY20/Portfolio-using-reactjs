import { MegaMenu, Navbar, NavbarLink } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <MegaMenu className="rounded-bl-lg">
      <Navbar className="md:p-4">
        <Navbar.Toggle/>   
        <Navbar.Collapse className="md:pe-10">
          <NavbarLink className=" text-teal-400">
            <Link to='/'>About</Link>
          </NavbarLink>
          <NavbarLink className=" text-teal-400">
            <Link to='/resume'>Resume</Link>
          </NavbarLink>
          <NavbarLink className=" text-teal-400">
            <Link to='/project'>Projects</Link>
          </NavbarLink>
          <NavbarLink className=" text-teal-400">
            <Link to='/contact'>Contact</Link>
          </NavbarLink>
        </Navbar.Collapse>
      </Navbar>
    </MegaMenu>
  );
}
