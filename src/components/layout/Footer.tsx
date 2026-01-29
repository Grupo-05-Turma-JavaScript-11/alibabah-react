import { Link } from "react-router-dom";
import logo from "../../assets/icon-alibabah.png";
import { GithubLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="mt-4 bg-[#741E2D] text-white">
            <div className="h-2 w-full bg-gradient-to-r from-[#741E2D] via-[#D4AF37] to-[#741E2D]" />
            <div className="w-full mx-auto px-6 py-2 space-y-2">

                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center">
                        <div className="h-12 w-12 flex items-center justify-center">
                            <img src={logo} alt="Alibabah" className="h-10 w-10 object-contain" />
                        </div>

                        <div className="leading-tight">
                            <p className="text-xl font-extrabold">Alibabah</p>
                            <p
                                className="text-sm font-semibold text-[#D4AF37]"
                                dir="rtl"
                                lang="ar"
                            >
                                المطبخ العربي
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                        <Link
                            to="/cardapio"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#D4AF37] text-[#3B2F2F] font-extrabold text-sm hover:opacity-95 
                            active:scale-[0.99] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                        >
                            <span className="inline-flex">
                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l1 14H5L6 7z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7a3 3 0 016 0" />
                                </svg>
                            </span>
                            Fazer pedido
                        </Link>

                        <Link
                            to="/cardapio"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 font-semibold 
                            text-sm text-white/90 hover:bg-white/15 active:scale-[0.99] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                        >
                            Ver promoções
                        </Link>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 text-sm font-semibold">
                    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-white/30 bg-white/10">                       
                        Aberto/Fechado
                    </span>

                    <span className="inline-flex items-center rounded-full px-3 py-1 border border-white/30 bg-white/10">
                        Entrega rápida
                    </span>

                    <span className="inline-flex items-center rounded-full px-3 py-1 border border-white/30 bg-white/10">
                        Retirada no balcão
                    </span>

                    <span className="inline-flex items-center rounded-full px-3 py-1 border border-[#D4AF37]/60 bg-[#D4AF37] text-[#3B2F2F]">
                        Pagamento online
                    </span>
                </div>

                <div className="w-full">

                    <div className="mt-3 flex items-start gap-6">

                        <div className="space-y-1 text-sm">
                            <p>📍 Rua Exemplo, 123 • Centro</p>
                            <p>🕒 Ter–Dom • 12:00 às 15:00 • 18:00 às 22:00</p>
                            <p>☎ contato@alibabah.com.br • (00) 00000-0000</p>

                            <div className="mt-2 border-t border-white/20 pt-2">
                                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                                    Sobre o software
                                </p>
                                <p className="text-sm text-white/80">
                                    O <span className="font-semibold text-white">Alibabah</span> é um restaurante que utiliza
                                    esta plataforma para gerenciar catálogo e pedidos.
                                </p>
                            </div>
                        </div>

                        <div className="ml-auto flex flex-col gap-1">
                            <p className="text-sm text-center text-white/90 rounded-xl px-3 py-2 border border-white/30 bg-white/15">
                                Área atendida: até 6km
                            </p>
                            <p className="text-sm text-center text-white/90 rounded-xl px-3 py-2 border border-white/30 bg-white/15">
                                Taxa: a partir de R$ 4,90
                            </p>
                            <p className="text-sm text-center text-white/90 rounded-xl px-3 py-2 border border-white/30 bg-white/15">
                                Tempo médio: 35–55 min
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#D4AF37]">
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[#D4AF37] text-sm">
                            <span>© 2026 Alibabah • Culinária Árabe</span>
                            <span className="text-[#D4AF37]/60">•</span>
                            <Link
                                to="/privacidade"
                                className="hover:underline"
                            >
                                Privacidade e LGPD
                            </Link>

                            <span className="text-[#D4AF37]/60">•</span>

                            <Link
                                to="/termos"
                                className="hover:underline"
                            >
                                Termos de Uso
                            </Link>

                            <span className="text-[#D4AF37]/60">•</span>

                            <a
                                href="https://github.com/Grupo-05-Turma-JavaScript-11/alibabah-react.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Acessar o GitHub do projeto Alibabah"
                                title="GitHub do projeto"
                                className="inline-flex items-center gap-2 hover:underline hover:text-[#D4AF37]"
                            >
                                Siga-nos: <GithubLogoIcon size={22} weight="bold" />
                            </a>

                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
}