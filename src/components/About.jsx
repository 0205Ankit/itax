import { Container, Flex, Heading, Paragraph, Span, ZoomOutButton } from "../styles/globalStyles";

export default function About() {
    return <>
        <Container width={'95%'} margin={'auto'}>
            <Flex spaceBetween>
                <Flex gap={'1rem'} column padding={'3rem 0 0 0 '}>
                    <Paragraph
                        weight={600}
                        color={'#6353f1'}
                    >
                        HEY EVERYONE, THIS IS OUR COMPANY
                    </Paragraph>
                    <Heading
                        size={'5rem'}
                        color={'#6353f1'}
                        margin={'0'}
                        family={'Rye, cursive'}
                    >
                        iTax Easy
                    </Heading>
                    <Span
                        size={'1.5rem'}
                        color={'#6353f1'}
                        family={'Rye, cursive'}
                    >
                        Private limited
                    </Span>
                    <Paragraph
                        weight={600}
                    >
                        Efficiently file your GST and ITR - stay compliant, stay stress-free
                    </Paragraph>
                    <ZoomOutButton margin={'1rem 0 0 0'}>We are Hiring</ZoomOutButton>
                </Flex>
                <img src='../../images/hero22.jpeg' alt='heroImage' width={"600px"} />
            </Flex>
        </Container>
    </>
}