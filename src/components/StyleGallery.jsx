function StyleGallery() {
    return (
        <div className="container mx-auto my-24">
            <h1 className="mb-6 text-2xl font-bold text-center uppercase lg:mb-16">Styled Gallery</h1>

            <div className="flex flex-col items-center">
                <div className="flex justify-between w-full mb-6 lg:gap-4">
                    <img className="w-[32%] lg:w-full" src="/images/firstgirl.png" alt="" />
                    <img className="w-[32%] lg:w-full" src="/images/secondgirl.png" alt="" />
                    <img className="w-[32%] lg:w-full" src="/images/onlyguy.png" alt="" />
                    <img className="hidden xl:block xl:w-full" src="/images/lastgirl.png" alt="" />
                </div>
                <div className="">
                    <button className="p-1 px-6 font-semibold uppercase bg-white border border-black rounded-lg">view</button>
                </div>
            </div>
        </div>
    )
}

export default StyleGallery
