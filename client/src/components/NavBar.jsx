import { CgProfile, CgSearch } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex md:text-4xl md:justify-around items-center p-5 w-full fixed z-1000 bottom-0 md:bottom-auto md:top-0 bg-green-500 shadow-lg">
      <h1 className="hidden md:block">DotChat</h1>
      <div className="flex w-full md:w-auto justify-center gap-12 text-5xl">
        <Link to="/chat"><TiMessages /></Link>
        <Link to="/search"><CgSearch /></Link>
        <Link to="/"><CgProfile/></Link>
      </div>
      
    </nav>
  )
}

export default NavBar
