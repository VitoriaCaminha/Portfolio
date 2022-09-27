import React from 'react'
import Dev from './images/vitoriacaminha.png'
import FundamentosJS from './images/fundamentos-js.png'
import { Presentation, Projects } from './Style'

export default function App() {
  return (
    <div>
      <Presentation>
        <img src={Dev} alt='foto de uma mulher branca com cabelo na altura dos ombros e blusa azul marinho' />
        <div>
          <h1>Vitória Caminha</h1>
          <h2>Desenvolvedora Front-end</h2>
        </div>
      </Presentation>

      <Projects>
        <a href='https://fundamentos-js.vercel.app' target='_blank'>Fundamentos JavaScript
          <img src={FundamentosJS} alt='imagem do primeiro projeto, chamado Fundamentos JavaScript' />
        </a>
      </Projects>
    </div>
  );
}
