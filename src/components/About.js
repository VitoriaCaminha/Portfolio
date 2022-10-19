import React from 'react'
import * as S from '../Style'
import Chemistry from '../images/quimica.png'

export default function About() {
    return (
        <S.Container>
            <S.GlobalStyle />
            <S.Image src={Chemistry} />
            <S.Education>
                <h2>Acadêmico</h2>
                <p>Me formei em química pela Universidade Federal Rural de Pernambuco (UFRPE) no ano de 2021.
                    Desde então, tenho me dedicado aos estudos de programação, mais especificamente a área FrontEnd.
                    Em agosto de 2022, iniciei uma nova graduação, dessa vez em sistemas de informação na Escola Superior Aberta do Brasil (ESAB).
                </p>
                <h2>Tecnologias</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS; SASS; styled-components; TailwindCSS; Bootstrap</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Next.js</li>
                    <li>Redux</li>
                    <li>TypeScript</li>
                    <li>Consumo APIs</li>
                    <li>Git/GitHub</li>
                </ul>
            </S.Education>
        </S.Container>
    )
}