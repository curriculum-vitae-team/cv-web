import { gql } from '@apollo/client'

export const VERIFY_MAIL = gql`
  mutation VerifyMail($mail: VerifyMailInput!) {
    verifyMail(mail: $mail)
  }
`
