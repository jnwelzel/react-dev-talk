// Exemplo05.jsx

class EscondeMostra extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mostra: true
    }

    this.handlerClickBotao = (event) => this.clickBotao(event)
  }

  render() {
    let estiloTexto = {
      visibility: this.state.mostra ? 'visible' : 'hidden'
    }

    return(
      <div>
        <div style={estiloTexto}>Olha esse texto lindo aqui</div>
        <button type="button" onClick={this.handlerClickBotao}>DO NOT CLICK!</button>
      </div>
    )
  }

  clickBotao(event){
    event.preventDefault()

    this.setState({
      mostra: !this.state.mostra
    })
  }
}

ReactDOM.render(<EscondeMostra />, document.getElementById('react-root'))
