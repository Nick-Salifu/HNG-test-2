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

                <div>
                    <img src="/images/heroimage.png" alt="hero image" />
                </div>

                <div className="hidden lg:flex flex-col justify-end mb-6 gap-1">
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                    <img src="/images/downarrow.png" alt="" />
                </div>
                
            </div>
            <div className="w-full">
                <p className="text-white font-semibold py-2 bg-[#CF5C36] uppercase text-center font-inter">up to 30% off every item</p>
            </div>    
        </div>
    )
}

export default Hero
