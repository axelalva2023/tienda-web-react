import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useState } from 'react'

function Nav() {

  const {renderContador} = useContext(CartContext)

  const [visible, setVisible] = useState(false);

  const funcionVisible = () => setVisible(true);

  const funcionNotVisible = () => setVisible(false)

  return (
    <header>
        <h3>Bogui</h3>
        <h3>({renderContador()})</h3>
        <button className='boton-abrir' onClick={funcionVisible}>Abrir</button>
        <nav className={`nav ${visible ? "visible" : ""}`}>
          <button className='boton-cerrar' onClick={funcionNotVisible}>Cerrar</button>
            <ul className='ul'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/carrito">Ver carrito</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/productos/categoria/comidas">Comidas</Link></li>
                <li><Link to="/productos/categoria/bebidas">Bebidas</Link></li>
                <li><Link to="/productos/categoria/utiles">Util</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav