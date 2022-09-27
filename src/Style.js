import styled from 'styled-components'

export const Presentation = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
font-family: 'Yeseva One', 'cursive';
background-color: aliceblue;
height: 60vh;
display: flex;
justify-content: space-evenly;
align-items: center;

img {
    width: 20vw;
    height: 35vh;
    border-radius: 50%;
}
`

export const Projects = styled.div`
width: 60vw;
margin: auto;

a {
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40vh;
}

img {
    width: 20vw;
}
`