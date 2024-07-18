export const parseJwt = (token: string): { exp: number } | null => {
  const base64Url = token.split('.')[1]

  if (!base64Url) {
    return null
  }

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const payload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((char) => '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  )

  return JSON.parse(payload)
}
