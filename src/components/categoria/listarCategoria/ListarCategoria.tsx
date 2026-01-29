import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { ListFilter, Plus } from "lucide-react"; // Importei o Plus para o botão de cadastro
import CardCategia from "../cardCategoria/CardCategoria"; 
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/api/Api";
import FormCategoria from "../formCategoria/FormCategoria"; // Importe seu componente de formulário

function ListarCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [mostrarForm, setMostrarForm] = useState(false); // Estado para alternar entre lista e cadastro

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error) {
      console.log("Erro ao buscar categorias");
    }
  }

  function atualizarLista(id: string) {
    setCategorias(categorias.filter((cat) => cat.id !== Number(id)));
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]); // Recarrega se a quantidade mudar

  return (
    <Popup
      trigger={
        <button className="bg-[#D4AF37] text-[#3B2F2F] px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-[#b8952e] transition-colors">
          <ListFilter size={20} /> Ver Categorias
        </button>
      }
      modal
      overlayStyle={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(4px)" }}
      onClose={() => setMostrarForm(false)} // Reseta para a lista ao fechar o popup
    >
      {/* @ts-ignore */}
      {(close: () => void) => (
        <div className="bg-[#3B2F2F] border-2 border-[#D4AF37] rounded-3xl p-6 w-[90vw] max-w-4xl max-h-[80vh] overflow-y-auto relative text-[#F3E9DC]">
          <button onClick={close} className="absolute top-4 right-4 text-2xl hover:text-[#D4AF37]">✕</button>
          
          <div className="flex justify-between items-center mb-8 px-2">
            <h2 className="text-[#D4AF37] text-3xl font-serif font-bold">
              {mostrarForm ? "Nova Categoria" : "Categorias"}
            </h2>
            
            <button 
              onClick={() => setMostrarForm(!mostrarForm)}
              className="bg-[#D4AF37] text-[#3B2F2F] px-3 py-1 rounded-md font-bold flex items-center gap-1 text-sm hover:scale-105 transition-transform"
            >
              {mostrarForm ? "Voltar para Lista" : <><Plus size={18} /> Cadastrar Nova</>}
            </button>
          </div>

          <hr className="border-[#D4AF37]/30 mb-6" />

          {mostrarForm ? (
            <div className="animate-fade-in">
                {/* Aqui você chama o seu componente de formulário */}
                <FormCategoria /> 
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categorias.length === 0 && <p className="text-center col-span-full">Nenhuma categoria encontrada.</p>}
              {categorias.map((cat) => (
                <CardCategia 
                  key={cat.id} 
                  categoria={cat} 
                  aoDeletar={atualizarLista} 
                />
              ))}
            </div>
          )}
        </div>
      )}
    </Popup>
  );
}

export default ListarCategoria;