import Navbar from "./Navbar"


const Layout: React.FC = ({ children }) => {
    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Navbar />
            <main className="flex flex-col grow">{children}</main>
        </div>
    )
}

export default Layout