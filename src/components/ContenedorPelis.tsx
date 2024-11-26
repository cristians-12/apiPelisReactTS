import { useEffect } from "react"

function ContenedorPelis() {

    const obtenerPopulares = () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', Authorization: `Bearer 496bc8e92849109bfdcebc7aca240c99` }
        };

        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    useEffect(
        () => {
            obtenerPopulares()
        }, []
    )

    return (
        <>
            <h1>Peliculas:</h1>
        </>
    )
}

export default ContenedorPelis