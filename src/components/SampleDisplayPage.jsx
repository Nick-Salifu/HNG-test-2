function SampleDisplayPage() {
    return (
        <div className="container mx-auto mt-28">
            <div className="grid grid-cols-3 gap-3 xl:gap-10 m-8">
                <div className="rounded-xl shadow-lg bg-[#EEE5E9] relative lg:h-80 p-5">
                    <img src="/images/brownbra.png" alt="" className="absolute -top-16 left-10"/>
                </div>

                <div className="rounded-xl shadow-lg bg-[#EEE5E9] relative lg:h-80 p-5">
                    <img src="/images/brownbra.png" alt="" className="absolute -top-16 left-10" />
                </div>

                <div className="rounded-xl shadow-lg bg-[#EEE5E9] relative lg:h-80 p-5">
                    <img src="/images/brownbra.png" alt="" className="absolute -top-16 left-10" />
                </div>
            </div>
        </div>
    )
}

export default SampleDisplayPage
