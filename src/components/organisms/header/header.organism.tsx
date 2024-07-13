import { Container } from '@mui/material'
import { TranslationSelect } from '@molecules/translation-select'
import { UserMenu } from '../user-menu'
import * as Styled from './header.styles'

export const Header = () => {
  return (
    <Styled.Header>
      <Container maxWidth="xl">
        <TranslationSelect sx={{ mr: 6 }} />
        <UserMenu />
      </Container>
    </Styled.Header>
  )
}
