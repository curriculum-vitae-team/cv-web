import { Container } from '@mui/material'
import { LanguageSelect } from '@molecules/language-select'
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
          <LanguageSelect />
          <UserMenu />
        </Styled.RightPart>
      </Container>
    </Styled.Header>
  )
}
