import { PiRocketBold } from "react-icons/pi"
import { useState } from "react";
import { useEffect } from "react";


function GoUp() {
    const [showButton, setShowButton] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos < prevScrollPos && currentScrollPos > 200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        setPrevScrollPos(currentScrollPos);
    };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div onClick={scrollToTop} className={`fixed bottom-5 right-0 md:right-5 text-[60px] text-[#ccc] dark:text-[#333] dark:hover:text-[#ccc] hover:text-[#333] cursor-pointer z-50 transition-all duration-300 ${showButton ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>
                <PiRocketBold className="transition-transform transform hover:translate-y-2" />
            </div>
        </>
    )}

export default GoUp