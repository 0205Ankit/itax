import { Container, Flex, Heading, Paragraph, ZoomOutButton } from "../styles/globalStyles"

const ServiceCard = ({ title, info }) => {
    return <>
        <Container width={'21rem'} hover>
            <Container
                width={"95%"}
                margin={'auto'}
                padding={'0.5rem 0'}
            >
                <Flex column gap={'1rem'}>
                    <img src='../../images/banner.jpeg' alt="bannerImage"></img>
                    <Heading
                        center
                        size={'1.2rem'}
                        weight={500}
                    >
                        {title}
                    </Heading>
                    <Paragraph
                        size={'1.2rem'}
                        lineHeight={'25px'}
                    >
                        {info}
                    </Paragraph>
                    <ZoomOutButton
                        size={'1.1rem'}
                        weight={500}
                    >
                        KNOW MORE
                    </ZoomOutButton>
                </Flex>
            </Container>

        </Container>
    </>
}

export default ServiceCard