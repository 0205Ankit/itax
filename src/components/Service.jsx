import { Flex, Heading } from "../styles/globalStyles"
import ServiceCard from "./ServiceCard"
import {servicesData} from '../helper/servicesData'


export default function Service() {
    return <>
        <Heading
            size={'3rem'}
            center
            color={'#6353f1'}
            padding={'2rem 0 0 0'}
            family={'Lobster, cursive'}
        >
            We Provide
        </Heading>

        <Flex wrap padding={'1rem 0'}>
            {servicesData.map(item=>{return <ServiceCard key={item.id} title={item.title} info={item.info}/>})}
        </Flex>

    </>
}