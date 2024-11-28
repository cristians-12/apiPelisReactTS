import useUsuarioStore from "../store/usuarioStore"
import { Link } from "react-router"


function NavBar() {

    const { nombre } = useUsuarioStore()

    return (
        <>
            <nav className="flex justify-between items-center">
                <div>
                    <img alt="" />
                </div>
                <h1>
                    El nombre es: {nombre}
                </h1>
                <Link to={'/profile'}>Ir al perfil</Link>
            </nav>
        </>
    )
}

export default NavBar