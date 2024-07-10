function Footer() {
    return (
        <div className="p-5 mt-16 bg-black lg:p-0 lg:p-10">
            <div className="block mb-6 lg:hidden">
                <p className="text-sm font-semibold text-gray-300 uppercase font-days">pandas</p>
            </div>
            <div className="flex flex-wrap justify-between w-full gap-x-2 gap-y-4">
                <div className="hidden lg:block">
                    <p className="text-sm font-semibold text-gray-300 uppercase font-days">pandas</p>
                </div>

                <ul className="space-y-2 text-sm text-gray-300 capitalize">
                    <li>Company</li>
                    <li>Info</li>
                    <li>event</li>
                    <li>blog post</li>
                    <li>news</li>
                </ul>

                <ul className="space-y-2 text-sm text-gray-300 capitalize">
                    <li>about us</li>
                    <li>features</li>
                    <li>plugins</li>
                </ul>

                <ul className="space-y-2 text-sm text-gray-300 capitalize">
                    <li>help & support</li>
                    <li>designers</li>
                    <li>developers</li>
                    <li>mentors</li>
                </ul>

                <ul className="space-y-2 text-sm text-gray-300 capitalize">
                    <li>customer care</li>
                    <li>slack</li>
                    <li>discord</li>
                </ul>

                <div className="flex flex-col items-center space-y-3 lg:mr-10">
                    <p className="text-sm text-white capitalize">social media</p>
                    <div className="flex gap-2">
                        <img  src="/images/facebook.png" alt="" />
                        <img  src="/images/instagram.png" alt="" />
                        <img  src="/images/twitter.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-8 border-b-2 border-gray-700"></div>
            <div className="flex items-center justify-between mt-6">
                <p className="text-[#6A6A6A] text-sm">&copy;2024<span className="uppercase"> pandas.</span> All Right Reserved</p>

                <ul className="text-[#6A6A6A] flex space-x-5 text-sm capitalize">
                    <li>privacy</li>
                    <li>terms</li>
                    <li>help center</li>
                    <li>contact us</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
