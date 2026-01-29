import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, atualizar, cadastrar } from "../../../services/api/Api";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";


function FormProduto() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    // Estados para o Produto e para a lista de Categorias
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: "", descricao: "" });
     const [produto, setProduto] = useState<Produto>({
         id: 0, nome: "", preco: 0, foto: "", descricao: "", calorias: 0 , categoria: null});

    // 1. Busca as categorias para preencher o <select>
    async function buscarCategorias() {
        await buscar("/categorias", setCategorias);
    }

    // 2. Se tiver ID na URL, busca o produto para edição
    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);
    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    // 3. Atualiza o estado do produto conforme o usuário digita
    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        });
    }

    // 4. Envia os dados (Salvar ou Atualizar)
    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);
                alert("Produto atualizada com sucesso!");
            } catch (error) {
                alert("Erro ao atualizar.");
            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto);
                alert("Produto cadastrada com sucesso!");
            } catch (error) {
                alert("Erro ao cadastrar.");
                console.log(error);
            }
        }
        navigate("/produtos");
    }

    return (
        <div className="flex flex-col items-center py-8 px-4 bg-[#741E2D] min-h-screen">
            <h1 className="text-3xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">
                {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
            </h1>

            <form onSubmit={gerarNovoProduto} className="flex flex-col w-full max-w-lg gap-4 bg-white p-8 rounded-[2rem] shadow-xl border-t-8 border-[#D4AF37]">
                
                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F] text-sm uppercase">Nome</label>
                    <input 
                        name="nome" value={produto.nome} onChange={atualizarEstado}
                        type="text" required placeholder="Ex: Kibe de Cordeiro"
                        className="border-2 border-[#F3E9DC] rounded-xl p-3 focus:border-[#D4AF37] outline-none transition-all" 
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-[#3B2F2F] text-sm uppercase">Preço</label>
                        <input 
                            name="preco" value={produto.preco} onChange={atualizarEstado}
                            type="number" step="0.01" required
                            className="border-2 border-[#F3E9DC] rounded-xl p-3 focus:border-[#D4AF37] outline-none transition-all" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-[#3B2F2F] text-sm uppercase">Categoria</label>
                        <select 
                            name="categoria" 
                            onChange={(e) => buscar(`/categorias/${e.currentTarget.value}`, setCategoria)}
                            className="border-2 border-[#F3E9DC] rounded-xl p-3 bg-white focus:border-[#D4AF37] outline-none transition-all"
                        >
                            <option value="">Selecione...</option>
                            {categorias.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.nome}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F] text-sm uppercase">Link da Foto</label>
                    <input 
                        name="foto" value={produto.foto} onChange={atualizarEstado}
                        type="text" required placeholder="URL da imagem"
                        className="border-2 border-[#F3E9DC] rounded-xl p-3 focus:border-[#D4AF37] outline-none transition-all" 
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F] text-sm uppercase">Descrição</label>
                    <textarea 
                        name="descricao" value={produto.descricao} onChange={atualizarEstado}
                        rows={3} required placeholder="Breve resumo do que vai neste prato..."
                        className="border-2 border-[#F3E9DC] rounded-xl p-3 focus:border-[#D4AF37] outline-none transition-all"
                    ></textarea>
                </div>

                <button 
                type="submit" 
                    className="efeito-shine mt-4 py-4 bg-[#D4AF37] text-[#7A1E2D] font-black rounded-2xl hover:bg-[#3B2F2F] hover:text-white transition-all duration-300 uppercase tracking-widest shadow-lg"
                >
                    {id !== undefined ? "Confirmar Edição" : "Confirmar Cadastro"}
                </button>
            </form>

            <style>{`
                @keyframes shine { to { left: 125%; } }
                .efeito-shine { position: relative; overflow: hidden; }
                .efeito-shine::after {
                    content: ""; position: absolute; top: -50%; left: -60%;
                    width: 20%; height: 200%; background: rgba(255, 255, 255, .2);
                    transform: rotate(30deg);
                }
                .efeito-shine:hover::after { animation: shine .75s forwards; }
            `}</style>
        </div>
    );
}

export default FormProduto;