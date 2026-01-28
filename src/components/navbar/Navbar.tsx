import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icon-alibabah.png";

const NAV = [
    { to: "/", label: "Home" },
    { to: "/cardapio", label: "Cardápio" },
    { to: "/sobre", label: "Sobre Nós" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => setOpen(false), [location.pathname]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#F3E9DC] border-t border-black/5">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Alibabah"
                            className="w-10 h-10 object-contain"
                            draggable={false}
                        />
                        <div className="leading-tight">
                            <p className="text-[1.2rem] font-extrabold text-[#3B2F2F]">Alibabah Delivery</p>
                            <p className="text-[1rem] text-[#3B2F2F]/70">Culinária Árabe</p>
                        </div>
                    </Link>

                    {/* Menu desktop */}
                    <nav className="hidden md:flex items-center gap-1" aria-label="Menu principal">
                        {NAV.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    [
                                        "px-3 py-2 rounded-md text-[1.2rem] font-semibold transition-colors",
                                        isActive
                                            ? "bg-[#741E2D] text-[#FAFAF8]"
                                            : "text-[#3B2F2F] hover:bg-black/5",
                                    ].join(" ")
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                   
                    <div className="flex items-center gap-2">
                        <span className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[1rem] font-semibold bg-[#FAFAF8] border border-black/10 text-[#3B2F2F]">
                            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden />
                            Loja aberta
                        </span>

                        <Link
                            to="/carrinho"
                            className="relative w-10 h-10 grid place-items-center rounded-md hover:bg-black/5"
                            aria-label="Carrinho (2 itens)"
                            title="Carrinho"
                        >
                            <span className="text-xl" aria-hidden>🛒</span>
                            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[0.6rem] font-extrabold grid place-items-center bg-[#D4AF37] text-[#3B2F2F] border border-black/10">
                                2
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="md:hidden w-10 h-10 rounded-md hover:bg-black/5 text-[#3B2F2F]"
                            aria-label="Abrir menu"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                {open && (
                    <nav className="md:hidden px-4 pb-4" aria-label="Menu mobile">
                        <div className="pt-2 grid gap-2">
                            {NAV.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        [
                                            "block px-3 py-2 rounded-md text-sm font-semibold transition-colors",
                                            isActive
                                                ? "bg-[#741E2D] text-[#FAFAF8]"
                                                : "bg-[#FAFAF8] text-[#3B2F2F] hover:bg-black/5",
                                        ].join(" ")
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </nav>
                )}
            </header>

            <div className="h-16" />
        </>
    );
}
