import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import { Container } from "../styles/globalStyles";

 export default function AboutUsPage(){
     return <>
         <Container margin={'auto'} width={'95%'}>
             <Header />
             <Info />
         </Container>
         <Footer/>
     </>
 }