import styled from 'styled-components'
import { keyframes } from 'styled-components'

const width = window.innerWidth

const slide = keyframes`
    from {
        width: 0;
      }
      to {
        width: calc(100% - ${width > 768 ? 140 : 80}px);
      }
`

const LineAnimation = styled.span`
  position: absolute;
  height: 3px;
  width: calc(100% - 100px);
  background-color: white;
  border-radius: 15px;
  animation: ${slide} 10s linear infinite;

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 20px;
  }
`

export default LineAnimation
