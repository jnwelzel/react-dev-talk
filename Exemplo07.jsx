class Pai extends React.Component {
  render() {
    return(
      <div>
        <p>Cliques: {this.props.numeroCliques} (<a href="" onClick={this.props.zerarContagem}>zerar</a>)</p>
        <ul>
          {this.props.children}
        </ul>
      </div>
    )
  }
}

class Filho extends React.Component {
  render() {
    return(
      <li>
        <a href="" onClick={this.props.click}>{this.props.children}</a>
      </li>
    )
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props)

    this.clickHandler = (event) => this.click(event)
    this.zerarHandler = (event) => this.zerar(event)

    this.state = {
      cliques: 0
    }
  }

  render() {
    return (
      <Pai numeroCliques={this.state.cliques} zerarContagem={this.zerarHandler}>
        <Filho click={this.clickHandler}>Filho 1</Filho>
        <Filho click={this.clickHandler}>Filho 2</Filho>
      </Pai>
    )
  }

  click(event) {
    event.preventDefault()

    this.setState({
      cliques: this.state.cliques + 1
    })
  }

  zerar(event) {
    event.preventDefault()

    this.setState({
      cliques: 0
    })
  }
}

ReactDOM.render(<Application />, document.getElementById('react-root'))
