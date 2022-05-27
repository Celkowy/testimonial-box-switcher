import styled from 'styled-components'

const Image = styled.div`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  background-image: url('${props => props.src}');
  background-position: center;
  background-size: cover;
  border: none;
`

export default Image
