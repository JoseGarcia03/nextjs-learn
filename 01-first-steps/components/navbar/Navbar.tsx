import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";

const navItems = [
  { text: "About", path: "/about" },
  { text: "Pricing", path: "/pricing" },
  { text: "Contact", path: "/contact" },
]

const Navbar = () => {
  return (
    <nav className='flex bg-blue-500/30 p-2 m-2 rounded'>
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        Home
      </Link>

      <div className="flex flex-1"></div>
      {
        navItems.map((navItem) => (
          <ActiveLink key={navItem.text} {...navItem} />
        ))
      }
    </nav>
  )
}

export default Navbar