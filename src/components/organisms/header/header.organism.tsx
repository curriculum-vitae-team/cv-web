import { Container } from '@mui/material'
import { TranslationSelect } from '@molecules/translation-select'
import { SideMenu } from '../side-menu'
import { UserMenu } from '../user-menu'
import * as Styled from './header.styles'

export const Header = () => {
  return (
    <Styled.Header>
      <Container maxWidth="xl">
        <Styled.LeftPart>
          <SideMenu />
        </Styled.LeftPart>
        <Styled.RightPart>
          <TranslationSelect sx={{ mr: 6 }} />
          <UserMenu />
        </Styled.RightPart>
      </Container>
    </Styled.Header>
  )
}
