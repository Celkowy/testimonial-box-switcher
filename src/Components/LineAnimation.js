import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Animation = styled.span`
  position: absolute;
  transform-origin: left;
  height: 3px;
  background-color: white;
  border-radius: 15px;

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`
const width = window.innerWidth
const animation = [{ width: 0 }, { width: width > 768 ? '600px' : '260px' }]

const LineAnimation = ({ number, duration }) => {
  const ref = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    animationRef.current = ref.current.animate(animation, { duration })
  })

  useEffect(() => {
    animationRef.current.finish()
    animationRef.current.play()
  }, [number])

  return <Animation ref={ref} duration={duration} />
}

export default LineAnimation
