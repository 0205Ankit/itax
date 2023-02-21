import { Container, Flex, Heading } from "../styles/globalStyles";
import JourneyCard from "./JourneyCard";
import { JourneyData } from "../helper/journeyData";
import styled from 'styled-components'

const HoverCard=styled.div`
    margin-bottom:4rem;
    transition: all 0.2s linear;
    &:hover{
        transform:scale(1.1);
        box-shadow: 10px 10px 5px rgba(99, 83, 241, 0.5) ;
    }
`

export default function Journey() {
    return <>
       <Container width={'95%'} margin='auto'>
            <Heading
                size={'3rem'}
                center
                color={'#6353f1'}
                padding={'2rem 0 0 0'}
                family={'Lobster, cursive'}
            >
                Our Journey
            </Heading>
                <Flex wrap spaceBetween padding='4rem 0 '>
                    {JourneyData.map((item) => {
                        return <HoverCard key={item.id}>
                            <JourneyCard
                                year={item.year}
                                info={item.info}
                                title={item.title}
                            />
                        </HoverCard>
                    })}
                </Flex>
       </Container>
    </>
}