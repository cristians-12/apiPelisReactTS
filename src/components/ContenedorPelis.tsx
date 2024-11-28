import { useEffect, useState } from "react"
import Componente1 from "./Componente1";

export interface Pelis {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
}

function ContenedorPelis() {

    const [pelis, setPelis] = useState<Pelis[] | null>(null);

    const obtenerPopulares = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer 496bc8e92849109bfdcebc7aca240c99`
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`, options)
            .then(res => res.json())
            .then(res => setPelis(res.results))
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
            <div className="flex flex-wrap">
                {
                    pelis ?
                        (
                            pelis.map(
                                (peli) => (
                                    <div className="p-5">
                                        <h1 className="font-bold">{peli.title}</h1>
                                    </div>
                                )
                            )
                        )
                        :
                        (
                            <h1>No hay pelis.</h1>
                        )
                }
                <Componente1 />
            </div>
        </>
    )
}

export default ContenedorPelis