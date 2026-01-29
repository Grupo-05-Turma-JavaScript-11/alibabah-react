import axios from "axios";

const api = axios.create({
  baseURL: "https://alibabah.onrender.com/"
});

export const buscar = async (url: string, setDados: Function) => {
  try {
      const resposta = await api.get(url);
      
      // Verifica se o conteúdo retornado é realmente um array
      if (Array.isArray(resposta.data)) {
          setDados(resposta.data);
      } else {
          console.error("A API retornou algo que não é um array! Verifique a URL.");
          setDados([]); // Mantém o array vazio para não quebrar o .map()
      }
  } catch (error) {
      console.error("Erro na requisição:", error);
      setDados([]);
      throw error;
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