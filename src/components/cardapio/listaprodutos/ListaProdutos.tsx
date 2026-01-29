import { useEffect, useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom"; 
import CardProduto from "../cardcardapio/CardProduto";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/api/Api";
import { SyncLoader } from "react-spinners";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // 1. Estado para armazenar o que o usuário digita na pesquisa
  const [busca, setBusca] = useState<string>("");

  useEffect(() => {
    buscarProdutos();
  }, []); 

  async function buscarProdutos() {
    try {
      setIsLoading(true);
      await buscar("/cardapio", (res: any) => {
          const listaTratada = Array.isArray(res) ? res : (res.data || []);
          setProdutos(listaTratada);
      });
    } catch (error: any) {
      console.error("Erro na busca:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // 2. Lógica de Filtragem: 
  // Criamos uma nova lista baseada na original, filtrando pelo nome
  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <div className="bg-gradient-to-b from-[#7A1E2D] via-[#3B2F2F] to-[#1A1A1A] min-h-screen py-20 px-8">
        
        {isLoading && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
            <SyncLoader color="#D4AF37" size={20} />
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          {/* Título Monumental */}
          <div className="text-center mb-24 relative">
            <h1 className="text-[5rem] md:text-[8rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-transparent opacity-10 absolute left-0 right-0 select-none -top-10">
              ALIBABAH
            </h1>
            <h2 className="text-6xl font-black text-[#F3E9DC] relative">
              Nosso Cardápio
            </h2>
            <div className="w-24 h-2 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-20">
            <button className="px-10 py-4 bg-white/5 backdrop-blur-md border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-2xl hover:bg-[#D4AF37] hover:text-[#3B2F2F] transition-all uppercase text-xs tracking-widest">
              Filtrar Categoria
            </button>
            
            {/* 3. Input de Busca Conectado ao Estado */}
            <input
              type="text"
              placeholder="O que vamos saborear hoje?"
              value={busca}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setBusca(e.target.value)}
              className="flex-1 bg-white/10 border-2 border-[#D4AF37]/30 rounded-2xl px-8 text-[#F3E9DC] placeholder:text-[#F3E9DC]/50 focus:border-[#D4AF37] outline-none transition-all"
            />

            <Link to="/cadastrarProduto" className="flex items-center">
              <button className="efeito-shine w-full px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFCB9A] to-[#D4AF37] text-[#3B2F2F] font-black rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 uppercase text-xs tracking-widest">
                Novo Produto
              </button>
            </Link>
          </div>

          {/* 4. Usamos a lista FILTRADA para renderizar os cards */}
          {produtosFiltrados.length === 0 && !isLoading ? (
            <div className="text-center py-20">
              <p className="text-[#F3E9DC] text-xl opacity-50 italic">
                {busca ? `Nenhuma iguaria encontrada para "${busca}"` : "Aguardando pratos..."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {produtosFiltrados.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))}
            </div>
          )}
        </div>

        {/* Estilo do Brilho mantido */}
        <style>{`
            @keyframes shine{to{left:125%}}
            .efeito-shine{position:relative;overflow:hidden}
            .efeito-shine::after{
              content:"";position:absolute;top:-50%;left:-60%;
              width:20%;height:200%;background:rgba(255,255,255,.4);
              transform:rotate(30deg)
            }
            .efeito-shine:hover::after{animation:shine .75s forwards}
        `}</style>
      </div>
    </>
  );
}

export default ListaProdutos;