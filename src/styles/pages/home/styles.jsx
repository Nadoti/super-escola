import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;
  gap: 0.5rem;
  margin: 0 auto;
  height: 100vh;
  
`

export const TitleInfo = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`

export const ContentQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`


export const Exercise = styled.section`
  a {
    border: 2px solid ${props => props.answered ? props.theme['green-300'] : props.theme['blue-400']};
    background: ${props => props.answered && props.theme['green-300']};
    color: ${props => props.answered && props.theme.white};
    padding: 0.25rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: bold;

    &:hover {
      filter: contrast(2);
    }
  }
`