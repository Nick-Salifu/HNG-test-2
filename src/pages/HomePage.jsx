import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import NavMobile from "../components/NavMobile"
import ProductDisplay from "../components/ProductDisplay"

function HomePage() {
    return (
        <div className="lg:bg-black h-screen">
            <Navbar /> 
            <NavMobile />
            <Hero />
            <ProductDisplay />
        </div>
    )
}

export default HomePage
