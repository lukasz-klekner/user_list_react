import { memo } from 'react'
import styled from 'styled-components'

const Card = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

const Memoized = memo(Card)
const Styled = styled(Memoized)`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`

Styled.displayName = 'Card'
export default Styled
