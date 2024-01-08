const prepareStyles = () => {
  const style = document.createElement('style')
  const styleSheets = [...document.styleSheets]
  const links = styleSheets.reduce<Node[]>((acc, { ownerNode }) => {
    if (ownerNode instanceof Element) {
      acc.push(ownerNode.cloneNode(true))
    }
    return acc
  }, [])
  console.log(links)
  style.append(...links)

  return style
}

export const prepareHtml = (content: HTMLElement) => {
  const page = document.createElement('div')
  page.append(content.cloneNode(true), prepareStyles())

  return page.outerHTML
}
