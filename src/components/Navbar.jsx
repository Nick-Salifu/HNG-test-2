function Navbar() {
    // const navLinks = [
    //     {link: 'Home'},
    //     {link: 'Products'},
    //     {link: 'About us'},
    // ]

    return (
        <nav className="hidden lg:block text-white container mx-auto p-8">
            <div className="flex items-center justify-between">
                <div>
                   <h1 className="font-bold text-xl uppercase font-days">panda</h1> 
                </div>
                <ul className="flex space-x-10 uppercase text-sm ml-8">
                    <li>
                        <a href="">Home</a>
                        <div className="border-b-2"></div>
                    </li>
                   <li className="flex items-center space-x-2"><a href="">Products</a><span><img className="w-2" src="/images/downarrow.png" alt="" /></span></li>
                   <li><a href="">About us</a></li>
                </ul>
                <div>
                    <input type="search" className="rounded-lg px-4 py-1 w-72 text-black" placeholder="Search"/>
                </div>
                <div className="flex space-x-4">
                    <div className="flex items-center space-x-4 mr-4">
                        <img src="./images/navlove.png" alt="" className="h-[22px] cursor-pointer" />
                        <img src="./images/cart.png" alt="" className="cursor-pointer" />
                    </div>
                    <div className="border-r-2"></div>
                    <button className="bg-white px-3 py-1 text-black rounded-full text-sm">Login in</button>
                </div>
            </div>  
        </nav>
    )
}

export default Navbar
