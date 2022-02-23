import styled from 'styled-components'
import { useState, memo } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

const AddUser = ({ className, onAddUser }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState('')

  const usernameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault()

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      })
      return
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      })
      return
    }

    onAddUser(name, age)
    setName('')
    setAge('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form className={className} onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={name}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
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
