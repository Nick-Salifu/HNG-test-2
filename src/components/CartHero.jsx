import { Link } from "react-router-dom"

function CartHero() {
    return (
        <div className="mb-8 -mt-4">
            <div className="w-full p-3 text-sm text-center text-white uppercase bg-black font-days">up to 30% off every item</div>

            <div className="container flex mx-auto gap-14">
                {/* right part */}
                <div className="w-2/3">
                    <div className="mb-6"><img src="/images/carthero.png" alt="" /></div>
                    <div className="flex items-center gap-[15px]">
                        <img src="/images/firstunder.png" alt="" />
                        <img src="/images/secondunder.png" alt="" />
                        <img src="/images/thirdunder.png" alt="" />
                        <img src="/images/fourthunder.png" alt="" />
                        <img src="/images/secondunder.png" alt="" />
                        <img src="/images/fifthunder.png" alt="" />
                    </div>
                </div>

                {/* left part */}
                <div className="mt-10">
                    <div className="flex items-center mb-10 gap-14">
                        <div>
                            <p className="text-sm font-semibold capitalize">pandas</p>
                            <p className="text-base font-semibold capitalize">printed 21 blue T-Shirts</p>
                            <div className="flex mt-4">
                                <img src="/images/orangestar.png" alt="" />
                                <img src="/images/orangestar.png" alt="" />
                                <img src="/images/orangestar.png" alt="" />
                                <img src="/images/orangestar.png" alt="" />
                                <img src="/images/orangestar.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <p className="text-[#CF5C36] font-medium">N40.00</p>
                            <p className="font-medium text-black line-through">N40.00</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="font-medium"><span className="text-gray-400">Colour:</span> Night/Black</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400 capitalize">uk size</p>
                            <p className="italic font-medium underline">see guide</p>
                        </div>
                        <div className="flex items-center gap-[18px] mt-2">
                            <div className="bg-[#EEE5E9] px-2 py-1 h-5 w-5 flex justify-center items-center rounded"><p className="text-sm font-semibold">6</p></div>
                            <div className="bg-[#EEE5E9] px-2 py-1 h-5 w-5 flex justify-center items-center rounded"><p className="text-sm font-semibold">8</p></div>
                            <div className="bg-[#EEE5E9] px-2 py-1 h-5 w-5 flex justify-center items-center rounded"><p className="text-sm font-semibold">10</p></div>
                            <div className="bg-[#EEE5E9] px-2 py-1 h-5 w-5 flex justify-center items-center rounded"><p className="text-sm font-semibold">12</p></div>
                            <div className="bg-[#EEE5E9] px-2 py-1 h-5 w-5 flex justify-center items-center rounded"><p className="text-sm font-semibold">14</p></div>
                            <div className="bg-[#EEE5E9] px-2 py-1 h-5 w-5 flex justify-center items-center rounded"><p className="text-sm font-semibold">16</p></div>
                            <div className="bg-[#EEE5E9] px-2 py-1 h-5 w-5 flex justify-center items-center rounded"><p className="text-sm font-semibold">18</p></div>
                            <div className="bg-[#EEE5E9] px-2 py-1 h-5 w-5 flex justify-center items-center rounded"><p className="text-sm font-semibold">20</p></div>
                        </div>

                        <div className="flex items-center gap-2 mt-4">
                            <div className="w-[100%] text-white font-semibold uppercase bg-black text-center py-1 rounded-lg cursor-pointer"><Link to="/checkoutpage">add to cart </Link></div>
        
                            <div className="px-2 py-[7px] bg-black rounded-lg"><img src="/images/filledlove.png" alt="" /></div>
                        </div>

                        <div className="mt-8 space-y-6">
                            <div className="flex items-center justify-between border-b-2 border-gray-400">
                                <p>why we love it</p>
                                <img src="/images/blackdownarrow.png" alt="" />
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-400">
                                <p>why we love it</p>
                                <img src="/images/blackdownarrow.png" alt="" />
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-400">
                                <p>why we love it</p>
                                <img src="/images/blackdownarrow.png" alt="" />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-7">
                            <img src="/images/blackfb.png" alt="" />
                            <img src="/images/blackIG.png" alt="" />
                            <img src="/images/blacktwitter.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartHero
