type Args = {
  name: string
  base64: string
}

export const downloadPdf = ({ name, base64 }: Args) => {
  const source = `data:application/pdf;base64,${base64}`
  const link = document.createElement('a')

  link.href = source
  link.download = name + '.pdf'
  link.click()
}
