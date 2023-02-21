import Header from "../components/Header";
import { Container } from "../styles/globalStyles";
import Journey from '../components/Journey'
import Footer from "../components/Footer";

export default function JourneyPage(){
    return <>
        <Container margin={'auto'} width={'95%'}>
            <Header />
            <Journey/>
        </Container>
        <Footer/>
    </>
}