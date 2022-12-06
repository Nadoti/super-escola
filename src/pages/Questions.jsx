import React from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { api } from '../api/api'
import { Checkbox } from '../components/forms/checkbox/Checkbox'
import { ContextQuestions } from '../context/Context'
import { toast } from 'react-toastify';
import * as S from '../styles/pages/questions/styles'

export function Questions() {
  const url = useParams()
  const navigate = useNavigate();
  const question = api.find((val) => val.questao.id === url.id)

  const { respostas, setRespostas } = React.useContext(ContextQuestions)

  const idUrlNumberQuestion = question.questao.id.split('')


  const urlBefore = idUrlNumberQuestion[1] === '1' ? 'p1' : idUrlNumberQuestion[0] + (Number(idUrlNumberQuestion[1]) - 1)
  const urlNext = idUrlNumberQuestion[1] === String(api.length) ? idUrlNumberQuestion[0] + Number(idUrlNumberQuestion[1]) : idUrlNumberQuestion[0] + (Number(idUrlNumberQuestion[1]) + 1)

  function handleFinishQuestions() {
    for (let key in respostas) {
      if (respostas[key] === '') {
        toast.error(`Todas as Respostas precisam ser respondidas, o Exercicio ${key.split('')[1]} não foi respondido`, {
          position: "top-right",
          autoClose: 1500,
        });
        return
      }
    }

    toast.success(`Parabens, você concluiu todas as questões`, {
      position: "top-right",
      autoClose: 1500,
    });
    navigate('/')
  }



  return (
    <S.QuestionsContainer>
      <S.QuestionsContent>
        <S.Title>{question.exercicio}/{api.length}</S.Title>
        <h3>{question.questao.pergunta}</h3>
        <S.Questions>
          {question.questao.options.map((option) => (
            <span key={option}>{option}</span>
          ))}
        </S.Questions>
        <div>
          {question.questao.alternativas.map((alternativa) => (
            <Checkbox
              key={alternativa.resposta}
              alternativa={alternativa}
              respostas={respostas}
              setRespostas={setRespostas}
            />
          ))}
        </div>
      </S.QuestionsContent>
      <S.BtnMove>
        {idUrlNumberQuestion[1] === '1'
          ? ''
          : <NavLink to={`/questions/${urlBefore}`}>Anterior</NavLink>}

        {idUrlNumberQuestion[1] === String(api.length)
          ? <button onClick={handleFinishQuestions}>Finalizar</button>
          : <NavLink to={`/questions/${urlNext}`}>Proximo</NavLink>}
      </S.BtnMove>
    </S.QuestionsContainer>
  )
}