import { Link, useNavigate } from "react-router-dom";

type Props = {
    isLoggedIn: boolean;
    userName: string;
    onClose: () => void;
    onOpenInfo: () => void; // abre o drawer da direita
    logoSrc: string;
    onLogout?: () => void;
};

export default function DrawerMenuAuth({
    isLoggedIn,
    userName,
    onClose,
    onOpenInfo,
    logoSrc,
    onLogout,
}: Props) {

    const navigate = useNavigate();

    return (

        <div className="flex flex-col h-full text-[#3B2F2F] bg-[#FFCB9A]/20">
            <div className="px-6 py-4 border-b border-black/10 flex items-start justify-between">
                <div>
                    <p className="text-sm text-black/100">
                        {isLoggedIn ? `Olá, ${userName}!` : "Olá, visitante!"}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                        <img
                            src={logoSrc}
                            alt="Alibabah"
                            className="w-10 h-10 object-contain"
                            draggable={false}
                        />

                        <div className="leading-tight">
                            <p className="text-lg font-extrabold text-black">Alibabah</p>
                            <p className="text-sm text-[#741E2D] font-semibold">Culinária Árabe</p>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-xl text-[#3B2F2F]/70 hover:text-black cursor-pointer"
                    aria-label="Fechar menu"
                >
                    ✕
                </button>
            </div>

            <nav className="flex-1 px-2 py-2 space-y-1">

                <button
                    type="button"
                    onClick={() => {
                        onOpenInfo();
                        onClose();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-md font-semibold hover:bg-black/5 cursor-pointer"
                >
                    <span aria-hidden className=" cursor-pointer">🥗</span>
                    Entrega, Horário e Pagamento
                </button>

                {!isLoggedIn ? (
                    <>
                        <Link
                            to="/login"
                            className="flex items-center gap-3 px-3 py-3 rounded-md font-semibold hover:bg-black/5 cursor-pointer"
                            onClick={onClose}
                        >
                            <span aria-hidden className="">↪</span>
                            Entrar
                        </Link>

                        <Link
                            to="/cardapio"
                            className="flex items-center gap-3 px-3 py-3 rounded-md font-semibold hover:bg-black/5 cursor-pointer"
                            onClick={onClose}
                        >
                            <span aria-hidden className="">🍽️</span>
                            Cardápio
                        </Link>

                        <Link
                            to="/cupons"
                            className="flex items-center gap-3 px-3 py-3 font-medium hover:bg-black/5 cursor-pointer"
                            onClick={onClose}
                        >
                            <span aria-hidden className="">🏷️</span>
                            Cupons de Desconto
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            to="/cardapio"
                            className="flex items-center gap-3 px-3 py-3 rounded-md font-semibold hover:bg-black/5 cursor-pointer"
                            onClick={onClose}
                        >
                            <span aria-hidden className="">🍽️</span>
                            Cardápio
                        </Link>

                        <Link
                            to="/pedidos"
                            className="flex items-center gap-3 px-3 py-3 rounded-md font-semibold hover:bg-black/5 cursor-pointer"
                            onClick={onClose}
                        >
                            <span aria-hidden className="">🧾</span>
                            Meus Pedidos
                        </Link>

                        <Link
                            to="/perfil"
                            className="flex items-center gap-3 px-3 py-3 rounded-md font-semibold hover:bg-black/5 cursor-pointer"
                            onClick={onClose}
                        >
                            <span aria-hidden className="">👤</span>
                            Meu Cadastro
                        </Link>

                        <button
                            type="button"
                            onClick={() => {
                                onLogout?.();   // usar com auth
                                onClose();
                                navigate("/login")
                            }}
                            className="w-full flex items-center gap-3 px-3 py-3 rounded-md font-semibold text-red-700 hover:bg-red-50 cursor-pointer"
                        >
                            <span aria-hidden className="">↩</span>
                            Sair
                        </button>

                        <div className="h-px bg-black/10" />

                        <Link
                            to="/cupons"
                            className="flex items-center gap-3 px-3 py-3 font-medium hover:bg-black/5 cursor-pointer"
                            onClick={onClose}
                        >
                            <span aria-hidden className="">🏷️</span>
                            Cupons de Desconto
                        </Link>

                        <Link
                            to="/fidelidade"
                            className="flex items-center gap-3 px-3 py-3 rounded-md font-semibold hover:bg-black/5 cursor-pointer"
                            onClick={onClose}
                        >
                            <span aria-hidden>⭐</span>
                            Fidelidade
                        </Link>
                    </>
                )}

                <div className="px-4 py-3 border-t border-black/10" />

                <Link
                    to="/sobre"
                    className="w-full flex items-center gap-3 px-3 rounded-md font-semibold hover:bg-black/5"
                    onClick={onClose}
                >
                    <span aria-hidden className="w-3 inline-flex justify-center">ℹ️</span>
                    Sobre Nós
                </Link>

                <div className="mt-auto px-4 py-12 text-center text-xs">
                    <p>Desenvolvido por</p>
                    <p className="font-extrabold text-[#741E2D]">
                        Grupo 05 • Turma JS 11 Generation Brasil
                    </p>
                    <p>v1.0 · 2026 ©</p>
                </div>
            </nav>
        </div >
    );
}
