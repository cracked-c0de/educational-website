import { BsInstagram, BsLinkedin, BsTelegram, BsYoutube } from "react-icons/bs"


function Content4() {
    return(
        <section>
            <div className="custom-container h-full z-0">
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl font-semibold text-center md:text-4xl my-1 text-wrap"><span className="bg-black text-white px-2 rounded-xl text-nowrap dark:bg-white dark:text-black">Follow Us</span> On Social Media</h1>
                </div>
                <div className="flex justify-around my-15 flex-wrap flex-col md:flex-row items-center gap-5 md:gap-0">
                    <div>
                        <BsInstagram className="text-[80px] md:text-[150px] cursor-pointer"/>
                        <p className="text-center my-2">Instagram</p>
                    </div>
                    <div>
                        <BsTelegram className="text-[80px] md:text-[150px] cursor-pointer"/>
                        <p className="text-center my-2">Telegram</p>
                    </div>
                    <div>
                        <BsYoutube className="text-[80px] md:text-[150px] cursor-pointer"/>
                        <p className="text-center my-2">YouTube</p>
                    </div>
                    <div>
                        <BsLinkedin className="text-[80px] md:text-[150px] cursor-pointer"/>
                        <p className="text-center my-2">LinkedIn</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content4