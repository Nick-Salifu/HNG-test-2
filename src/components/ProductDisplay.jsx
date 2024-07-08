function ProductDisplay() {
    return (
        <div className="my-24 container mx-auto px-10">
            <h1 className="text-2xl font-bold uppercase text-center mb-16">popular products</h1>

            <div className="flex gap-3 items-center">
                <div className="mb-24">
                    <img src="/images/arrowleft.png" alt="" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-start relative mb-20">
                        <img src="/images/s3black.png" alt=""  />
                        <img src="/images/redlove.png" alt="" className=" bg-[#EEE5E9] p-[5px] rounded-full"/>
                    </div>
                    <div className="-ml-14">
                        <p className="text-sm font-semibold">Pandas</p>
                        <p className="text-lg font-bold capitalize leading-5">Printed black <br/> T-Shirt</p>
                        <p className="text-[#CF5C36] font-semibold">N40.00</p>
                        <div className="flex items-center">
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/blackstar.png" alt="" />
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="relative flex items-start">
                        <img src="/images/gown.png" alt="" />
                        <img src="/images/redlove.png" alt="" className=" bg-[#EEE5E9] p-[5px] rounded-full" />
                    </div>
                    <div className="ml-16">
                        <p className="text-sm font-semibold">Pandas</p>
                        <p className="text-lg font-bold capitalize leading-5">Printed black <br/> T-Shirt</p>
                        <p className="text-[#CF5C36] font-semibold">N40.00</p>
                        <div className="flex">
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/blackstar.png" alt="" />
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="relative flex items-start">
                        <img src="/images/hat.png" alt="" />
                        <img src="/images/filledlove.png" alt="" className=" bg-[#EEE5E9] p-[5px] rounded-full" />
                    </div>
                    <div className="ml-14">
                        <p className="text-sm font-semibold">Pandas</p>
                        <p className="text-lg font-bold capitalize leading-5">Printed black <br/> T-Shirt</p>
                        <p className="text-[#CF5C36] font-semibold">N40.00</p>
                        <div className="flex">
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/blackstar.png" alt="" />
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="relative flex items-start">
                        <img src="/images/bra.png" alt="" />
                        <img src="/images/filledlove.png" alt="" className=" bg-[#EEE5E9] p-[5px] rounded-full" />
                    </div>
                    <div className="ml-14">
                        <p className="text-sm font-semibold">Pandas</p>
                        <p className="text-lg font-bold capitalize leading-5">Printed black <br/> T-Shirt</p>
                        <p className="text-[#CF5C36] font-semibold">N40.00</p>
                        <div className="flex">
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/orangestar.png" alt="" />
                            <img src="/images/blackstar.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="mb-24">
                    <img src="/images/arrowright.png" alt="" />
                </div>
                 
            </div>
        
        </div>
    )
}

export default ProductDisplay
