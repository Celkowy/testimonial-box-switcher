import styled from 'styled-components'

const LineAnimation = styled.span`
  position: absolute;
  width: calc(100% - 100px);
  height: 3px;
  background-color: white;
  border-radius: 15px;
  animation: slide 10s infinite linear;

  @keyframes slide {
    0% {
      width: 0px;
    }
    100% {
      width: calc(100% - 100px);
    }
  }
`

export default LineAnimation
