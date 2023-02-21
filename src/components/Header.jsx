import Logo from "../assets/Logo"
import AboutIcon from '../assets/AboutIcon'
import CarrerIcon from "../assets/CarrerIcon"
import ServicesIcon from '../assets/ServicesIcon'
import JourneyIcon from '../assets/JourneyIcon'
import ContactIcon from '../assets/ContactIcon'
import { Flex } from "../styles/globalStyles"
import { Links, List, ListItems } from "../styles/HeaderStyles"
import { GiHamburgerMenu } from 'react-icons/gi'
import useWindowDimensions from "../hooks/useWindowDimensionHook"
import { useState } from "react"


const Header = () => {

    const {width}=useWindowDimensions()
    const [showNav,setShowNav]=useState(false)

    const hamburgerClickHandler=()=>{
        setShowNav((prev)=>!prev)
    }

    return <>
        <Flex spaceBetween padding={"1rem 0 0 0"} alignCenter >

            <a href="/"><img src="../../images/logo.png" alt="logoImage" width={'120px'} height={'120px'} /></a>
            {width>900 && <Flex >
                <List>
                    <Links to='/'>
                        <ListItems>
                            <Flex gap={'5px'}><Logo width={'18px'} />Home</Flex>
                        </ListItems>
                    </Links>
                    <Links to="/about">
                        <ListItems>
                            <Flex gap={'5px'}><AboutIcon width={'16px'} />About</Flex>
                        </ListItems>
                    </Links>
                    <Links to="/career">
                        <ListItems>
                            <Flex gap={'5px'}><CarrerIcon width={'18px'} />Career</Flex>
                        </ListItems>
                    </Links>
                    <Links to="/services">
                        <ListItems>
                            <Flex gap={'5px'}><ServicesIcon width={'18px'} />Services</Flex>
                        </ListItems>
                    </Links>
                    <Links to='/journey'>
                        <ListItems>
                            <Flex gap={'5px'}><JourneyIcon width={'18px'} />Journey</Flex>
                        </ListItems>
                    </Links>
                    <Links to="#">
                        <ListItems>
                            <Flex gap={'5px'}><ContactIcon width={'16px'} />Contact</Flex>
                        </ListItems>
                    </Links>
                </List>
            </Flex>}
            {width<=900&&<><GiHamburgerMenu onClick={hamburgerClickHandler}/>
                {showNav && <Flex>
                    <List direction='column'>
                        <Links to='/'>
                            <ListItems>
                                <Flex gap={'5px'}><Logo width={'18px'} />Home</Flex>
                            </ListItems>
                        </Links>
                        <Links to="/about">
                            <ListItems>
                                <Flex gap={'5px'}><AboutIcon width={'16px'} />About</Flex>
                            </ListItems>
                        </Links>
                        <Links to="/career">
                            <ListItems>
                                <Flex gap={'5px'}><CarrerIcon width={'18px'} />Career</Flex>
                            </ListItems>
                        </Links>
                        <Links to="/services">
                            <ListItems>
                                <Flex gap={'5px'}><ServicesIcon width={'18px'} />Services</Flex>
                            </ListItems>
                        </Links>
                        <Links to='/journey'>
                            <ListItems>
                                <Flex gap={'5px'}><JourneyIcon width={'18px'} />Journey</Flex>
                            </ListItems>
                        </Links>
                        <Links to="#">
                            <ListItems>
                                <Flex gap={'5px'}><ContactIcon width={'16px'} />Contact</Flex>
                            </ListItems>
                        </Links>
                    </List>
                </Flex>}
                </>}
        </Flex>
        </>
}

export default Header