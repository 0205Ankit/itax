import styled from "styled-components"
import { css } from "styled-components";

export const Flex = styled.div`
  display: flex;

  ${(props) =>
        props.spaceBetween &&
        css`
      justify-content: space-between;
    `}

  ${(props) =>
        props.alignCenter &&
        css`
      align-items: center;
    `}

    ${(props) =>
        props.column &&
        css`
      flex-direction: column;
    `}

    ${(props) =>
        props.justifyCenter &&
        css`
      justify-content: center;
    `}

     ${(props) =>
        props.wrap &&
        css`
     flex-wrap: wrap;
    `}

    gap:${(props) => props.gap};
    padding:${props => props.padding};
    margin:${props => props.margin};
    color:${(props) => props.color};
    width:${(props) => props.width};
    height:${(props) => props.height};
    font-size:${(props) => props.size};
    position:  ${props => props.position};
    background-color: ${props => props.bgcolor};

`;


export const IconContainer = styled.svg`
  fill: ${(props) => props.fill};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Paragraph = styled.p`
    color: ${props => props.color};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
    font-family: ${props => props.family};
    padding:${props => props.padding};
    margin:0;
    line-height: ${props => props.lineHeight};
`

export const Heading = styled.h1`
    color: ${props => props.color};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
    padding:${props => props.padding};
    margin:0;
     letter-spacing: 0.1rem;
    font-family: ${props => props.family};
   ${props => props.center && css`
       text-align: center;
   `}

`
export const Span = styled.span`
    color: ${props => props.color};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
    padding:${props => props.padding};
    margin:${props => props.margin};
    font-family: ${props => props.family};
     letter-spacing: 0.1rem;

`

export const Container = styled.div`
max-width: ${props => props.width};
margin: ${props => props.margin};
font-size: ${props => props.size};
padding:${props => props.padding};
height: ${props => props.height};
transition: all 0.15s ease-in;
background-color: ${props => props.bgcolor};
border-bottom:  ${props => props.borderBottom};
position:  ${props => props.position};

${props => props.hover && css`
    &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`}

`


export const ZoomOutButton = styled.button`
    background-color: #6353f1 ;
    color: white;
    padding: 1rem 1.3rem;
    margin:${props => props.margin};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    width: max-content;
    outline: none;
    border:none;
    height: fit-content;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover{
        transform:scale(0.95)
    }
    `