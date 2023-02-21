import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";
import { Container } from "../styles/globalStyles";

export default function ServicesPage(){
    return <>
        <Container margin={'auto'} width={'95%'}>
            <Header />
            <Service />
        </Container>
        <Footer />
    </>
}