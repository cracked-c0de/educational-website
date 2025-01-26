

function Content() {
    return(
        <>
            <section className=" min-h-screen h-fit bg-black rounded-xl dark:bg-white text-white dark:text-black z-0">
                <div className="custom-container flex my-0 mx-auto">
                    <div className="flex flex-col w-full max-w-[550px] items-center justify-center">
                        <h1 className="text-2xl md:text-4xl m-2 font-semibold">What is <span className="dark:bg-black dark:text-white px-2 rounded-xl text-nowrap bg-white text-black">TechMentorHub?</span></h1>
                        <p className="m-2">
                            TechMentorHub is a free and comprehensive platform designed to help aspiring IT professionals kickstart their journey in the tech world. We provide high-quality programming resources, curated from platforms like YouTube, to teach Front End, Back End, Full Stack, Mobile Development, QA, and more — all in one place.
                        </p>
                        <p className="m-2">
                            Our mission is to make IT education accessible to everyone, offering essential materials and guidance to transform learners into skilled developers. With a well-planned and structured roadmap, students can follow a clear learning path, step by step, to master their chosen IT field efficiently and effectively.
                        </p>
                        <p className="m-2">
                            As we grow, TechMentorHub aims to build a vibrant community of IT specialists. Future features will include opportunities to earn by selling courses, job vacancy listings, and collaboration with peers. Join us to learn, grow, and follow a roadmap to success in the IT industry — together.
                        </p>
                        <p><i>TechMentorHub Team</i></p>
                    </div>
                    <div className="max-w-[550px] w-full h-fit dark:text-black text-white hidden md:flex my-auto mx-auto cursor-default">
                        <h1 className="md:text-[300px] lg:text-[400px]">&lt;/&gt;</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content