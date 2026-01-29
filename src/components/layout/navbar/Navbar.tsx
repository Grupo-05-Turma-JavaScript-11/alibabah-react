import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/icon-alibabah.png";
import DrawerMenuAuth from "../DrawerMenuAuth";
import StoreInfoPanel from "./StoreInfoPanel";
import { useNowTick, useCloseOnRouteChange, useEscapeToClose, useBodyScrollLock } from "./hooks";

export default function Navbar() {
    const navigate = useNavigate();

    // TODO: integrar com AuthContext quando o login estiver pronto
    const isLoggedIn = false;
    const userName = "Bruna Barbieri";

    const [openMenu, setOpenMenu] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);

    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const now = useNowTick();

    function closeAll() {
        setOpenMenu(false);
        setOpenInfo(false);
    }

    useCloseOnRouteChange(closeAll);

    useEscapeToClose(closeAll);

    useBodyScrollLock(openMenu || openInfo);

    function handleSearchSubmit(e: React.FormEvent) {
        e.preventDefault();
        const term = query.trim();
        if (!term) return;
        navigate(`/cardapio?busca=${encodeURIComponent(term)}`);
    }

    return (
        <>
            <header className="w-full fixed top-0 left-0 right-0 z-50 bg-[#F3E9DC] border-b border-black/10">

                <div className="h-14 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="w-10 h-10 grid place-items-center rounded-md hover:bg-black/5 text-[#3B2F2F] cursor-pointer"
                            aria-label="Abrir menu"
                            aria-expanded={openMenu}
                            aria-controls="alibabah-drawer"
                            onClick={() => {
                                setOpenMenu(true);
                                setOpenInfo(false);
                            }}
                        >
                            <span className="text-xl leading-none" aria-hidden>
                                ☰
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            aria-label="Ir para a página inicial"
                            className="flex flex-col items-start justify-center leading-[1rem] gap-1 p-2 text-left hover:scale-[1.1] hover:opacity-90 transition-transform cursor-pointer"
                        >
                            <span className="text-[1.3rem] font-extrabold text-[#741E2D] tracking-wide">
                                Alibabah
                            </span>

                            <span className="text-[1rem] font-extrabold text-black tracking-wide" dir="rtl" lang="ar">
                                المطبخ العربي
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/notificacoes")}
                            className="relative w-10 h-10 grid place-items-center rounded-full
               bg-[#741E2D]/100 text-white hover:brightness-95 cursor-pointer"
                            aria-label="Notificações"
                            title="Notificações"
                        >
                            <span className="text-base" aria-hidden>
                                🔔
                            </span>
                            <span
                                className="absolute -top-1 -right-1 w-5 h-5 rounded-full
               bg-[#741E2D] text-white text-[0.7rem] font-bold
               grid place-items-center border border-black/10"
                            >
                                3
                            </span>
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="O que vai pedir hoje?"
                                className="w-64 px-4 py-2 rounded-md bg-white border border-black/10 text-sm text-[#3B2F2F] outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            />

                            <button
                                type="submit"
                                className="h-11 w-11 rounded-full bg-[#741E2D] text-white flex items-center justify-center cursor-pointer"
                            >
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="7" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                onClick={() => setQuery("")}
                                className="w-10 h-10 grid place-items-center rounded-full bg-[#F3E9DC] text-[#3B2F2F] hover:brightness-95 cursor-pointer"
                                aria-label="Limpar busca"
                                title="Limpar"
                            >
                                ✕
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <div className="h-14" />

            <button
                type="button"
                aria-label="Fechar"
                onClick={closeAll}
                className={[
                    "fixed inset-0 z-40 bg-black/35 transition-opacity",
                    openMenu || openInfo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                ].join(" ")}
            />

            <aside
                id="alibabah-drawer"
                className={[
                    "fixed top-0 left-0 z-50 h-screen w-80 bg-[#FAFAF8] border-r border-black/10",
                    "transition-transform duration-200 ease-out",
                    openMenu ? "translate-x-0" : "-translate-x-full",
                ].join(" ")}
                role="dialog"
                aria-modal="true"
            >
                <DrawerMenuAuth
                    isLoggedIn={isLoggedIn}
                    userName={userName}
                    onClose={() => setOpenMenu(false)}
                    onOpenInfo={() => setOpenInfo(true)}
                    onLogout={undefined}
                    logoSrc={logo}
                />
            </aside>

            <StoreInfoPanel
                open={openInfo}
                onClose={() => setOpenInfo(false)}
                logoSrc={logo}
                now={now}
            />
        </>
    );
}
