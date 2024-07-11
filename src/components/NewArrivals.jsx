function NewArrivals() {
    return (
        <div className="container mx-auto my-24 lg:px-10">
            <h1 className="mb-16 text-2xl font-bold text-center uppercase">new arrivals</h1>

            <div className="w-full bg-[#EFC88B] lg:rounded-xl relative">
                <div className="flex items-center justify-center">
                    <img src="/images/browntop.png" alt="" className="w-1/3 lg:w-80" />
                    <img src="/images/blacktop.png" alt="" className="w-1/3 lg:w-80"/>
                    <img src="/images/purpletop.png" alt="" className="w-1/3 lg:w-72"/>
                </div>

                <div className="w-[80%] left-[10%] right-[10%] lg:w-[60%] rounded-2xl lg:rounded-lg bg-[#f1f1f1]/60 absolute top-[12%] lg:right-0 lg:left-64 lg:top-[25%]">
                    <div className="flex flex-col items-center justify-center gap-2 lg:gap-8 py-3 lg:py-0">
                        <h1 className=" max-w-sm text-2xl text-center capitalize text-white opacity-100 font-days lg:mt-[80px]">High quality print T-Shirt now available</h1>
                        <button className="px-7 py-1 text-white bg-black lg:mb-[50px] rounded-lg">Shop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals
