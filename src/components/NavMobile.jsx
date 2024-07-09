import { Link } from "react-router-dom"

function NavMobile() {
    return (
        <nav className="lg:hidden">
            <div className="flex items-center justify-between p-4 bg-white ">
                <div>
                    <img src="/images/hambuger.png" alt="hambuger" />
                </div>
                <div>
                    <h1 className="text-xl font-bold uppercase font-days">panda</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/images/search.png" alt="search" />
                    <Link to="/cartpage">
                        <img src="/images/blackcart.png" alt="cart" />
                    </Link> 
                </div>
            </div>
        </nav>
    )
}

export default NavMobile
