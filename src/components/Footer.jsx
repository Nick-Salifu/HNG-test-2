function Footer() {
    return (
        <div className="bg-black p-10 mt-16">
            <div className="w-full flex justify-between">
                <div>
                    <p className="uppercase text-sm font-days font-semibold text-gray-300">pandas</p>
                </div>

                <ul className="text-gray-300 capitalize space-y-2 text-sm">
                    <li>Company</li>
                    <li>Info</li>
                    <li>event</li>
                    <li>blog post</li>
                    <li>news</li>
                </ul>

                <ul className="text-gray-300 capitalize space-y-2 text-sm">
                    <li>about us</li>
                    <li>features</li>
                    <li>plugins</li>
                </ul>

                <ul className="text-gray-300 capitalize space-y-2 text-sm">
                    <li>help & support</li>
                    <li>designers</li>
                    <li>developers</li>
                    <li>mentors</li>
                </ul>

                <ul className="capitalize space-y-2 text-sm text-gray-300">
                    <li>customer care</li>
                    <li>slack</li>
                    <li>discord</li>
                </ul>

                <div className="space-y-3 mr-10">
                    <p className="text-white capitalize text-sm">social media</p>
                    <div className="flex gap-3">
                        <img src="/images/facebook.png" alt="" />
                        <img src="/images/instagram.png" alt="" />
                        <img src="/images/twitter.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="border-b-2 border-gray-700 mt-8"></div>
            <div className="mt-6 flex items-center justify-between">
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
