import ContenedorPelis from "../components/ContenedorPelis";
import NavBar from "../components/NavBar";

function HomePage() {
    let nombre = 'Ivan'
    return (
        <>
            <NavBar />
            <ContenedorPelis />
        </>
    )
}

export default HomePage;