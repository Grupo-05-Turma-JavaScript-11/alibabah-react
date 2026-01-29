import { useState } from "react";
import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const [expandido, setExpandido] = useState(false);

  // Formatador de moeda para manter o padrão visual
  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(produto.preco);

  if (!expandido) {
    return (
      <div className="group relative w-full h-[450px] bg-[#3B2F2F] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/20 transition-all hover:border-[#D4AF37]">
        <img
          src={produto.foto} // Dinâmico da API
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          alt={produto.nome}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#3B2F2F] via-[#3B2F2F]/20 to-transparent p-8 flex flex-col justify-end">
          <h3 className="text-[#F3E9DC] font-black text-3xl mb-4 tracking-tighter uppercase">
            {produto.nome} {/* Dinâmico da API */}
          </h3>
          <button
            onClick={() => setExpandido(true)}
            className="efeito-shine w-max px-10 py-3 bg-[#D4AF37] text-[#3B2F2F] font-bold rounded-full hover:bg-[#FFCB9A] transition-colors uppercase text-sm tracking-widest shadow-lg"
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-full w-full min-h-[500px] flex flex-col lg:flex-row bg-[#FAFAF8] rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.4)] border-4 border-[#D4AF37] overflow-hidden animate-in fade-in zoom-in duration-500">
      
      {/* Lado Esquerdo: Imagem e Botões Administrativos */}
      <div className="lg:w-1/2 h-80 lg:h-auto relative">
        <img
          src={produto.foto}
          className="w-full h-full object-cover"
          alt={produto.nome}
        />
        
        <div className="absolute top-6 left-6 flex gap-3">
          <Link
            to={`/editarProduto/${produto.id}`} // Rota conectada ao ID
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform uppercase text-xs"
          >
            EDITAR
          </Link>

          <Link
            to={`/deletarProduto/${produto.id}`} // Rota conectada ao ID
            className="px-6 py-2 bg-red-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform uppercase text-xs"
          >
            EXCLUIR
          </Link>
        </div>
      </div>

      {/* Lado Direito: Conteúdo Detalhado (Mantendo sua estrutura original) */}
      <div className="lg:w-1/2 p-12 flex flex-col justify-between bg-white">
        <div className="relative">
          <button
            onClick={() => setExpandido(false)}
            className="absolute -top-4 -right-4 text-5xl text-[#7A1E2D] font-light hover:rotate-90 transition-transform"
          >
            &times;
          </button>

          <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs">
            Sugestão do Chef
          </span>
          
          <h2 className="text-5xl font-black text-[#7A1E2D] my-4 leading-none uppercase">
            {produto.nome}
          </h2>
          
          <p className="text-[#3B2F2F] text-xl leading-relaxed italic border-l-4 border-[#D4AF37] pl-6 my-8">
            {produto.descricao}
          </p>

          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
            Categoria: {produto.categoria?.nome || "Geral"}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 border-t-2 border-[#F3E9DC] pt-8">
          <div className="text-4xl font-black text-[#3B2F2F]">
            {valorFormatado} {/* Preço formatado com R$ */}
          </div>
          <button className="efeito-shine px-12 py-5 bg-gradient-to-r from-[#D4AF37] via-[#FFCB9A] to-[#D4AF37] text-[#3B2F2F] font-black rounded-2xl shadow-xl hover:brightness-110 transition-all uppercase tracking-widest text-lg">
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>

      {/* Bloco de Estilo do Brilho (Efeito Raio) */}
      <style>{`
        @keyframes shine { to { left: 125%; } }
        .efeito-shine { position: relative; overflow: hidden; }
        .efeito-shine::after {
          content: ""; position: absolute; top: -50%; left: -60%;
          width: 20%; height: 200%; background: rgba(255, 255, 255, .4);
          transform: rotate(30deg);
        }
        .efeito-shine:hover::after { animation: shine .75s forwards; }
      `}</style>
    </div>
  );
}

export default CardProduto;