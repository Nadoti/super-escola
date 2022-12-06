import React from 'react'
import * as S from './styles'

export function Checkbox({ alternativa, respostas, setRespostas }) {

  function handleChange({ target }) {
    if (target.checked) {
      setRespostas({ ...respostas, [alternativa.id]: target.value })
    }
  }

  function handleChecked(cor) {
    return respostas[cor.id] === cor.resposta
  }


  return (
    <S.Container>
      <label>
        <div>
          <input
            type="checkbox"
            value={alternativa.resposta}
            onChange={handleChange}
            checked={handleChecked(alternativa)}
          />
          <span>{alternativa.alternativa}</span>
        </div>
        <p>{alternativa.resposta}</p>
      </label>
    </S.Container>
  )
}
