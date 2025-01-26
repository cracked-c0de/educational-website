import { BsInstagram, BsLinkedin, BsTelegram, BsYoutube } from "react-icons/bs"


function Footer() {
    let year = new Date().getFullYear()

    return(
        <footer className="bg-black text-white rounded-t">
            <div className="custom-container">
                <div className="flex justify-between gap-5 md:flex-row items-center flex-col">
                    <h1>&copy; {year} TechMentorHub. All Rights Reserved</h1>
                    <div className="flex flex-row gap-5 text-3xl">
                        <BsInstagram className="cursor-pointer"/>
                        <BsTelegram className="cursor-pointer"/>
                        <BsYoutube className="cursor-pointer"/>
                        <BsLinkedin className="cursor-pointer"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer