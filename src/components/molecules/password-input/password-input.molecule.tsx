import { ForwardedRef, forwardRef, memo, useCallback, useState } from 'react'
import { IconButton, TextField, TextFieldProps } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const PasswordInput = (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const [hidden, setHidden] = useState(true)

  const handleVisibility = useCallback(() => {
    setHidden((prevState) => !prevState)
  }, [])

  return (
    <TextField
      ref={ref}
      type={hidden ? 'password' : 'text'}
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleVisibility}>
            {hidden ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        )
      }}
      {...props}
    />
  )
}

export default memo(forwardRef(PasswordInput))
