import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import NavMobile from "../components/NavMobile"

function HomePage() {
    return (
        <div className="bg-black h-screen">
            <Navbar /> 
            <NavMobile />
            <Hero />
        </div>
    )
}

export default HomePage
