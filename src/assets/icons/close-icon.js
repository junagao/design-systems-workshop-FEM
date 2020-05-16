import React from 'react'
import styled from 'styled-components'

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      d="M1 1L16.5 16.5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.5 1L0.999999 16.5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1 1L16.5 16.5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.5 1L0.999999 16.5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </CloseIconWrapper>
)
