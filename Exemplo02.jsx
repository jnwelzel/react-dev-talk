// Exemplo02.jsx
import {render} from 'react-dom'

let child = React.createElement('li', null, 'Text Content')
let root = React.createElement('ul', { className: 'my-list' }, child)

render(root, document.getElementById('react-root'))
