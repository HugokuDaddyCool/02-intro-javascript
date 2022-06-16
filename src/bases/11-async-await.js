import { giphyApiKey } from './00-props';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}`);

// peticion
//     .then((resp) => resp.json())
//     .then(({data}) => {
//          const {url} = data.images.original;
//          const img = document.createElement('img');
//          img.src = url;
//          document.body.append(img);
//     })
//     .catch(console.warn);

const getImagen = async() => {

    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);    
    }
};

getImagen();