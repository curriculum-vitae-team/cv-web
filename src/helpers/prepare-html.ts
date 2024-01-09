const prepareStyles = () => {
  const style = document.createElement('style')
  const styleSheets = [...document.styleSheets]
  const links = styleSheets.reduce<Node[]>((acc, { ownerNode, ...styleSheet }) => {
    if (ownerNode instanceof Element) {
      if (ownerNode.tagName === 'LINK') {
        acc.push(ownerNode.cloneNode(true))
        return acc
      }
      if (ownerNode.tagName === 'STYLE') {
        const style = document.createElement('style')
        style.innerHTML = [...styleSheet.cssRules].map((cssRule) => cssRule.cssText).join('\n')
        acc.push(style)
        return acc
      }
    }
    return acc
  }, [])
  style.append(...links)

  return style
}

export const prepareHtml = (content: HTMLElement) => {
  const page = document.createElement('div')
  page.append(content.cloneNode(true), prepareStyles())

  return page.outerHTML
}
