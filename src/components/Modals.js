import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { typeScale } from '../utils'
import { Illustrations, CloseIcon } from '../assets'
import { PrimaryButton, SecondaryButton } from './Buttons'
import { EmailInput, PasswordInput } from './TextFields'

const ModalWrapper = styled.div`
  width: 900px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  font-family: ${(props) => props.theme.primaryFont};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
`

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
  padding-top: 1rem;
`

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
  margin-top: -0.5rem;
  padding-bottom: 1rem;
`

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
  })
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={Illustrations.SignUp} alt="Sign up for an account!" />
        <ModalHeader>Sign Up</ModalHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log('You signed up!')}>
          Sign Up
        </PrimaryButton>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => console.log('You closed the modal!')}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  )
}

export const SignInModal = () => (
  <ColumnModalWrapper>
    <div>
      <ModalHeader>Sign In</ModalHeader>
      <EmailInput label="Email" placeholder="julianens@gmail.com" />
      <PasswordInput label="Password" />
      <PrimaryButton style={{ margin: '16px 16px 0 0' }}>Sign In</PrimaryButton>
      <SecondaryButton>Sign Up</SecondaryButton>
    </div>
    <img src={Illustrations.SignIn} alt="Sign in to your account" />
    <CloseModalButton onClick={() => console.log('You closed the modal!')}>
      <CloseIcon />
    </CloseModalButton>
  </ColumnModalWrapper>
)
