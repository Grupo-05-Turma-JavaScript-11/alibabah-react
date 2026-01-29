import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/api/Api";

function FormCategoria() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
    } as Categoria);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("404")) {
        alert("Categoria nenhuma encontrado");
        console.log(error);
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

    function retornar() {
      navigate("/categorias");
    }

  async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/${id}`, categoria, setCategoria);
        alert("A categoria foi atualizada com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("404")) {
          alert("Categoria nenhuma encontrado.");
        } else {
          alert("Erro ao atualizar a categoria.");
          console.log(error);
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("A categoria foi cadastrado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("404")) {
          alert("Categoria nenhuma encontrado.");
          console.log(error)
        } else {
          alert("Erro ao cadastrar a categoria.");
          console.log(error);
        }
      }
    }

    retornar();
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=2000&auto=format&fit=crop')`,
      }}
    >
      {/* Overlay para escurecer o fundo e dar foco ao form */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-lg mx-4 bg-[#3B2F2F]/95 border-2 border-[#D4AF37] rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* Cabeçalho do Form */}
        <div className="text-center mb-8">
          <h1 className="text-[#D4AF37] text-4xl font-serif font-bold tracking-tight">
            {id !== undefined ? "Editar Categoria" : "Nova Categoria"}
          </h1>
          <div className="w-24 h-1 bg-[#741E2D] mx-auto mt-2 rounded-full"></div>
          <p className="text-[#F3E9DC] mt-4 italic opacity-80">
            Organize as delícias do seu cardápio árabe
          </p>
        </div>

        <form onSubmit={gerarNovoTema} className="space-y-6">
          {/* Campo Nome */}
          <div className="group">
            <label
              htmlFor="nome"
              className="block text-[#D4AF37] font-semibold text-xs uppercase tracking-[0.2em] mb-2 ml-1"
            >
              Nome da Categoria
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={categoria.nome}
              placeholder="Ex: Pratos Quentes, Sobremesas..."
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="w-full bg-[#FAFAF8] text-[#3B2F2F] border-2 border-transparent focus:border-[#741E2D] rounded-xl px-5 py-4 outline-none transition-all duration-300 shadow-inner"
            />
          </div>

          {/* Campo Descrição */}
          <div className="group">
            <label
              htmlFor="descricao"
              className="block text-[#D4AF37] font-semibold text-xs uppercase tracking-[0.2em] mb-2 ml-1"
            >
              Descrição Detalhada
            </label>
            <textarea
              name="descricao"
              id="descricao"
              rows={4}
              value={categoria.descricao}
              placeholder="Conte um pouco sobre estas iguarias..."
              onChange={(e: any) => atualizarEstado(e)}
              className="w-full bg-[#FAFAF8] text-[#3B2F2F] border-2 border-transparent focus:border-[#741E2D] rounded-xl px-5 py-4 outline-none transition-all duration-300 resize-none shadow-inner"
            />
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#FFCB9A] text-[#3B2F2F] font-black py-4 rounded-xl shadow-lg transform active:scale-95 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              {id === undefined ? "Confirmar Cadastro" : "Atualizar Categoria"}
            </button>

            <button
              type="button"
              onClick={retornar}
              className="w-full bg-transparent border border-[#F3E9DC]/30 text-[#F3E9DC] hover:bg-[#741E2D] hover:border-[#741E2D] py-3 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Cancelar e Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
