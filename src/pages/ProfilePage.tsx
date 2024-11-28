import useUsuarioStore from "../store/usuarioStore";

function ProfilePage() {

    const { favoritos } = useUsuarioStore();
    return (
        <>
            <h1>Bienvenido</h1>

            <div>
                {
                    favoritos ?
                        (
                            <div>
                                {
                                    favoritos.map(
                                        favorito =>(
                                            <h1>{favorito.title}</h1>
                                        )
                                    )
                                }
                            </div>
                        )
                        :
                        (
                            <h1>No hay favoritos</h1>
                        )
                }
            </div >
        </>
    )
}

export default ProfilePage;