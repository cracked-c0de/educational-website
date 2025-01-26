

function Header() {
    return(
        <header className="custom-container flex min-h-screen items-center justify-center z-0">
            <div className="text-center translate-y-[-100px] flex items-center justify-center flex-col h-screen min-h-screen">
                <h1 className="text-2xl font-semibold md:text-4xl my-1 text-wrap">The Best Place to <span className="bg-black text-white px-2 rounded-xl text-nowrap dark:bg-white dark:text-black">Learn IT for Free</span></h1>
                <h1 className="text-2xl font-semibold md:text-4xl text-wrap">Start Your <span className="bg-black text-white px-2 rounded-xl dark:bg-white text-nowrap dark:text-black">Journey to Success</span> Today!</h1>
                <p className="text-lg mt-5 max-w-[450px]">Align your learning with your goals and streamline your progress with the tools you need to master IT skills.</p>
                <div className="flex items-center flex-col md:flex-row gap-8 mt-20 md:mt-43 justify-bottom align-bottom">
                    <button className="text-lg md:text-2xl font-semibold dark:bg-white hover:bg-white dark:text-black hover:text-black hover:border-black transition-all delay-100 cursor-pointer bg-black text-white border-2 border-black dark:hover:border-white dark:border-white dark:hover:bg-black dark:hover:text-white px-4 py-2 rounded-xl">Start Learning</button>
                    <button className="text-lg md:text-2xl cursor-pointer bg-white dark:bg-black dark:text-white text-black dark:border-white border-2 border-black py-2 px-4 rounded-xl font-semibold transition-all hover:bg-black hover:text-white hover:border-black dark:hover:border-white dark:hover:bg-white dark:hover:text-black">Not Sure Where to Begin?</button>
                </div>
            </div>
        </header>
    )
}

export default Header