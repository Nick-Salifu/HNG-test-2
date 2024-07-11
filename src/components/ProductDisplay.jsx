import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'



function ProductDisplay() {
     
    return (
        <div className="container px-10 mx-auto my-24">
            <h1 className="mb-5 text-2xl font-bold text-center uppercase lg:mb-16">popular products</h1>

            <div className="flex items-center gap-3">
                <div className="mb-24">
                    <img src="/images/arrowleft.png" alt="" />
                </div>

                    <div>
                        <img src="/images/s3black.png" alt="" />
                        
                    </div>
                
                    <div>
                        <img src="/images/gown.png" alt="" />
                    
                    </div>
                
                    <div>
                        <img src="/images/hat.png" alt="" />
                       
                    </div>
                
                    <div className='hidden md:block'>
                        <img src="/images/bra.png" alt="" />
                    
                    </div>

                <div className="mb-24">
                    <img src="/images/arrowright.png" alt="" />
                </div>     
            </div>

            <div className='flex items-center gap-6 justify-around'>
                <div>
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
                
                <div>
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
                
                <div>
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
                
                <div className='hidden md:block'>
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
        </div>
    )
}

export default ProductDisplay
