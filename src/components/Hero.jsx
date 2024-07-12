function Hero() {
    return (
        <div>  
            <div className="lg:flex lg:gap-6 lg:mb-6 lg:px-20 lg:p-6 lg:bg-black">
                <div className="flex-col justify-end hidden gap-1 mb-6 lg:flex">
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                </div>

                <div className="relative">
                    <div className="absolute flex flex-col items-center text-white lg:items-start top-[30%] w-full mx-auto lg:top-44  lg:mx-20">
                        <h1 className="mb-4 text-3xl tracking-wide uppercase md:tracking-wider lg:text-7xl font-days">Pandas clothing</h1>
                        <ul className="space-y-6 text-sm capitalize font-days">
                            <li className="flex items-center gap-1"><span><img src="/images/whitearrow.png" alt="" /></span>shoes</li>
                            <li className="ml-2">accessories</li>
                            <li className="ml-2">shirts</li>
                        </ul>
                    </div>
                    <img src="/images/heroimage.png" alt="hero image" className="hidden lg:block" />
                    <div className="">
                        <img src="/images/mobilehero.png" alt="" className="w-full lg:hidden" />
                    </div>
                </div>

                <div className="flex-col justify-end hidden gap-1 mb-6 lg:flex">
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                </div>
                
            </div>
            <div className="w-full lg:-mt-8 lg:m-0">
                <p className="text-white font-semibold py-3 bg-[#CF5C36] uppercase text-center font-inter">up to 30% off every item</p>
            </div>    
        </div>
    )
}

export default Hero
