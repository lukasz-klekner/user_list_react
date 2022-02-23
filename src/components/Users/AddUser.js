import styled from 'styled-components'
import { memo } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'

const AddUser = ({ className }) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Card>
      <form className={className} onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

const Memoized = memo(AddUser)
const Styled = styled(Memoized)`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  > input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;

    &:focus {
      outline: none;
      border-color: #4f005f;
    }
  }

  > label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`
Styled.displayName = 'AddUser'
export default Styled
