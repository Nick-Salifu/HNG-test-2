import { Link } from "react-router-dom"

function CartNav() {
    return (

        <nav className="container hidden p-8 mx-auto text-black lg:block">
            <div className="flex items-center justify-between">
                <div>
                <h1 className="text-xl font-bold uppercase font-days">panda</h1> 
                </div>
                <ul className="flex ml-8 space-x-10 text-sm font-semibold uppercase">
                    <Link to="/">
                        Home
                        <div className="border-b-2"></div>
                    </Link>
                <li className="flex items-center space-x-2"><a href="">Products</a><span><img className="w-2" src="/images/blackdownarrow.png" alt="" /></span></li>
                <li><a href="">About us</a></li>
                </ul>
                <div>
                    <input type="search" className="px-4 py-1 text-black bg-[#F5F5F5] rounded-lg w-72" placeholder="Search"/>
                </div>
                <div className="flex space-x-4">
                    <div className="flex items-center mr-4 space-x-4">
                        <img src="./images/blacklove.png" alt="" className="cursor-pointer " />
                        <Link to="/cartpage">
                            <img src="./images/blackcart.png" alt="" className="cursor-pointer" />
                        </Link> 
                    </div>
                    <div className="border-r-2"></div>
                    <button className="px-4 py-1 text-sm text-white bg-black rounded-full">Log in</button>
                </div>
            </div>  
        </nav>
    )
}

export default CartNav
