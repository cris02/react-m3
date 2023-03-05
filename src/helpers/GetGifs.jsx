export const getGifs = async (category) => {
    
    const url =  `http://api.giphy.com/v1/gifs/search?api_key=7at9wKY9hBHlnYiUqQQr5lAeqq8XxODi&limit=10&q=${category}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    //arrglo con la data
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //retorna un arreglo
    return gifs;
}