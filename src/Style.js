import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: #ADD8E6;
color: #2F4F4F;
font-family: 'Fredoka', sans-serif;
}
`

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-evenly;
list-style: none;
height: 15vh;
font-size: 2.5vh;
`


// Home

export const Box = styled.div`
display: flex;
justify-content: space-evenly;
height: 65vh;

@media (max-width: 850px) {
    flex-direction: column;
    height: 85vh;
    align-items: center;
    gap: 3vh;
}
`

export const Presentation = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Img = styled.img`
width: 25vh;
border-radius: 50%;
`

export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 40vw;

@media (max-width: 1250px) {
    width: 50vw;
}
`

export const H2 = styled.h2`
@media (max-width: 850px) {
    font-size: 4vh;
}
`

export const Projects = styled.div`
width: 30vw;

@media (max-width: 1250px) {
    width: 100%;
}
`

export const A = styled.a`
text-decoration: none;
font-size: 3.5vh;
font-weight: bold;
display: flex;
justify-content: space-between;
align-items: center;
height: 25vh;

@media (max-width: 550px) {
    flex-direction: column;
    justify-content: space-evenly;
    font-size: clamp(1.5rem, 0.5rem + 2vw, 3rem);
    height: 20vh;
}

@media (min-width:550px) and (max-width: 1250px) {
    justify-content: space-between;
    font-size: clamp(1.5rem, 0.5rem + 2vw, 4rem);
    height: 18vh;
}
`

export const ProjectImage = styled.img`
width: 15vw;

@media (max-width: 550px) {
    width: 40vw;
}

@media (min-width:550px) and (max-width: 850px) {
    width: 25vw;
}
`


// About

export const Container = styled.div`
width: 90%;
display: flex;
justify-content: space-evenly;
align-items: center;

@media (max-width: 750px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
`

export const Image = styled.img`
width: 25%;
`
export const Education = styled.div`
width: 45%;
height: 70vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: justify;

@media (max-width: 750px) {
    width: 80%;
}
`

// Contacts

export const ContactsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 70vh;
`