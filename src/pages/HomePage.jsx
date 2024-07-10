import { Outlet } from "react-router-dom"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import NavMobile from "../components/NavMobile"
import  NewArrivals from "../components/NewArrivals"
import Pandas from "../components/Pandas"
import ProductDisplay from "../components/ProductDisplay"
import StyleGallery from "../components/StyleGallery"
import SamplePage from "../components/SamplePage"

function HomePage() {
    return (
        <div >
            {/* <Outlet /> */}
            <Navbar /> 
            <NavMobile />
            <Hero />
            <SamplePage />
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
