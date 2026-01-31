import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, atualizar, cadastrar } from "../../../services/api/Api";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";

function FormProduto() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '' });

    // Inicializa o produto com campos vazios para os inputs não serem "uncontrolled"
    const [produto, setProduto] = useState<Produto>({
        id: 0, nome: '', preco: 0, foto: '', descricao: '', calorias: 0, categoria: null
    } as Produto);

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto);
        } catch (error: any) {
            alert("Erro ao encontrar o Produto.");
            retornar();
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            alert("Erro ao listar as Categorias.");
        }
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    // Sincroniza a categoria escolhida com o objeto produto
    useEffect(() => {
        setProduto((prev) => ({
            ...prev,
            categoria: categoria.id !== 0 ? categoria : null,
        }));
    }, [categoria]);

    // CORREÇÃO: Aceita Input, TextArea e Select
    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setProduto({

            ...produto,

            [e.target.name]: e.target.value,

            categoria: categoria
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!produto.categoria || produto.categoria.id === 0) {
            alert("Selecione uma categoria válida!");
            return;
        }

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);
                alert("Produto atualizado com sucesso!");
                retornar();
            } catch (error: any) {
                alert("Erro ao atualizar o Produto!");
            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto);
                alert("Produto cadastrado com sucesso!");
                retornar();
            } catch (error: any) {
                alert("Erro ao cadastrar o Produto!");
            }
        }
    }

    return (
        <div className="flex flex-col items-center py-8 px-4 bg-[#741E2D] min-h-screen">
            <h1 className="text-3xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">
                {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
            </h1>

            <form onSubmit={gerarNovoProduto} className="flex flex-col w-full max-w-lg gap-4 bg-white p-8 rounded-[2rem] shadow-2xl border-t-8 border-[#D4AF37]">
                
                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F] text-xs uppercase">Nome do Prato</label>
                    <input 
                        name="nome" value={produto.nome} onChange={atualizarEstado}
                        type="text" required placeholder="Ex: Kibe tradicional"
                        className="border-2 border-[#F3E9DC] rounded-xl p-3 focus:border-[#D4AF37] outline-none transition-all"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-[#3B2F2F] text-xs uppercase">Preço (R$)</label>
                        <input 
                            name="preco" value={produto.preco} onChange={atualizarEstado}
                            type="number" step="0.01" required
                            className="border-2 border-[#F3E9DC] rounded-xl p-3 focus:border-[#D4AF37] outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-[#3B2F2F] text-xs uppercase">Categoria</label>
                        <select 
                            name="categoria" 
                            required
                            onChange={(e) => buscar(`/categorias/${e.currentTarget.value}`, setCategoria)}
                            className="border-2 border-[#F3E9DC] rounded-xl p-3 bg-white focus:border-[#D4AF37] outline-none transition-all"
                        >
                            <option value="" disabled>Selecione...</option>
                            {categorias.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.nome}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F] text-xs uppercase">URL da Imagem</label>
                    <input 
                        name="foto" value={produto.foto} onChange={atualizarEstado}
                        type="text" required placeholder="https://link-da-imagem.jpg"
                        className="border-2 border-[#F3E9DC] rounded-xl p-3 focus:border-[#D4AF37] outline-none transition-all"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#3B2F2F] text-xs uppercase">Descrição dos Ingredientes</label>
                    <textarea 
                        name="descricao" value={produto.descricao} onChange={atualizarEstado}
                        rows={4} required placeholder="Descreva os sabores..."
                        className="border-2 border-[#F3E9DC] rounded-xl p-3 focus:border-[#D4AF37] outline-none transition-all"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="mt-4 py-4 bg-[#D4AF37] text-[#7A1E2D] font-black rounded-2xl hover:bg-[#3B2F2F] hover:text-white transition-all duration-300 uppercase tracking-widest shadow-lg"
                >
                    {id !== undefined ? "Confirmar Edição" : "Confirmar Cadastro"}                
                </button>
            </form>
        </div>
    );
}

export default FormProduto;