import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

function Productos() {

    const {agregarCarrito} = useContext(CartContext)
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const funcionFetch = async (url) =>{
        const res = await fetch(url)
        const datos = await res.json()
        setTimeout(() => {
            setProductos(datos);
            setCargando(false);
        }, 3000); 
    }

    useEffect(() => {
        funcionFetch("https://69319edb11a8738467cfc9d7.mockapi.io/api/productos")
    }, [])


    if (cargando) {
        return(
            <div className='contenedor-padre-cargando'>
                <div>
                    <h3>Cargando...</h3>
                    <p>Por favor, espera</p>
                </div>
            </div>
        )
    }

  return (
    <section className='productos'>
        <div className='contenedor-productos'>
        {productos.map(el => <div key={el.id}>
            <img src={el.avatar} alt="foto-producto" />
            <h3>{el.nombre}</h3>
            <p>{el.precio}</p>
            <button onClick={() => agregarCarrito(el)}>Agregar al carrito</button>
            <Link to={`/productos/${el.id}`} state={el}><button>Ver mas detalles</button></Link>
        </div>)}
        </div>
    </section>
  )
}

export default Productos