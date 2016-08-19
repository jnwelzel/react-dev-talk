// Exemplo01.jsx
import {render} from 'react-dom'

let root = <ul className="my-list">
             <li>Text Content</li>
           </ul>

render(root, document.getElementById('react-root'))
