
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListaProdutos from './components/cardapio/listaprodutos/ListaProdutos'
import ListaCategoria from './components/categoria/listarCategoria/ListarCategoria'
import FormCategoria from './components/categoria/formCategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
