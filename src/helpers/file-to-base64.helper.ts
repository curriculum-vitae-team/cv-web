type Result = {
  base64: string
  type: string
  size: number
}

export const fileToBase64 = (file: File): Promise<Result> => {
  const { type, size } = file
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        return resolve({ base64: reader.result, type, size })
      }
      reject('base64 string error')
    }
    reader.onerror = (error) => reject(error)
  })
}
