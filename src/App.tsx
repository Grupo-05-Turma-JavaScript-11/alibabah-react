
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormProduto from './components/cardapio/formproduto/FormProduto'
import DeletarProduto from './components/cardapio/deletarproduto/DeletarProduto'
import ListaProdutos from './components/cardapio/listaprodutos/ListaProdutos'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/Footer'
import { Home } from 'lucide-react'
import ListarCategoria from './components/categoria/listarCategoria/ListarCategoria'
import FormCategoria from './components/categoria/formCategoria/FormCategoria'
// import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'



function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
						<Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/produtos" element={<ListaProdutos />} />
						<Route path="/cadastrarProduto" element={<FormProduto />} />
						<Route path="/editarProduto/:id" element={<FormProduto />} />
						<Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/produtos/categorias" element={<ListarCategoria />} />
            <Route path="/produtos/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/produtos/editarCategoria/:id" element={<FormCategoria />} />
            {/* <Route path="/produtos/deletarCategoria/:id" element={<DeletarCategoria aoDeletar={() => {}} id={""}} /> */}
					</Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
