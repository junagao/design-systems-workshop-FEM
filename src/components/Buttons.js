import styled from 'styled-components'
import { typeScale } from '../utils'
import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${(props) => props.theme.status.warningColor};
    color: ${(props) => props.theme.textColorInverted};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.warningColorHover};
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${(props) => props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${(props) => props.theme.status.warningColor};
    color: ${(props) => props.theme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${(props) => props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.errorColorHover};
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${(props) => props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${(props) => props.theme.status.errorColor};
    color: ${(props) => props.theme.textColorInverted};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,
  success: () => `
    background: none;
    color: ${(props) => props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.successColorHover};
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${(props) => props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${(props) => props.theme.status.successColor};
    border: 2px solid ${(props) => props.theme.status.successColor};
    color: ${(props) => props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,
}

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: all 0.2s linear;
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    border: 2px solid ${(props) => props.theme.primaryHoverColor};
  }
  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${(props) => props.theme.disabled};
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    border-color: ${(props) => props.theme.disabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  background: none;
  &:disabled {
    border: 2px solid ${(props) => props.theme.disabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  background: none;
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
