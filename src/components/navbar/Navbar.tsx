import { Link } from 'react-router-dom'
import logo from '../../assets/logo-alibabah.png'

function Navbar() {
    return (
        <nav className="w-full bg-vinho text-offwhite px-8 py-4 flex items-center justify-between shadow-md">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Alibabah" className="h-10" />
                <span className="text-xl font-bold text-dourado">
                    Alibabah
                </span>
            </div>

            {/* Menu */}
            <ul className="flex gap-6 text-sm font-medium">
                <li>
                    <Link to="/" className="hover:text-dourado">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/categorias" className="hover:text-dourado">
                        Categorias
                    </Link>
                </li>
                <li>
                    <Link
                        to="/produtos"
                        className="bg-dourado text-vinho px-4 py-2 rounded-full hover:bg-pessego transition"
                    >
                        Cardápio
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
