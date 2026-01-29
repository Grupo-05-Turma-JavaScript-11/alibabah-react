import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const buscar = async ( url: string, setDados: Function) => {
    try {
        const resposta = await api.get(url);
        
        // Verificação de segurança: só atualiza se os dados existirem
        if (resposta.data) {
            setDados(resposta.data);
        }
        
        return resposta.data; // Retornar ajuda em alguns casos de lógica extra
    } catch (error) {
        console.error("Erro na requisição API:", error);
        throw error; // Lança o erro para o catch do ListaProdutos capturar
    }
  };
  
  export const cadastrar = async ( url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  };
  
  export const atualizar = async ( url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
  };
  
  export const deletar = async (url: string) => {
    await api.delete(url);
  };