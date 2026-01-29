import { useEffect, useState, useCallback } from "react";
import Popup from "reactjs-popup";
import { Trash2, AlertTriangle, Loader2, X } from "lucide-react";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/api/Api";

interface DeletarProps {
  id: string;
  aoDeletar: (id: string) => void;
}

function DeletarCategoria({ id, aoDeletar }: DeletarProps) {
  const [categoria, setCategoria] = useState<Categoria | null>(null);
  const [estaDeletando, setEstaDeletando] = useState<boolean>(false);
  const [erro, setErro] = useState<string | null>(null);

  const buscarPorId = useCallback(async (idCategoria: string) => {
    try {
      await buscar(`/categorias/${idCategoria}`, setCategoria);
    } catch (error) {
      setErro("Erro ao carregar dados.");
    }
  }, []);

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id, buscarPorId]);

  async function executarDelecao(close: () => void) {
    setEstaDeletando(true);
    try {
      await deletar(`/categorias/${id}`);
      aoDeletar(id);
      close();
    } catch (error) {
      setErro("Erro ao excluir: verifique se há produtos vinculados.");
    } finally {
      setEstaDeletando(false);
    }
  }

  // Criamos o gatilho separadamente para limpar o JSX principal
  const BotaoGatilho = (
    <button className="w-full flex items-center justify-center gap-2 border border-[#741E2D] text-[#741E2D] py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-[#741E2D] hover:text-white transition-all shadow-sm">
      <Trash2 size={12} /> Excluir
    </button>
  );

  return (
    <Popup
      trigger={BotaoGatilho}
      modal
      overlayStyle={{
        background: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Remova a anotação de tipo de dentro da função e apenas retorne o JSX diretamente */}
      {
        ((close: () => void) => (
          <div className="bg-[#3B2F2F] border border-[#D4AF37]/20 rounded-2xl p-8 w-[350px] relative shadow-2xl">
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 text-[#F3E9DC]/50 hover:text-[#D4AF37]"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#741E2D]/10 p-4 rounded-full mb-4">
                <AlertTriangle size={40} className="text-[#e63946]" />
              </div>

              <h3 className="text-[#F3E9DC] text-xl font-bold mb-2 font-serif">
                Confirmar Exclusão
              </h3>

              <div className="mb-8">
                <p className="text-[#F3E9DC]/70 text-sm">Remover categoria:</p>
                <p className="text-[#D4AF37] font-bold text-lg italic mt-1">
                  {categoria?.nome ? `"${categoria.nome}"` : "Carregando..."}
                </p>
                {erro && (
                  <p className="text-[#e63946] text-[10px] mt-2 font-bold uppercase">
                    {erro}
                  </p>
                )}
              </div>

              <div className="flex gap-3 w-full">
                <button
                  type="button"
                  disabled={estaDeletando}
                  onClick={close}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[#F3E9DC]/20 text-[#F3E9DC] text-xs font-semibold hover:bg-white/5 disabled:opacity-50"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  disabled={estaDeletando || !categoria}
                  onClick={() => executarDelecao(close)}
                  className="flex-[1.5] px-4 py-2.5 rounded-xl bg-[#741E2D] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#912638] transition-all disabled:bg-gray-600 shadow-lg"
                >
                  {estaDeletando ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    "Confirmar Exclusão"
                  )}
                </button>
              </div>
            </div>
          </div>
        )) as any
      }
    </Popup>
  );
}

export default DeletarCategoria;
