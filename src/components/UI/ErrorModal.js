import { memo } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

import Card from './Card'
import Button from './Button'

const Modal = ({ className, title, message, onConfirm }) => (
  <div className={className}>
    <Card>
      <header>
        <h2>{title}</h2>
      </header>
      <div>
        <p>{message}</p>
      </div>
      <footer>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  </div>
)

const ErrorModal = ({ className, title, message, onConfirm }) => {
  return ReactDOM.createPortal(
    <Modal
      className={className}
      title={title}
      message={message}
      onConfirm={onConfirm}
    />,
    document.getElementById('modal')
  )
}

const Memoized = memo(ErrorModal)
const Styled = styled(Memoized)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);

  > ${Card} {
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;

    header {
      background: #4f005f;
      padding: 1rem;
      font-size: 50px;

      > h2 {
        margin: 0;
        color: white;
        font-size: 50px;
      }
    }
    div {
      padding: 1rem;
    }

    footer {
      padding: 1rem;
      display: flex;
      justify-content: flex-end;
    }
  }
`
Styled.displayName = 'Button'
export default Styled
