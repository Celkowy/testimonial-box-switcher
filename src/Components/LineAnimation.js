import styled from 'styled-components'

const LineAnimation = styled.span`
  position: absolute;
  height: 3px;
  background-color: white;
  border-radius: 15px;
  animation: slide 10s linear infinite;

  @media (min-width: 768px) {
    @keyframes slide {
      0% {
        width: 0;
      }
      100% {
        width: calc(100% - 100px);
      }
    }
  }

  @media (max-width: 768px) {
    @keyframes slide {
      0% {
        width: 0px;
      }
      100% {
        width: calc(100% - 60px);
      }
    }
  }
`

export default LineAnimation
