import { Container } from '@mui/material'
import { TranslationSelect } from '@molecules/translation-select'
import { SideMenu } from '@organisms/side-menu'
import { UserMenu } from '../user-menu'
import * as Styled from './header.styles'

export const Header = () => {
  return (
    <Styled.Header>
      <Container maxWidth="xl">
        <SideMenu />
        <TranslationSelect sx={{ mr: 6 }} />
        <UserMenu />
      </Container>
    </Styled.Header>
  )
}
