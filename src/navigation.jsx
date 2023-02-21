import { Flex } from "./styles/globalStyles"
import { SocialLinkContainer,ScrollTopButton,Links,Arrow } from "./styles/navigationStyles"
import { AiFillYoutube } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa'

const Navigation = () => {
    const scrollTopHandler=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    return <>
        <SocialLinkContainer>
            <Flex column>
                <Links href="https://wa.me/+918318520053"><FaWhatsappSquare /></Links>
                <Links href="https://www.youtube.com/channel/UCPIBwAH6WY0zbprHooMjx8g"><AiFillYoutube /></Links>
                <Links href="https://www.instagram.com/_itax_easy/"><FiInstagram /></Links>
                <Links href="https://www.facebook.com/sonaliitax"><FaFacebookF /></Links>
            </Flex>
        </SocialLinkContainer>
        <ScrollTopButton onClick={scrollTopHandler}> 
            <Arrow/>
        </ScrollTopButton>
    </>
}
export default Navigation