import { useMutation } from '@apollo/client'
import { VERIFY_MAIL } from 'graphql/mail'

export const useMailVerify = () => {
  return useMutation(VERIFY_MAIL)
}
