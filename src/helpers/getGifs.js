

 
export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=smifbNYZC8EScLan154e5vDJTSMbGw4O&q=${category}&limit=${10}`;

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map(img => (
      
          { id: img.id ,
            url: img.url,
            image: img.images.original.url,
            title: img.title
          }
            ));

    console.log(gifs);

    return gifs;
}

    
