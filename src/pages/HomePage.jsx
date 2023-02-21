import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Service from "../components/Service"
import { Container } from "../styles/globalStyles";

const HomePage = () => {
    return <>
        <Container margin={'auto'} width={'95%'}>
            <Header />
            <About />
            <Service />
            <Info />
        </Container>
        <Footer />
    </>
}

export default HomePage