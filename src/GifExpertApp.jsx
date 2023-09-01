import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Barbie'])

    const onAddCategory = (newCategory) => {
        // Validar si la categoria existe y si es asi no retorna nada
        if (categories.includes(newCategory)) return;
        // Si la categoría no existe, se agrega al arreglo utilizando setCategories.
        return setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* title */}
            <h1> GifExpertApp </h1>

            {/* Input */}
            <AddCategory 
                onNewCategory = {(value) => onAddCategory (value)}
            />

            {/* Listado de Gif: Para cada categoría en el arreglo categories, se crea un elemento de lista, el cual se maneja en el componenete GifGrid */}
            {categories.map((category) => (
                    // Componenente para manejar las categorias
                    < GifGrid 
                        key={category}
                        category={category}
                        // category es una prop que se envia al componente GifGrid
                    />
                )
            )}
            
        </>
    )
}
