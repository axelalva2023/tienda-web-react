import React from 'react'
import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider({children}) {

  const [carrito, setCarrito] = useState([]);

  function agregarCarrito(producto) {
    alert(`${producto.nombre} fue agregado al carrito`)
    const existe = carrito.find(el => el.id === producto.id)

    if (existe) {
      const carritoActualizado = carrito.map(el => 
        el.id == producto.id ? {...el, cantidad: el.cantidad + 1} : el
      )
      setCarrito(carritoActualizado)
    }else{
      setCarrito([...carrito, producto])
    }
  }

  function renderContador() {
    let resultado =  carrito.reduce((acc,el) => acc + parseInt(el.cantidad), 0)
    return resultado
  }

  function renderTotal() {
    let resultado = carrito.reduce((acc, el) => acc + parseInt(el.precio) * parseInt(el.cantidad), 0)
    return resultado
  }

  function vaciarCarrito(params) {
    setCarrito([])
    
  }

  function eliminarItem(id) {
    const carritoActualizado = carrito.filter(el => el.id !== id)
  setCarrito(carritoActualizado)
  }

  function sumarCantidad(id) {
     const carritoActualizado = carrito.map(el =>
    el.id === id
      ? { ...el, cantidad: el.cantidad + 1 }
      : el
  )
  setCarrito(carritoActualizado)
  
  }

  function restarCantidad(id) {
      const carritoActualizado = carrito
    .map(el =>
      el.id === id
        ? { ...el, cantidad: el.cantidad - 1 }
        : el
    )
    .filter(el => el.cantidad > 0)

  setCarrito(carritoActualizado)
  }


  return (
    <CartContext.Provider value={{carrito, agregarCarrito, vaciarCarrito, renderContador, renderTotal, eliminarItem, sumarCantidad, restarCantidad}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider