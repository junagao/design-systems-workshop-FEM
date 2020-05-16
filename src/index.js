import React, { useState } from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, darkTheme, defaultTheme } from './utils'
import { SignUpModal, PrimaryButton, SecondaryButton } from './components'

const AppContainer = styled.div`
  padding-top: 1rem;
  background-color: ${({ bg }) => (bg ? '#d0454c' : '#fff')};
`

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <AppContainer bg={useDarkTheme}>
        <PrimaryButton
          style={{ margin: '0 16px 24px', padding: '8px' }}
          onClick={() => setUseDarkTheme(true)}
        >
          Dark theme
        </PrimaryButton>
        <PrimaryButton
          style={{ margin: '0 16px 24px', padding: '8px' }}
          onClick={() => setUseDarkTheme(false)}
        >
          Default theme
        </PrimaryButton>
        <SecondaryButton
          style={{ margin: '0 16px 24px', padding: '8px' }}
          onClick={() => setShowModal(true)}
        >
          Show modal
        </SecondaryButton>
        <div
          style={{
            background: useDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
            width: '100vw',
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </AppContainer>
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('root'))
