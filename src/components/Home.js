import React from 'react'
import Dev from '../images/vitoriacaminha.png'
import FundamentosJS from '../images/fundamentos-js.png'
import Calculadora from '../images/calculadora.png'
import * as S from "../Style";

export default function Home() {
    return (
        <S.Box>
            <S.GlobalStyle />

            <S.Presentation>
                <S.Img src={Dev} alt='foto de uma mulher branca com cabelo na altura dos ombros e blusa azul marinho' />
                <h1>Vitória Caminha</h1>
                <h2>Desenvolvedora Front-end</h2>
            </S.Presentation>

            <S.Div>
                <S.H2>Projetos</S.H2>
                <S.Projects>
                    <S.A href='https://fundamentos-js.vercel.app' target='_blank'>
                        Fundamentos JavaScript
                        <S.ProjectImage src={FundamentosJS} alt='imagem do projeto chamado Fundamentos JavaScript' />
                    </S.A>
                </S.Projects>

                <S.Projects>
                    <S.A href='https://calculadora.vitoriacaminha.vercel.app' target='_blank'>
                        Calculadora
                        <S.ProjectImage src={Calculadora} alt='imagem do projeto chamado Calculadora' />
                    </S.A>
                </S.Projects>
            </S.Div>
        </S.Box>
    )
}