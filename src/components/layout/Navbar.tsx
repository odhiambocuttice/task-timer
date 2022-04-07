import Link from "next/link"
import { APP_TITLE } from "../../constants/constants"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const Navbar = () => {
    const { username, setUsername } = useContext(UserContext)

    const handleLogout = () => {
        localStorage.removeItem("access_token")
        setUsername("")
    }


    return (
        <header className="flex justify-around items-center bg-zinc-900 text-white py-6 px-6">
            <h2 className="text-2xl font-semibold">

                <Link href="/">
                    <a>{APP_TITLE}</a>
                </Link>
            </h2>
            <nav>
                <ul className="flex items-center">
                    {username ? (
                        <>
                            <NavLink href="/">Timer</NavLink>
                            <NavLink href="/stats">Stats</NavLink>
                            <button
                                onClick={handleLogout}
                                className="border py-1 px-3 ml-8 rounded hover:bg-cyan-500"
                                type="button"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink href="/login">Login</NavLink>
                            <NavLink href="/signup">Signup</NavLink>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}

interface NavLinkProps {
    href: string
    children: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    return (
        <li className="ml-8 hover:text-cyan-500">
            <Link href={href}>
                <a>{children}</a>
            </Link>
        </li>
    )

}

export default Navbar
