import { Link } from "react-router-dom";
import logo from "../../assets/icon-alibabah.png";
import { GithubLogoIcon } from "@phosphor-icons/react";

export function Footer() {
    return (
        <footer className="mt-4 bg-[#741E2D] text-white">
            {/* Linha de Gradiente Estilizada */}
            <div className="h-2 w-full bg-gradient-to-r from-[#741E2D] via-[#D4AF37] to-[#741E2D]" />
            
            <div className="w-full mx-auto px-6 py-2 space-y-2">

                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    {/* Logo e Nome com Link para Home */}
                    <Link to="/home" className="flex items-center hover:opacity-80 transition-opacity">
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
                    </Link>

                    {/* Botões de Ação Rápida */}
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        <Link
                            to="/cardapio"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-[#3B2F2F] font-extrabold text-sm hover:bg-[#F3E9DC] active:scale-[0.95] transition-all focus:outline-none"
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 font-semibold 
                            text-sm text-white/90 hover:bg-white/20 active:scale-[0.95] transition-all focus:outline-none"
                        >
                            Ver Cardápio
                        </Link>
                    </div>
                </div>

                {/* Badges de Informação */}
                <div className="flex flex-wrap gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-white/30 bg-white/10">        
                        🟢 Aberto Agora
                    </span>

                    <span className="inline-flex items-center rounded-full px-3 py-1 border border-white/30 bg-white/10">
                        Entrega rápida
                    </span>

                    <span className="inline-flex items-center rounded-full px-3 py-1 border border-[#D4AF37]/60 bg-[#D4AF37] text-[#3B2F2F]">
                        Pagamento online
                    </span>
                </div>

                <div className="w-full">
                    <div className="mt-3 flex flex-col md:flex-row items-start gap-6">
                        {/* Contatos e Endereço */}
                        <div className="space-y-1 text-sm flex-1">
                            <p className="flex items-center gap-2">📍 Rua das Especiarias, 1001 • Oriente</p>
                            <p className="flex items-center gap-2">🕒 Ter–Dom • 12h às 22h</p>
                            <p className="flex items-center gap-2">☎ contato@alibabah.com.br</p>

                            <div className="mt-2 border-t border-white/20 pt-2">
                                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                                    Sobre a plataforma
                                </p>
                                <p className="text-xs text-white/70 italic">
                                    Gerenciamento de cardápio digital Alibabah. Todos os direitos reservados.
                                </p>
                            </div>
                        </div>

                        {/* Informações de Entrega */}
                        <div className="w-full md:w-auto flex flex-col gap-2">
                            <div className="text-xs text-center text-white/90 rounded-lg px-4 py-2 border border-white/20 bg-white/5">
                                <p className="font-bold text-[#D4AF37]">Raio de Entrega</p>
                                <p>Até 6km da sede</p>
                            </div>
                            <div className="text-xs text-center text-white/90 rounded-lg px-4 py-2 border border-white/20 bg-white/5">
                                <p className="font-bold text-[#D4AF37]">Tempo Médio</p>
                                <p>35–55 min</p>
                            </div>
                        </div>
                    </div>

                    {/* Rodapé Final com Créditos e Social */}
                    <div className="mt-4 pt-3 border-t border-[#D4AF37]/40">
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase">
                            <span>© 2026 Alibabah</span>
                            
                            <span className="text-white/20">|</span>
                            
                            <Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link>
                            
                            <span className="text-white/20">|</span>

                            <a
                                href="https://github.com/Grupo-05-Turma-JavaScript-11/alibabah-react.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                            >
                                GitHub <GithubLogoIcon size={18} weight="bold" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;