import { useEffect, useState } from "react";
import CardProduto from "../cardcardapio/CardProduto";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/api/Api";
import { SyncLoader } from "react-spinners";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  async function buscarProdutos() {
    try {
      setIsLoading(true);
      // Verifique se o resultado precisa ser acessado via .data ou algo similar
      await buscar("/cardapio", (res: any) => {
          // Se a resposta for um objeto com uma lista dentro, use: res.data
          // Se for a lista direta, use: res
          setProdutos(Array.isArray(res) ? res : res.data || []);
      });
    } catch (error: any) {
      setProdutos([]); // Garante que continue sendo um array em caso de erro
      console.error("Erro na busca:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
        {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}

      <div className="bg-gradient-to-b from-[#7A1E2D] via-[#3B2F2F] to-[#1A1A1A] min-h-screen py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Título Monumental */}
          <div className="text-center mb-24">
            <h1 className="text-[8rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#7A1E2D] opacity-20 absolute left-0 right-0 select-none">
              ALIBABAH
            </h1>
            <h2 className="text-6xl font-black text-[#F3E9DC] relative pt-12">
              Nosso Cardápio
            </h2>
            <div className="w-24 h-2 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Filtros Estilizados */}
          <div className="flex flex-col md:flex-row gap-6 mb-20">
            <button className="px-10 py-4 bg-white/5 backdrop-blur-md border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-2xl hover:bg-[#D4AF37] hover:text-[#3B2F2F] transition-all">
              FILTRAR CATEGORIA
            </button>
            <input
              type="text"
              placeholder="Pesquisar..."
              className="flex-1 bg-white/10 border-2 border-[#D4AF37]/30 rounded-2xl px-8 text-[#F3E9DC] placeholder:text-[#F3E9DC]/50 focus:border-[#D4AF37] outline-none transition-all"
            />
            <button className="efeito-shine px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFCB9A] to-[#D4AF37] text-[#3B2F2F] font-black rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95">
              NOVO PRODUTO
            </button>
          </div>

          {/* Grade de Cards Robustos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>

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
