function NewArrivals() {
    return (
        <div className="container mx-auto px-10 my-24">
            <h1 className="text-2xl font-bold uppercase text-center mb-16">new arrivals</h1>

            <div className="w-full bg-[#EFC88B] rounded-xl relative">
                <div className="flex items-center justify-center">
                    <img src="/images/browntop.png" alt="" className="w-80" />
                    <img src="/images/blacktop.png" alt="" className="w-80"/>
                    <img src="/images/purpletop.png" alt="" className="w-72"/>
                </div>

                <div className="w-[60%] rounded-lg bg-[#f1f1f1] opacity-[60%] absolute right-0 left-64 top-[25%]">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <h1 className=" max-w-sm text-2xl text-center capitalize text-white opacity-100 font-days z-50 mt-[80px]">High quality print T-Shirt now available</h1>
                        <button className="px-7 py-1 text-white bg-black mb-[50px] rounded-lg">Shop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals
