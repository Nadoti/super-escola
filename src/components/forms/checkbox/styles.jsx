import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  label {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
      position: relative;
      display: block;
      width: 25px;
      height: 25px;

      input {
        display: block;
        width: 25px;
        height: 25px;
      }

      &:hover input ~ span {
        background: #44C9F3;
      }

      & input:checked ~ span {
        background: #44C9F3;
        
      }

      
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: ${props => props.theme['gray-300']};
        border-radius: 2px;
        color: white;
        cursor: pointer;
      }
    }

    
  }
  
`