import { Link } from "react-router-dom"

function Navbar() {
    // const navLinks = [
    //     {link: 'Home'},
    //     {link: 'Products'},
    //     {link: 'About us'},
    // ]

    return (
        <nav className="hidden p-8 text-white  lg:block lg:bg-black">
            <div className="flex items-center justify-between">
                <div>
                   <h1 className="text-xl font-bold uppercase font-days">panda</h1> 
                </div>
                <ul className="flex ml-8 space-x-10 text-sm uppercase">
                    <Link to="/">
                        Home
                        <div className="border-b-2"></div>
                    </Link>
                   <li className="flex items-center space-x-2"><a href="">Products</a><span><img className="w-2" src="/images/downarrow.png" alt="" /></span></li>
                   <li><a href="">About us</a></li>
                </ul>
                <div>
                    <input type="search" className="px-4 py-1 text-black rounded-lg w-72" placeholder="Search"/>
                </div>
                <div className="flex space-x-4">
                    <div className="flex items-center mr-4 space-x-4">
                        <img src="./images/navlove.png" alt="" className="h-[22px] cursor-pointer" />
                        <Link to="/cartpage">
                            <img src="./images/cart.png" alt="" className="cursor-pointer" />
                        </Link>
                       
                    </div>
                    <div className="border-r-2"></div>
                    <button className="px-3 py-1 text-sm text-black bg-white rounded-full">Login in</button>
                </div>
            </div>  
        </nav>
    )
}

export default Navbar
