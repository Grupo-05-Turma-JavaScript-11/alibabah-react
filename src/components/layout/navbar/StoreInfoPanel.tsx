import { DAY_LABEL, isOpenNow } from "./storeHours";

type Props = {
    open: boolean;
    onClose: () => void;
    logoSrc: string;
    now: Date;
};

export default function StoreInfoPanel({ open, onClose, logoSrc, now }: Props) {
    return (
        <section
            className={[
                "fixed top-0 right-0 z-50 h-screen w-full max-w-md bg-white border-l border-black/10 shadow-xl overflow-y-auto",
                "transition-transform duration-200 ease-out",
                open ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
            role="dialog"
            aria-modal="true"
            aria-label="Informações do restaurante"
        >
            <div className="bg-[#741E2D] text-[#FAFAF8] px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={logoSrc} alt="Alibabah" className="w-12 h-12 object-contain" draggable={false} />
                    <div className="leading-tight">
                        <p className="font-extrabold text-[1.5rem]">Alibabah</p>
                        <p className="text-[1rem] text-[#FAFAF8]/80">Informações da loja</p>
                    </div>
                </div>

                <button
                    type="button"
                    className="w-10 h-10 grid place-items-center rounded-md hover:bg-black/10"
                    onClick={onClose}
                    aria-label="Fechar informações"
                >
                    <span className="text-xl font-extrabold cursor-pointer" aria-hidden>
                        ✕
                    </span>
                </button>
            </div>

            <div className="p-4 space-y-6 text-[#3B2F2F]">
                <div>
                    <p className="font-extrabold text-lg mb-2">Opções de entrega</p>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="border border-black/10 rounded-md p-4 text-center font-semibold">🚚 Delivery</div>
                        <div className="border border-black/10 rounded-md p-4 text-center font-semibold">🏪 Retirada</div>
                    </div>
                </div>

                <div>
                    <p className="font-extrabold text-lg mb-2">Horário de funcionamento</p>

                    {(() => {
                        const openNow = isOpenNow(now);
                        return (
                            <span
                                className={[
                                    "inline-block mb-3 px-3 py-1 rounded-full text-sm font-semibold",
                                    openNow ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
                                ].join(" ")}
                            >
                                {openNow ? "Aberto agora" : "Fechado agora"}
                            </span>
                        );
                    })()}

                    <ul className="text-sm space-y-1">
                        <li>DOM · 12:00 às 15:00 · 18:00 às 22:00</li>
                        <li>SEG · Fechado</li>
                        <li>TER · 12:00 às 15:00 · 18:00 às 22:00</li>
                        <li>QUA · 12:00 às 15:00 · 18:00 às 22:00</li>
                        <li>QUI · 12:00 às 15:00 · 18:00 às 22:00</li>
                        <li>SEX · 12:00 às 15:00 · 18:00 às 22:00</li>
                        <li>SÁB · 12:00 às 15:00 · 18:00 às 22:00</li>
                    </ul>

                    <p className="mt-3 text-xs text-[#3B2F2F]/60">
                        Atualizado automaticamente ({DAY_LABEL[now.getDay()]} ·{" "}
                        {now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })})
                    </p>
                </div>

                <div>
                    <p className="font-extrabold text-lg mb-2">Formas de pagamento</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#F3E9DC] rounded text-sm">Dinheiro ou Pix</span>
                        <span className="px-3 py-1 bg-[#F3E9DC] rounded text-sm">Cartão Débito</span>
                        <span className="px-3 py-1 bg-[#F3E9DC] rounded text-sm">Cartão Crédito</span>
                    </div>
                </div>

                <div className="pt-4 border-t border-black/10 text-sm text-[#3B2F2F]/80">
                    <p>Razão Social: ALIBABAH CULINÁRIA ÁRABE LTDA</p>
                    <p>CNPJ: 00.000.000/0001-00</p>
                </div>
            </div>
        </section>
    );
}
