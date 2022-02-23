import styled from 'styled-components'
import { memo } from 'react'

import Card from '../UI/Card'

const UserList = ({ className, users }) => (
  <Card className={className}>
    <ul>
      {users.map(({ id, name, age }) => (
        <li key={id}>
          {name} ({age} years old)
        </li>
      ))}
    </ul>
  </Card>
)

const Memoized = memo(UserList)
const Styled = styled(Memoized)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;

  ul {
    list-style: none;
    padding: 1rem;
  }

  li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`
Styled.displayName = 'UserList'
export default Styled
