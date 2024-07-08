function NavMobile() {
    return (
        <nav className="lg:hidden">
            <div className=" bg-white p-4 flex items-center justify-between">
                <div>
                    <img src="/images/hambuger.png" alt="hambuger" />
                </div>
                <div>
                    <h1 className="font-bold text-xl uppercase font-inter">panda</h1>
                </div>
                <div className="flex space-x-4 items-center">
                    <img src="/images/search.png" alt="search" />
                    <img src="/images/blackcart.png" alt="cart" />
                </div>
            </div>
        </nav>
    )
}

export default NavMobile
