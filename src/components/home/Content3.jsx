import ITCom from "../../assets/it-com.jpg"

function Content3() {
    let partners = [
        {name: "IT Community of Uzbekistan", logo: ITCom, link: "https://itcom.uz/"},
        {name: "IT Community of Uzbekistan", logo: ITCom, link: "https://itcom.uz/"},
        {name: "IT Community of Uzbekistan", logo: ITCom, link: "https://itcom.uz/"},
        {name: "IT Community of Uzbekistan", logo: ITCom, link: "https://itcom.uz/"},
        {name: "IT Community of Uzbekistan", logo: ITCom, link: "https://itcom.uz/"},
    ]
    return(
        <section className="min-h-screen bg-black dark:bg-white text-white dark:text-black rounded-xl z-0">
            <div className="custom-container">
                <div className="flex justify-center w-full items-center">
                    <h1 className="text-4xl font-semibold md:text-4xl my-3 text-wrap">Our <span className="dark:bg-black dark:text-white px-2 rounded-xl text-nowrap bg-white text-black">Partners</span></h1>
                </div>
                <div className="flex flex-wrap items-center justify-center my-5 mx-auto w-5/6 gap-15">
                    {partners.map((items, index) => (
                        <div key={index} className="flex flex-col my-4 items-center">
                            <img src={items.logo} alt="Logo" className="rounded-3xl w-[250px] my-2 p-1 dark:border-black"/>
                            <h1 className="text-xl text-center my-2 font-semibold">{items.name}</h1>
                            <a target="_blank" href={items.link}><button className="md:text-xl my-2 font-semibold dark:bg-white hover:bg-white dark:text-black hover:text-black hover:border-black transition-all delay-100 cursor-pointer bg-black text-white border-2 border-white dark:hover:border-white dark:border-black dark:hover:bg-black dark:hover:text-white px-4 py-2 rounded-xl">Visit</button></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Content3