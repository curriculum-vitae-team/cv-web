import { CircularProgress } from '@mui/material'
import * as Styled from './page-loader.styles'

export const PageLoader = () => {
  return (
    <Styled.Loader>
      <CircularProgress />
    </Styled.Loader>
  )
}
