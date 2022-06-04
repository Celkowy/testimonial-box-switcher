import styled from 'styled-components'

const QuoteLeft = styled.i`
  position: absolute;
  left: 25px;
  top: 40px;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 18px;
    left: 10px;
    top: 40px;
  }
`

export default QuoteLeft
