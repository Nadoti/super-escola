import React from 'react'
import { api } from '../api/api'


export const ContextQuestions = React.createContext({})

export function ContextData({ children }) {

  const [respostas, setRespostas] = React.useState(
    api.reduce((acc, at) => {
      return {
        ...acc,
        [at.questao.id]: ''
      }
    }, {})
  )

  return (
    <ContextQuestions.Provider
      value={{
        respostas,
        setRespostas
      }}>
      {children}
    </ContextQuestions.Provider>
  )
}