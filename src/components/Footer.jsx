import { Container, Flex, Paragraph, Span, ZoomOutButton } from "../styles/globalStyles";
import { HoverCard, IconContainer, InputField } from "../styles/FooterStyles";
import { AiFillYoutube } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa'
import { Links } from "../styles/HeaderStyles";
import styled from "styled-components"

const Wrapper = styled.div`
 @media (max-width: 900px) {
    &:nth-child(2) ${Flex} {
   flex-direction: column;
 }
  }
`

export default function Footer() {
    return <>
        <Container
            size={'1.2rem'}
            padding={'9rem 5rem 4rem 5rem'}
            bgcolor={'#0a1535'}
            margin={'10rem 0 0 0'}
            borderBottom={'1px solid #989ce5'}
            position={'relative'}
        >
            <HoverCard>
                <Flex spaceBetween alignCenter>
                    <Flex column gap={'0.3rem'} size={'1.4rem'}>
                        <Paragraph>Ready to get started?</Paragraph>
                        <Paragraph>Talk to us today</Paragraph>
                    </Flex>
                    <ZoomOutButton>GET STARTED</ZoomOutButton>
                </Flex>
            </HoverCard>
            <Wrapper>
                <Flex spaceBetween >
                    <Flex color={'white'} gap={'3rem'} width={'50%'} >
                        <Flex column gap={'1.5rem'} width={'55%'}>
                            <Span family={'Lobster, cursive'}>Itax-Easy</Span>
                            <Paragraph>
                                "Efficiently file your GST and ITR - stay compliant, stay stress-free."
                            </Paragraph>
                        </Flex>
                        <Flex column gap={'1.5rem'}>
                            <Span family={'Lobster, cursive'}>Call Us</Span>
                            <Paragraph
                                size={'1rem'}
                            >
                                +91 9650771730
                            </Paragraph>
                        </Flex>
                    </Flex>
                    <Flex color={'white'} gap={'3rem'} width={'45%'} >
                        <Flex column gap={'1.5rem'}>
                            <Span family={'Lobster, cursive'}>Follow Us</Span>
                            <Flex gap={'1rem'} size={'1.4rem'}>
                                <IconContainer>
                                    <Links to="https://wa.me/+918318520053">
                                        <FaFacebookF />
                                    </Links>
                                </IconContainer>
                                <IconContainer>
                                    <Links to="https://www.instagram.com/_itax_easy/">
                                        <FiInstagram />
                                    </Links>
                                </IconContainer>
                                <IconContainer>
                                    <Links to="https://www.youtube.com/channel/UCPIBwAH6WY0zbprHooMjx8g">
                                        <AiFillYoutube />
                                    </Links>
                                </IconContainer>
                                <IconContainer>
                                    <Links to="https://wa.me/+918318520053">
                                        <FaWhatsappSquare />
                                    </Links>
                                </IconContainer>
                            </Flex>
                        </Flex>
                        <Flex column gap={'1.5rem'}>
                            <Span
                                family={'Lobster, cursive'}
                            >
                                Get in Touch to get more updates
                            </Span>
                            <form>
                                <Flex column gap={'1.5rem'}>
                                    <InputField type="email" placeholder="Email" required></InputField>
                                    <ZoomOutButton type='submit' size={'1.3rem'}>SUBSCRIBE</ZoomOutButton>
                                </Flex>
                            </form>
                        </Flex>
                    </Flex>
                </Flex>
            </Wrapper>
        </Container>
        <Container
            size={'1.2rem'}
            bgcolor={'#0a1535'}
            padding={'2rem 5rem'}
        >
            <Flex
                spaceBetween
                width={'70%'}
            >
                <Paragraph color="white">@2023 Itaxesay. All Rights Reserved.</Paragraph>
                <Flex column gap={'1rem'}>
                    <Links style={{ color: 'white' }}>Privacy Policy</Links>
                    <Links style={{ color: 'white' }}>Terms & Condition</Links>
                </Flex>
            </Flex>
        </Container>
    </>
}