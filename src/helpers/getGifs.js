
export const getGifs = async ( category ) => {
        
    //La url esta compuesta por `https:// +  concatenacion de la {categoy} &limit=20 (establece el limite de 20 imagenes porque la data es muy grande)` 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1GlOY5sJ61WWFD0GJ5yapj8ncVLacVpx&q=${ category }&limit=10`;

    const response = await fetch (url);
    // Como la informacion de la url se encuentra en data hay que desestructurar la data
    const { data } = await response.json();
    console.log(data);
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_large.url
    }));
    
    console.log(gifs);

    return gifs;
}