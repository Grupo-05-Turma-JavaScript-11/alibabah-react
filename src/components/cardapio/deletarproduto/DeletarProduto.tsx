function DeletarProduto() {
    return (
        <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-2xl border-b-8 border-red-600 text-center">
            <h1 className="text-2xl font-bold text-[#3B2F2F] mb-4">Deseja excluir este item?</h1>
            <p className="text-gray-500 mb-8">Esta ação não poderá ser desfeita e o prato sairá do cardápio da Alibabah.</p>
            
            <div className="flex gap-4">
                <button className="flex-1 py-2 bg-gray-100 font-bold rounded hover:bg-gray-200">Cancelar</button>
                <button className="flex-1 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700">Excluir</button>
            </div>
        </div>
    );
}

export default DeletarProduto;