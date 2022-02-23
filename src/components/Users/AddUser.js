import styled from 'styled-components'
import { useState, useRef, memo } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

const AddUser = ({ className, onAddUser }) => {
  const [error, setError] = useState('')

  const nameRef = useRef()
  const ageRef = useRef()

  const addUserHandler = (event) => {
    event.preventDefault()

    const name = nameRef.current.value
    const age = ageRef.current.value

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

    nameRef.current.value = ''
    ageRef.current.value = ''
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
          <input id='username' type='text' ref={nameRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageRef} />
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
