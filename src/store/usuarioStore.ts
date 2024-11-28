import { create } from 'zustand'
import { Pelis } from '../components/ContenedorPelis';

type Usuario = {
    nombre: string;
    setNombre: (valor: string) => void

    // no copiar lo que escribire abajo
    favoritos: Pelis[];
}

const useUsuarioStore = create<Usuario>()((set) => ({
    favoritos: [],
    nombre: 'Ivan',
    setNombre: (valor) => set(() => ({ nombre: valor }))
}))

export default useUsuarioStore

