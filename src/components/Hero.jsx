function Hero() {
    return (
        <div>  
            <div className="lg:px-20 mb-6 p-6 flex gap-6">
                <div className=" hidden lg:flex flex-col justify-end mb-6 gap-1">
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                </div>

                <div className="relative">
                    <div className="text-white flex flex-col items-center lg:items-start absolute lg:top-44 lg:left-36">
                        <h1 className="text-3xl lg:text-7xl tracking-wider font-days uppercase mb-4">Pandas clothing</h1>
                        <ul className="capitalize font-days text-sm space-y-6">
                            <li className="flex items-center gap-1"><span><img src="/images/whitearrow.png" alt="" /></span>shoes</li>
                            <li className="ml-2">accessories</li>
                            <li className="ml-2">shirts</li>
                        </ul>
                    </div>
                    <img src="/images/heroimage.png" alt="hero image" className="hidden lg:block" />
                    <div className="container mx-auto">
                        <img src="/images/mobilehero.png" alt="" className="lg:hidden md:w-full" />
                    </div>
                </div>

                <div className="hidden lg:flex flex-col justify-end mb-6 gap-1">
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                </div>
                
            </div>
            <div className="w-full -mt-8 lg:m-0">
                <p className="text-white font-semibold py-3 bg-[#CF5C36] uppercase text-center font-inter">up to 30% off every item</p>
            </div>    
        </div>
    )
}

export default Hero
