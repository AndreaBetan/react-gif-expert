import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

// Un hook es una funcion
export const useFetchGifs = ( category ) => {

    const [images, setimages] = useState([])
    // Inicio el isloadin en true porque tengo una img cargada
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        // getGifs es una promesa y cuando cambian las imagenes retorna la new img
        const newImages = await getGifs(category);
        setimages(newImages);
        // isLoading pasa a false cuando ya se carga la img
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])  /* si dejo las [] vacias, el hook solo se dispara la primera vez que se crea el componente */
    
    return {
        images: images,
        isLoading : isLoading
    }
}
