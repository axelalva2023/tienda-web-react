import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from "./components/Hero"
import Productos from './components/Productos'
import ProductoDetalle from './components/ProductoDetalle'
import ProductoCategoria from './components/ProductoCategoria'
import Nav from './components/Nav'
import Carrito from './components/Carrito'

function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/carrito' element={<Carrito/>}></Route>
      <Route path='/productos' element={<Productos/>}></Route>
      <Route path='/productos/:id' element={<ProductoDetalle/>}></Route>
      <Route path='/productos/categoria/:categoria' element={<ProductoCategoria/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
