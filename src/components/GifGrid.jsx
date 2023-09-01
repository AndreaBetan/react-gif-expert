import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs.js'
import { GifItem } from './GifItem.jsx'
// import { getGifs,  } from '../helpers/getGifs.js'


export const GifGrid = ({ category }) => {
    
    // // FORMA 1 DE HACERLO: 
    //     // Es buena practica definir las fxs fuera del componente y enviarlas (en este caso de define en getGifs.js)
    // const [images, setimages] = useState([])

    // const getImages = async () => {
    //     // getGifs es una promesa y cuando cambian las imagenes retorna la new img
    //     const newImages = await getGifs(category);
    //     setimages(newImages);
    // }

    // Dispara efectos secundarios(propcesos que se quieren ejecutar cuando algo sucede)
    // useEffect(() => {
    //     getImages()
    // }, [])  /* si dejo las [] vacias, el hook solo se dispara la primera vez que se crea el componente */

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h1>{category}</h1>

            {   
                isLoading && <i className="bi bi-arrow-clockwise"></i>
                // El && es un and logico, que solo permite que se ejecute el codigo si la condicion es true, se hace para no need el null o false
            }

            <div className='card-grid'>
            {
                images.map( (image) => (
                    <GifItem 
                        key={image.id}
                        // ... Me permite acceder  a todas las propiedades que tiene image por medio de GifItem
                        {...image}
                    />
                ))
            }
            </div>
            
        </>
    )
}

{/* Asi se haria con un map tradicional:
    images.map((img) => (
        <li key={img.id}> {img.title} </li>
Al desestructurar img puedo simplificar el anterior codigo asi: images.map( ({id, title})*/}