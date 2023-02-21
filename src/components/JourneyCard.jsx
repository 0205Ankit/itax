import { Flex, Heading, Paragraph } from "../styles/globalStyles";
import styled from 'styled-components'

const Year=styled.div`
    position: absolute;
    font-size: 1.8rem;
    font-family: 'Lobster', cursive;
    font-weight: 600;
    letter-spacing: 0.2rem;
    padding: 1rem 2.7rem;
    border-radius: 45%;
    top: -15%;
    left: 10%;
    background-color: #6353f1;
`

export default function JourneyCard({info,year,title}){
     return <>
         <Flex 
         bgcolor='#6353f1' 
         width='350px' 
         column 
         color="white" 
         gap='1rem' 
         padding='3rem 1rem 2rem 1rem'
         position='relative'
         >
             <Year>
                {year}
             </Year>
            <Heading
                 family={'Lobster, cursive'}
                 size='1.5rem'
            >
                {title}
            </Heading>
            <Paragraph size='1.2rem'>
                {info}
            </Paragraph>
       </Flex>
     </>
}