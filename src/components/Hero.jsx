import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Hero() {

    const fondos = ["comida.jpg", "comida2.jpg", "comida3.jpg", "comida4.jpg", "comida5.jpg", "comida6.jpg", "comida7.jpg", "comida8.jpg"];

    const texto = "Bienvenidos";

    const i = useRef(0);

    const [fondo, setFondo] = useState(0);
    const [frase, setFrase] = useState("");

    useEffect(() => {
        setFondo(prev => prev + Math.floor(Math.random() * fondos.length))
    }, [])

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (i.current <= texto.length) {
                setFrase(texto.slice(0, i.current))
                i.current++
            } else {
                setFrase("")
                i.current = 0
            }
        }, 200)

        return () => clearInterval(intervalo)
    }, [])


  return (
    <section className='hero' style={{backgroundImage: `url(public/img/${fondos[fondo]})`}}>
        <h1>{frase}</h1>
    </section>
  )
}

export default Hero