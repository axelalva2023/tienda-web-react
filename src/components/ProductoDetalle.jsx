import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

function ProductoDetalle() {

    const {id} = useParams()
    const location = useLocation()
    const productos = location.state




  return (
    <section>
        <h3>Detalles del producto: {id}</h3>
        <p>{productos.descripcion}</p>
    </section>
  )
}

export default ProductoDetalle