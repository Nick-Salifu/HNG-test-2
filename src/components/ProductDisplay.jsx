import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'



function ProductDisplay() {
    // const  settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    // }
    
    
    return (
        <div className="container px-10 mx-auto my-24">
            <h1 className="mb-5 text-2xl font-bold text-center uppercase lg:mb-16">popular products</h1>

            <div className="flex items-center gap-3">
                <div className="mb-24">
                    <img src="/images/arrowleft.png" alt="" />
                </div>

                <div className='flex flex-col gap-6'>
                    <div className="relative flex items-start">
                        <img src="/images/s3black.png" alt="" />
                        {/* <img src="/images/redlove.png" alt="" className=" bg-[#EEE5E9] p-[5px] rounded-full" /> */}
                    </div>
                    <div className="ml-16">
                        <p className="text-sm font-semibold">Pandas</p>
                        <p className="text-lg font-bold leading-5 capitalize">Printed black <br/> T-Shirt</p>
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
                        <img src="/images/gown.png" alt="" />
                        {/* <img src="/images/redlove.png" alt="" className=" bg-[#EEE5E9] p-[5px] rounded-full" /> */}
                    </div>
                    <div className="ml-16">
                        <p className="text-sm font-semibold">Pandas</p>
                        <p className="text-lg font-bold leading-5 capitalize">Printed black <br/> T-Shirt</p>
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
                        {/* <img src="/images/filledlove.png" alt="" className=" bg-[#EEE5E9] p-[5px] rounded-full" /> */}
                    </div>
                    <div className="ml-14">
                        <p className="text-sm font-semibold">Pandas</p>
                        <p className="text-lg font-bold leading-5 capitalize">Printed black <br/> T-Shirt</p>
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
                
                 <div className='hidden lg:block'>
                    <div className=" relative flex items-start">
                        <img src="/images/bra.png" alt="" />
                        {/* <img src="/images/filledlove.png" alt="" className=" bg-[#EEE5E9] p-[5px] rounded-full" /> */}
                    </div>
                    <div className="ml-14">
                        <p className="text-sm font-semibold">Pandas</p>
                        <p className="text-lg font-bold leading-5 capitalize">Printed black <br/> T-Shirt</p>
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
