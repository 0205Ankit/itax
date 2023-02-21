import styled,{keyframes} from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai"



export const SocialLinkContainer = styled.div`
    position: fixed;
    z-index: 999;
    top: 35%;
    background-color: #6353f1;
    font-size: 1.5rem;
    `
export const Links = styled.a`
    margin: 0;
    padding: 5px;   
    border: 0.1px solid white;
    cursor: pointer;
    text-decoration: none;
    color: white;
    &:hover{
        filter: opacity(50%);
    }
`
const arrow = keyframes`
    0%   {bottom:0px}
    30% {bottom:-15px}
  75% {bottom:10px}
  100% {bottom:0}
`

export const ScrollTopButton=styled.button`
position:fixed;
bottom: 6%;
z-index: 999;
right: 3%;
color: white;
background-color: #6353f1;
outline: none;
border: none;
border-radius: 50%;
width: 50px;
height: 50px;
font-size: 1.2rem;
`

export const Arrow = styled(AiOutlineArrowUp)`
  position: relative;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  animation-name:${arrow};
  animation-duration:2s;
  animation-timing-function:linear;
  animation-delay:0s;
  animation-iteration-count:infinite;
  animation-direction:normal;
  animation-play-state:running;
    
`