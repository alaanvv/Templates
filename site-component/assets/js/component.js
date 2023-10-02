const componentsPath = './assets/components/'

// ---

function replaceComponents() {
  const main = resolve => {
    const roots = document.querySelectorAll('*[component]')
    
    for (let root of roots) {
      const name = root.getAttribute('component')
      console.log(name)
      const args = {}
      for (let attrName of root.getAttributeNames()) args[attrName] = root.getAttribute(attrName)
      
      fetch(`${componentsPath}${name}.html`)
      .then(res => res.text())
      .then(html => {
        let match = true
      
        while (match) {
          match = html.match(/\${(.*?)}/)
          if (match && args[match[1]])
            html = html.replaceAll(`\${${match[1]}}`, args[match[1]] ? args[match[1]] : '')
        }
        
        // It's throwing an error but working pretty well
        try { root.outerHTML = html }
        catch {}

        resolve()
      })
    }
  }

  return new Promise(main)
}

function createComponent(root, name, args) {
  const main = resolve => {
    const component = document.createElement('div')
    component.setAttribute('component', name)
    for (let key of Object.keys(args))
      component.setAttribute(key, JSON.stringify(args[key]))
    
    root.appendChild(component)
    
    replaceComponents().then(resolve)
  }

  return new Promise(main)
}

replaceComponents()