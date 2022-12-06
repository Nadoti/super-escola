import styled from 'styled-components'


export const QuestionsContainer = styled.section`
  max-width: 70rem;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const QuestionsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h2`
  font-weight: bold;
  color: ${props => props.theme['gray-500']};
  text-align: left;
`

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const BtnMove = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  a, button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    

    &:first-child {
      background: ${props => props.theme['red-500']};
    }

    &:last-child {
      background: ${props => props.theme['blue-400']};
    }

    &:hover {
      scale: 1.1;
    }
  }
`