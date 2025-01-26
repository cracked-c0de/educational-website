import Footer from "../components/Footer"
import GoUp from "../components/GoUp"
import Content from "../components/home/Content"
import Content2 from "../components/home/Content2"
import Content3 from "../components/home/Content3"
import Content4 from "../components/home/Content4"
import Header from "../components/home/Header"
import Nav from "../components/Nav"


function Home() {
    return(
        <>
            <Nav />
            <GoUp />
            <Header />
            <Content />
            <Content2 />
            <Content3 />
            <Content4 />
            <Footer />
        </>
    )
}

export default Home