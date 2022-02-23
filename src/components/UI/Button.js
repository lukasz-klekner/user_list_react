import { memo } from 'react'
import styled from 'styled-components'

const Button = ({ className, type, children, onClick }) => {
  return (
    <button className={className} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  )
}

const Memoized = memo(Button)
const Styled = styled(Memoized)`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`
Styled.displayName = 'Button'
export default Styled
