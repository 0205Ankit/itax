import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const List = styled.ul`
display: flex;
flex-direction: ${props=>props.direction};
list-style: none;
`
export const ListItems = styled.li`
 position: relative;
  margin-left:1rem;
  height: fit-content;
  padding: 10px 5px 10px 5px;
  border-radius: 5px;
  transition: all .4s ease;
  &:hover{
      background-color: #6353f1;
        box-shadow: 0 8px 16px 0 rgba(99, 83, 241, 0.6), 0 12px 80px 0 rgba(99, 83, 241, 0.7);   
  }
`
export const Links = styled(Link)`
color: #6353f1;
text-decoration: none;
font-weight: 500;
&:hover{
   color: white;
}
`
