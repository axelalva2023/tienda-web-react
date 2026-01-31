import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Carrito() {

    const {carrito, vaciarCarrito, renderTotal, sumarCantidad, restarCantidad, eliminarItem} = useContext(CartContext)

  return (
    <div >
        <div className='contenedor-padre-carrito'>
        {carrito.map(el => <div key={el.id}>
            <img src={el.avatar} alt="foto-producto" />
            <h3>{el.nombre}</h3>
            <p>{el.precio} * {el.cantidad}</p>
            <button onClick={() => sumarCantidad(el.id)}>+</button>
            <button onClick={() => restarCantidad(el.id)}>-</button>
            <button onClick={() => eliminarItem(el.id)}>Eliminar</button>
        </div>)}
        </div>
        <div className='contenedor-padre-total'>
        <h3>Total: {renderTotal()}</h3>
        <div>
        <button>Comprar</button>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/productos"><button>Volver a la tienda</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Carrito