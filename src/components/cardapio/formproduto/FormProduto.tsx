function FormProduto() {
    return (
        <div className="flex flex-col items-center py-8 px-4 bg-[#FAFAF8]">
            <h1 className="text-3xl font-bold text-[#7A1E2D] mb-6">Cadastrar Iguaria</h1>

            <form className="flex flex-col w-full max-w-lg gap-4 bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#D4AF37]">
                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F]">Nome</label>
                    <input type="text" className="border-2 border-[#F3E9DC] rounded p-2 focus:border-[#D4AF37] outline-none" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-[#3B2F2F]">Preço</label>
                        <input type="number" className="border-2 border-[#F3E9DC] rounded p-2 focus:border-[#D4AF37] outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-[#3B2F2F]">Categoria</label>
                        <select className="border-2 border-[#F3E9DC] rounded p-2 bg-white focus:border-[#D4AF37] outline-none">
                            <option>Selecione...</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F]">Link da Foto</label>
                    <input type="text" className="border-2 border-[#F3E9DC] rounded p-2 focus:border-[#D4AF37] outline-none" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F]">Descrição</label>
                    <textarea rows={3} className="border-2 border-[#F3E9DC] rounded p-2 focus:border-[#D4AF37] outline-none"></textarea>
                </div>

                <button type="submit" className="mt-4 py-3 bg-[#7A1E2D] text-white font-bold rounded-lg hover:bg-[#3B2F2F] transition-all">
                    Confirmar Cadastro
                </button>
            </form>
        </div>
    );
}

export default FormProduto;