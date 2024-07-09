function StyleGallery() {
    return (
        <div className="my-24 container mx-auto">
            <h1 className="text-2xl font-bold uppercase text-center mb-16">Styled Gallery</h1>

            <div className="flex flex-col items-center">
                <div className="flex  gap-4 mb-6">
                    <img src="/images/firstgirl.png" alt="" />
                    <img src="/images/secondgirl.png" alt="" />
                    <img src="/images/onlyguy.png" alt="" />
                    <img src="/images/lastgirl.png" alt="" />
                </div>
                <div className="mb-5">
                    <button className="font-semibold bg-white uppercase border-2 border-black px-6 p-1 rounded-lg">view</button>
                </div>
            </div>
        </div>
    )
}

export default StyleGallery
