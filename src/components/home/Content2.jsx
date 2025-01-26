

function Content2() {
    let courses = [
        {name: "Front-End", description: "Front-End Development focuses on the user-facing side of websites and applications. It involves creating the layout, design, and interactive elements using technologies like HTML, CSS, and JavaScript. Front-end developers ensure websites are responsive, visually appealing, and functional across different devices and browsers."},
        {name: "Back-End", description: "Back-End Development is responsible for the server-side infrastructure of websites and applications. It includes managing databases, server logic, and APIs, using languages like Python, Java, or Node.js. Back-end developers ensure data is processed and delivered securely to the front-end for a smooth user experience."},
        {name: "Graphic Design", description: "Graphic Design is the craft of creating visual content to communicate messages and ideas. It involves combining elements like typography, color, and images to produce designs for web, print, branding, and marketing materials. Graphic designers use tools like Photoshop and Illustrator to create visually appealing."}
    ]
    return(
        <section>
            <div className="custom-container min-h-screen z-0">
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl font-semibold md:text-4xl my-1 text-center text-wrap">Popular <span className="bg-black text-white px-2 rounded-xl text-nowrap dark:bg-white dark:text-black">Courses</span></h1>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-9 p-4">
                    {courses.map((key, index) => (
                        <div key={index} className="my-7 w-full sm:max-w-4/4 md:max-w-3/4 lg:max-w-2/4">
                            <div  className="dark:bg-black dark:text-white border-2 dark:border-white rounded-xl p-5 overflow-hidden">
                                <h1 className="text-2xl md:text-4xl font-semibold my-4 mx-2">{key.name}</h1>
                                <p className="my-4 mx-2">{key.description}</p>
                                <button className="m-2 text-lg md:text-2xl cursor-pointer hover:text-white hover:bg-black hover:border-black text-black dark:text-white  dark:border-white border-2 border-black py-2 px-4 rounded-xl font-semibold transition-all dark:hover:bg-white dark:hover:text-black dark:hover:border-white">Start Course</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Content2