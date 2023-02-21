import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../styles/globalStyles";
import Carrer from "../components/Carrer";

export default function CarrerPage(){
    return <>
        <Container margin={'auto'} width={'95%'}>
            <Header />
            <Carrer/>
        </Container>
        <Footer />
    </>
}