import { Container, Flex, Heading, Paragraph, ZoomOutButton } from "../styles/globalStyles";

export default function Info() {
    return <>
    <Heading
            size={'3rem'}
            center
            color={'#6353f1'}
            padding={'2rem 0 0 0'}
            family={'Lobster, cursive'}
    >
      About Us  
    </Heading>
        <Container width={'95%'} margin={'auto'}>
            <Flex spaceBetween gap={'2rem'} alignCenter>
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
                    <Paragraph
                        weight={500}
                        size={'1.1rem'}
                        lineHeight={'1.7rem'}
                    >
                        Our vision at Itax Easy Private Limited is to empower individuals and businesses with innovative financial solutions, by leveraging technology and data to provide unparalleled access to financial services, including hassle-free tax planning and compliance. We aim to make day-to-day financial management easy and convenient for our customers, through the use of our cutting-edge mobile application. With our team of experienced professionals in the field of finance and technology, we strive to provide valuable insights, knowledge and skills to help customers navigate the market, identify opportunities, and overcome challenges. Our ultimate goal is to build a nation of fearless and tax-abiding citizens and contribute to the growth of India as a strong and fast-growing economy, all while providing a positive and seamless experience for our customers
                    </Paragraph>
                    <ZoomOutButton margin={'1rem 0 0 0'}>EXPLORE MORE</ZoomOutButton>
                </Flex>
                <img src='../../images/hero23.jpeg' alt='heroImage' width={"600px"} height={'450px'} />
            </Flex>
        </Container>
    </>
}