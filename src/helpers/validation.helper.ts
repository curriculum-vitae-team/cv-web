export const requiredValidation = (value: string) => {
  if (!value) {
    return 'Required field'
  }
}

export const passwordValidation = (value: string) => {
  if (!value) {
    return 'Required field'
  }

  if (value.length < 5) {
    return 'At least 5 characters'
  }
}

export const otpValidation = (value: string) => {
  if (!value) {
    return 'Required field'
  }

  if (value.length !== 6) {
    return 'Exactly 6 characters'
  }
}
