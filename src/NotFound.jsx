import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Flex, ZoomOutButton } from './styles/globalStyles';

const Section = styled.section`
max-width: 100vw;
max-height: 100vh;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
const HeadingDiv = styled.div`
color: white;
font-size: 3rem;
font-weight: 500;
text-align: center;
padding-bottom: 2rem;
`
const ParaDiv = styled.div`
width: 100%;
margin: auto;
color: grey;
font-size: 1.6rem;
font-weight: 400;
text-align: center;
padding-bottom: 1.5rem;
`

const RedirectLink = styled(Link)`
  background-color: white;
  border-radius: 3px;
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

const NotFound = () => {
    return <>
        <Section>
            <HeadingDiv>Lost your way?</HeadingDiv>
            <ParaDiv>Sorry, we can't find that page. You'll find lots to explore on the home page.</ParaDiv>
            <Flex justifyCenter><RedirectLink to={`/`}><ZoomOutButton>Home</ZoomOutButton></RedirectLink></Flex>
        </Section>
    </>
}
export default NotFound