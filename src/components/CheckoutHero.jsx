function CheckoutHero() {
    return (
        <div>
            <div className="mt-4 text-center">
                <p className="text-base font-semibold capitalize">Cart <span>&gt;</span> Place order <span>&gt;</span> Pay <span>&gt;</span> Order complete <span>&gt;</span></p>
            </div>

            <div className="container flex flex-col gap-24 py-8 mx-auto lg:flex-row">
                {/* right side */}
                <div>
                    <div className="text-white mb-7">
                        <div className="flex justify-between w-full p-3 bg-black">
                            <div>
                                <p className="text-sm font-semibold">Shipping fee</p>
                                <p className="text-sm font-bold"><span className="uppercase">free shipping standard</span> on <span className="uppercase">pandas products</span></p>
                            </div>
                            <div className="flex">
                                <p>Add</p>
                                <span>&gt;</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#EFC88B] p-2">
                        <div className="flex items-center mx-2 space-x-4">
                            <img src="/images/check.png" alt="" className="w-3 h-3 bg-black" />
                            <p className="text-sm font-bold uppercase">All items (2)</p>
                        </div>      
                    </div>
                    <div className="flex items-center mx-4 mt-5 mb-6 space-x-4">
                        <img src="/images/check.png" alt="" className="w-3 h-3 bg-black" /> 
                        <p className="text-sm font-bold uppercase font-days">pandas</p>
                    </div>

                    <div>
                        <div className="flex gap-24">
                            <div className="flex items-center gap-4 mx-[14px]">
                                <img src="/images/check.png" alt="" className="w-3 h-3 bg-black" />
                                <img src="/images/firstunder.png" alt="" />
                                <div className="flex flex-col">
                                    <h1>Printed 21 blue T-Shirt</h1>
                                    <p className="font-medium"><span className="text-gray-400">Colour:</span> Night/Black</p>
                                    <div className="flex space-x-3">
                                        <p className="text-[#CF5C36] font-medium">N40.00</p>
                                        <p className="font-medium text-black line-through">N40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:space-y-0 md:flex-row md:space-x-3">
                                <div className="flex items-center px-3 space-x-1 border border-black rounded-lg">
                                    <p className="text-sm">Qty</p>
                                    <p>1</p>
                                    <div><img src="/images/blackdownarrow.png" alt="" /></div>
                                </div>
                                <div className="flex space-x-3">
                                    <img src="/images/emptylove.png" alt="" />
                                    <img src="/images/delete.png" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-24">
                            <div className="flex items-center gap-4 mx-[14px] mt-5">
                                <img src="/images/check.png" alt="" className="w-3 h-3 bg-black" />
                                <img src="/images/firstunder.png" alt="" />
                                <div className="flex flex-col">
                                    <h1>Printed 21 blue T-Shirt</h1>
                                    <p className="font-medium"><span className="text-gray-400">Colour:</span> Night/Black</p>
                                    <div className="flex space-x-3">
                                        <p className="text-[#CF5C36] font-medium">N40.00</p>
                                        <p className="font-medium text-black line-through">N40.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:space-y-0 md:space-x-3 md:flex-row">
                                <div className="flex items-center px-3 space-x-1 border border-black rounded-lg">
                                    <p className="text-sm">Qty</p>
                                    <p>1</p>
                                    <p><img src="/images/blackdownarrow.png" alt="" /></p>
                                </div>
                                <div className="flex space-x-3">
                                    <img src="/images/redlove.png" alt="" className="w-4" />
                                    <img src="/images/delete.png" alt="" />
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* left part */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="bg-[#F0F2F5] w-72 sm:w-96 p-5 rounded-lg">
                        <h1 className="mb-6 font-semibold">Order Summary</h1>
                        <div className="mb-6 text-right">
                            <p className="font-bold">N14.00</p>
                            <p className="text-[#F44336] text-sm">saved N2.00</p>
                            <p className="text-sm capitalize">reward 40 panda <span className="uppercase">points</span></p>
                        </div>
                        <div className="p-2 mb-8 font-semibold text-center text-white capitalize bg-black rounded-lg">checkout now (2)</div>
                    </div>

                    <div className="bg-[#F0F2F5] w-60 mt-6 p-6 rounded-lg">
                        <p className="mb-6 text-sm font-semibold capitalize">we accept</p>
                        <div className="flex items-center space-x-6">
                            <img src="/images/mastercard.png" alt="" />
                            <img src="/images/paypal.png" alt="" />
                            <img src="/images/visa.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
    )
}

export default CheckoutHero
