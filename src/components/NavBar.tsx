import useUsuarioStore from "../store/usuarioStore"


function NavBar() {

    const { nombre } = useUsuarioStore()

    return (
        <>
            <nav>
                <div>
                    <img alt="" />
                </div>
                <h1>
                    El nombre es: {nombre}
                </h1>
            </nav>
        </>
    )
}

export default NavBar