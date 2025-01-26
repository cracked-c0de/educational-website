import { useEffect, useState } from "react"
import { BsFillPersonFill, BsGlobe, BsMoonFill, BsRocketFill, BsSunFill, BsX } from "react-icons/bs"
import { CgFormatJustify } from "react-icons/cg"
import { useLocation } from "react-router-dom"


function Nav() {
    let location = useLocation()
    console.log(location)
    let menu = [{name: "Home", location: "/"}, {name: "Forum"}, {name: "Courses"}, {name: "About Us"}]
    let lang = [
        {key: "En", code: "en-EN"},
        {key: "Ru", code: "ru-RU"},
        {key: "Uz", code: "uz-UZ"}
    ]
    let [mobile, open] = useState(false)
    let [openLang, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!openLang)
    }

    const [toggleTheme, changeTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) return savedTheme
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    })

    console.log(toggleTheme)
    
    const theme = () => {
        changeTheme((prevTheme) => {
            const newTheme = prevTheme === "dark" ? "light" : "dark"
            localStorage.setItem("theme", newTheme)
            return newTheme
        })
    }

    const toggleMobile = () => {
        open(!mobile)
    }

    useEffect(() => {
        toggleTheme == "dark" ? document.body.setAttribute("data-theme", "dark") : document.body.setAttribute("data-theme", "light")
    }, [toggleTheme])
    
    return(
        <>
            <nav className="flex sticky mb-15 md:mb-0 top-0 items-center justify-center text-white bg-black border-b-2 border-b-white z-20">
                <div className="custom-container flex items-center justify-between  ">
                    <div>
                        <h1 className="text-lg font-semibold cursor-pointer flex-col flex">TechMentorHub<span className="text-xs font-medium">Guiding You to Tech Success</span></h1>
                    </div>
                    <div>
                        <ul className="hidden lg:flex gap-5 items-center">
                            {menu.map((nav, index) => <li className="text-lg cursor-pointer group" key={index}>{nav.name}<div className={`bg-white h-[2px] w-0 transition-all duration-400 ${location.pathname == nav.location ? "w-full" : "group-hover:w-full"}`}></div></li>)}
                        </ul>
                    </div>
                    <div className="hidden lg:flex gap-5 items-center">
                        <BsFillPersonFill className="text-3xl cursor-pointer"/>
                        {toggleTheme === "dark" ? <BsSunFill className="text-2xl cursor-pointer" onClick={theme}/> : <BsMoonFill className="text-2xl cursor-pointer" onClick={theme}/>}
                        <BsGlobe className="text-2xl cursor-pointer" onClick={toggle}/>
                    </div>
                    <div className="flex items-center gap-3 lg:hidden">
                        <BsFillPersonFill className="text-3xl cursor-pointer"/>
                        {mobile ? <BsX onClick={toggleMobile} className="text-4xl transition-all delay-100"/> : <CgFormatJustify onClick={toggleMobile} className="text-4xl transition-all delay-100" />}
                    </div>
                </div>
                <div className="flex z-20 lg:hidden">
                    <ul className={`fixed w-1/2 items-center border-l-[1px] bg-black text-white right-0 top-[83.6px] h-screen flex flex-col py-5 transition-all delay-100 ${mobile ? "translate-x-0" : "translate-x-full"}`}>
                        {menu.map((nav, index) => <li className="text-xl p-1" key={index}>{nav.name}<div className={`bg-white h-[2px] w-0 transition-all duration-400 ${location.pathname == nav.location ? "w-full" : "group-hover:w-full"}`}></div></li>)}
                        <div className="flex gap-8 mt-5">
                            <BsGlobe className="text-3xl cursor-pointer" onClick={toggle}/>
                            {toggleTheme === "dark" ? <BsSunFill className="text-3xl cursor-pointer" onClick={theme}/> : <BsMoonFill className="text-3xl cursor-pointer" onClick={theme}/>}
                        </div>
                        <div className={`flex-col z-30 justify-center items-center lg:hidden ${openLang ? "flex" : "hidden"}`}>
                            <ul className="relative right-8 top-3 bg-black border-2 rounded-xl border-white">
                                {lang.map((list, index) => <li className="py-1 px-3 first:rounded-t-lg last:rounded-b-lg" key={index}>{list.key}</li>)}
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="hidden lg:flex flex-col">
                    <ul className={`absolute right-7 bg-white dark:bg-black border-2 border-black dark:border-white top-18 z-10 rounded-xl ${openLang ? "block" : "hidden"}`}>
                        {lang.map((list, index) => <li key={index} className="text-black dark:text-white px-3 group cursor-pointer text-xl first:rounded-t-lg last:rounded-b-lg dark:hover:bg-white dark:hover:text-black transition-all delay-75 hover:bg-black hover:text-white">{list.key}</li>)}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav