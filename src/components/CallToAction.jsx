function CallToAction() {
    return (
        <div className="bg-black">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-white font-days uppercase text-3xl mt-5">panda app</h1>
                <div className="bg-white rounded-lg py-2 px-6 mb-6 w-80 mt-4">
                    <p className="uppercase font-bold text-xl text-center">Download</p>
                </div>
                <div className="flex gap-4 items-center mb-8">
                    <div className="flex items-center space-x-2">
                        <img src="/images/playstore.png" alt="" />
                        <p className="text-white text-sm">Download on the <br/><span>Play Store</span></p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/images/A.png" alt="" />
                        <p className="text-white text-sm">Download on the <br/><span>App Store</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
