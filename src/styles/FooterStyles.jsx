import styled from "styled-components";

export const HoverCard = styled.div`
    width: 60%;
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 3rem 6rem ;
    position: absolute;
    top: -20%;
    transform: translatex(-50%);
    left: 50%;

`
export const IconContainer = styled.div`
width: max-content;
    padding: 8px 10px;
    border-radius: 50%;
    border: 2px solid white;
    transition: all 0.3s linear;
    & a{
        color: white;
    }
    &:hover{
        transform: rotate(360deg);
        color: #0a1535;
        background-color: white;
    }
    &:hover a{
        color: #0a1535;
    }
`

export const InputField = styled.input`
    padding: 1rem 1rem;
    font-size: 1.3rem;
    border: 3px solid #989ce5;
    outline: none;
    background-color: transparent;
    color: white;
`