import React from 'react'
import * as S from '../Style'

export default function Contacts() {
    return (
        <S.ContactsContainer>
            <S.GlobalStyle />
            <h3>E-mail: <a target="_blank" href="mailto:vitoria@praciano.com.br">vitoria@praciano.com.br</a></h3>
            <h3>GitHub: <a target="_blank" href="https://github.com/vitoriacaminha">VitoriaCaminha</a></h3>
            <h3>Instagram: <a target="_blank" href="https://www.instagram.com/vitoria.caminhar">vitoria.caminhar</a></h3>
        </S.ContactsContainer>
    )
}