import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { Pencil } from "lucide-react";
import DeletarCategoria from "../deletarCategoria/DeletarCategoria";

interface CardCategoriaProps {
  categoria: Categoria;
  aoDeletar: (id: string) => void; // Define o tipo da função para o TS
}

function CardCategia({ categoria, aoDeletar }: CardCategoriaProps) { // Desestrutura aqui!
  return (
    <div className="bg-[#741E2D] border border-[#D4AF37]/30 rounded-xl p-4 shadow-md">
      <header className="text-[#D4AF37] font-bold uppercase text-sm mb-2">
        {categoria.nome}
      </header>
      <p className="text-[#F3E9DC] text-xs italic mb-4 opacity-80">{categoria.descricao}</p>
      
      <div className="flex gap-2">
        <Link to={`/editarCategoria/${categoria.id}`} className="flex-1 bg-[#FAFAF8] text-center py-2 rounded-lg font-bold text-[10px] uppercase text-[#3B2F2F]">
          <Pencil size={12} className="inline mr-1"/> Editar
        </Link>
        <div className="flex-1">
          <DeletarCategoria id={categoria.id.toString()} aoDeletar={aoDeletar} />
        </div>
      </div>
    </div>
  );
}
export default CardCategia;