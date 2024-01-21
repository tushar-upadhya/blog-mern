import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Search } from "lucide-react";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center text-sm font-semibold white-nowrap sm:text-lg dark:text-white"
      >
        <span className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Blog
        </span>
        Wify
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={Search}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <Search />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="hidden w-12 h-10 sm:inline" color="gray" pill>
          <Moon />
        </Button>

        <Link to={"/sign-in"}>
          <Button outline gradientDuoTone={"purpleToBlue"} pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to={"/projects"}>Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
