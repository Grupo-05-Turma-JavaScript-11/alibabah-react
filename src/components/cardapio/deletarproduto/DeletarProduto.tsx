import { useEffect, useState } from "react"
import { buscar, deletar } from "../../../services/api/Api"
import type Produto from "../../../models/Produto"
import { useNavigate, useParams } from "react-router-dom"

function DeletarProduto() {

    const navigate = useNavigate()
    const [produto, setProduto] = useState<Produto>({} as Produto)
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            // Ajustado para sua service: buscar(url, setDados)
            await buscar(`/produtos/${id}`, setProduto) 
        } catch (error: any) {
            alert("Erro ao encontrar o produto.")
            retornar()
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        try {
            // Ajustado para sua service: deletar(url)
            await deletar(`/produtos/${id}`) 
            alert("Produto apagado com sucesso!")
        } catch (error: any) {
            alert("Erro ao deletar o produto.")
        }
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-b-8 border-[#7A1E2D] text-center animate-in fade-in zoom-in duration-300">
            <h1 className="text-3xl font-black text-[#7A1E2D] mb-4 uppercase tracking-tighter">Excluir Prato?</h1>
            
            <div className="mb-8 p-6 bg-[#F3E9DC]/30 rounded-2xl border border-[#D4AF37]/20">
                <span className="text-[10px] text-[#D4AF37] uppercase font-black tracking-[0.2em]">Confirmação de Item</span>
                <p className="text-2xl font-bold text-[#3B2F2F] mt-1">{produto.nome || "Carregando..."}</p>
            </div>

            <p className="text-gray-500 mb-10 text-sm leading-relaxed">
                Você está prestes a remover este item permanentemente do cardápio **Alibabah**.
            </p>
            
            <div className="flex gap-4">
                <button 
                    onClick={retornar}
                    className="flex-1 py-4 bg-gray-100 text-[#3B2F2F] font-bold rounded-2xl hover:bg-gray-200 transition-all uppercase text-xs tracking-widest"
                >
                    Cancelar
                </button>
                <button 
                    onClick={deletarProduto}
                    className="flex-1 py-4 bg-[#7A1E2D] text-white font-bold rounded-2xl hover:bg-red-700 shadow-lg hover:shadow-red-200 transition-all uppercase text-xs tracking-widest"
                >
                    Confirmar
                </button>
            </div>
        </div>
    );
}

export default DeletarProduto;