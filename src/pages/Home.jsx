import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api/api'
import * as S from '../styles/pages/home/styles'
import { ContextQuestions } from '../context/Context'
import { BsFileText } from "react-icons/bs";


export function Home() {

  const { respostas } = React.useContext(ContextQuestions)


  return (
    <S.HomeContainer>
      <S.TitleInfo>
        <h2>Acentuação grafica</h2>
        <span>
          <BsFileText />
          Uso dos Porquês
        </span>
      </S.TitleInfo>
      <S.ContentQuestions>
        {api.map((result) => (
          <>
            {respostas[result.questao.id] !== ''
              ? (<S.Exercise key={result.exercicio} answered={true}>
                <Link to={`/questions/${result.questao.id}`}>{result.exercicio}</Link>
              </S.Exercise>)
              : (<S.Exercise key={result.exercicio}>
                <Link to={`/questions/${result.questao.id}`}>{result.exercicio}</Link>
              </S.Exercise>)}
          </>
        ))}
      </S.ContentQuestions>
    </S.HomeContainer>
  )
}
