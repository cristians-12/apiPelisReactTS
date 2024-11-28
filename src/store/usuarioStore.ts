import { create } from 'zustand'
import { Pelis } from '../components/ContenedorPelis';

type Usuario = {
    nombre: string;
    setNombre: (valor: string) => void
    favoritos: Pelis[];
    setFavoritos: (valor: Pelis) => void
}

const useUsuarioStore = create<Usuario>()((set) => ({
    favoritos: [],
    nombre: 'Ivan',
    setNombre: (valor) => set(() => ({ nombre: valor })),
    setFavoritos: (valor) => set((state) => ({ favoritos: [...state.favoritos, valor] }))
}))

export default useUsuarioStore

