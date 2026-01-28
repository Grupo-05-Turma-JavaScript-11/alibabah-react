import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon-alibabah.png";

const NAV_FOOTER = [
    { to: "/", label: "Home" },
    { to: "/cardapio", label: "Cardápio" },
    { to: "/sobre", label: "Sobre Nós" },
];

function isValidEmail(value: string) {
    return /\S+@\S+\.\S+/.test(value.trim());
}

export default function Footer() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setMsg("Digite um e-mail válido.");
            return;
        }
        setMsg("Recebido! ✅");
        setEmail("");
        setTimeout(() => setMsg(""), 2500);
    }

    return (
        <footer className="mt-2 bg-[#FAFAF8] text-[#3B2F2F] border-t border-black/5">
           
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex items-center justify-center gap-3">
                        <img
                            src={logo}
                            alt="Alibabah"
                            className="w-10 h-10 object-contain"
                            draggable={false}
                        />
                        <div className="leading-tight">
                            <p className="font-extrabold text-xl">Alibabah</p>
                            <p
                                className="text-sm font-extrabold text-[#741E2D] tracking-wide italic"
                                dir="rtl"
                                lang="ar"
                            >
                                المطبخ العربي
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                        {["Pedidos em tempo real", "Catálogo organizado", "Operação diária"].map((t) => (
                            <span
                                key={t}
                                className="px-2 py-1 rounded-full text-xs font-semibold bg-[#F3E9DC] border border-black/10"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-full flex flex-col items-center">
                        <p className="font-extrabold text-[#741E2D] text-xl">Atalhos</p>
                        <ul className="mt-1 text-sm space-y-1">
                            {NAV_FOOTER.map((item) => (
                                <li key={item.to}>
                                    <Link to={item.to} className="hover:underline">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <p className="font-extrabold text-[#741E2D] text-xl">Contato</p>
                        <p className="mt-1 text-sm text-[#3B2F2F]/70">
                            Comercial: comercial@alibabah.com.br
                        </p>
                        <p className="mt-1 text-sm text-[#3B2F2F]/70">
                            WhatsApp: (11) 9xxxx-xxxx
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <p className="font-extrabold text-[#741E2D] text-xl">Newsletter</p>
                    <p className="mt-1 text-sm text-[#3B2F2F]/70">
                        Novidades e sugestões saudáveis no seu e-mail.
                    </p>

             
                    <form onSubmit={onSubmit} className="mt-3 flex gap-2 w-full max-w-md justify-center">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="flex-1 px-3 py-2 rounded-md bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                        />
                        <button
                            className="px-4 py-2 rounded-md bg-[#D4AF37] text-[#3B2F2F] font-extrabold text-sm hover:brightness-95"
                            type="submit"
                        >
                            OK
                        </button>
                    </form>

                    {msg && <p className="mt-2 text-xs">{msg}</p>}

    
                    <div className="mt-3 p-2 rounded-md bg-[#FFCB9A]/60 border border-black/10 w-full max-w-md">
                        <p className="text-xs font-semibold">
                            Dica do sistema: cadastre categorias como “Esfihas”, “Kibes”, “Shawarma” e
                            destaque opções saudáveis no cardápio.
                        </p>
                    </div>
                </div>
            </div>

        
            <div className="bg-[#F3E9DC] border-t border-black/5 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-[#3B2F2F]/70">
                    © {new Date().getFullYear()} Alibabah Delivery • Plataforma de Culinária Árabe
                </div>
            </div>
        </footer>
    );
}
