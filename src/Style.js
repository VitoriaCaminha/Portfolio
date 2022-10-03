import styled from 'styled-components'

export const Presentation = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
font-family: 'Yeseva One', 'cursive';
background-color: #daeafd;
height: 60vh;
display: flex;
justify-content: space-evenly;
align-items: center;

img {
    width: 30vh;
    border-radius: 50%;
}
`

export const Box = styled.div`
padding: 2vh 0;
`

export const Projects = styled.div`
width: 60vw;
margin: 2vh auto;
border: solid 1px gray;
border-radius: 5px;

a {
    text-decoration: none;
    font-size: 5vh;
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