import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import NavMobile from "../components/NavMobile"
import NewArrivals from "../components/NewArrivals"
import Pandas from "../components/Pandas"
import ProductDisplay from "../components/ProductDisplay"
import StyleGallery from "../components/StyleGallery"

function HomePage() {
    return (
        <div className="lg:bg-black h-screen">
            <Navbar /> 
            <NavMobile />
            <Hero />
            <ProductDisplay />
            <NewArrivals />
            <StyleGallery />
            <CallToAction />
            <Pandas />
            <Footer />
        </div>
    )
}

export default HomePage
