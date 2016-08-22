// Exemplo03.jsx

// 1 - Declaração do componente
class Exemplo03 extends React.Component {
  render() {
    let estilosComponente = {
      backgroundColor: '#ffffff'
    }

    return(
      <div style={estilosComponente}>
        <p style={{color: 'red'}}>{this.props.titulo}</p>
        <ul style={{backgroundColor: 'yellow'}}>
          {this.props.children}
        </ul>
      </div>
    )
  }
}

// 1.1 - valor padrão da prop caso nenhum outro seja passado para o componente
Exemplo03.defaultProps = {
  titulo: 'Hello world!'
}

// 1.2 - validação das props e seus valores, gera warning em DEV
Exemplo03.propTypes = {
  titulo: React.PropTypes.string.isRequired
}

// -----------------------------------------------------------------------

// 2 - Utilização do componente
const componente =
  <Exemplo03 titulo="Olá React">
    <li>Isso aqui é o <b>this.props.children</b> do componente <b>Exemplo03.jsx</b></li>
  </Exemplo03>

// -----------------------------------------------------------------------

// 3 - Montagem do componente no DOM (é feita no componente raíz ex. Application.jsx)
ReactDOM.render(componente, document.getElementById('react-root'))
