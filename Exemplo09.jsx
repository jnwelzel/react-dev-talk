class Lifecycle extends React.Component {
  constructor(props) {
    super(props)

    console.log('[Lifecycle] constructor')
  }

  componentWillMount() {
    console.log('[Lifecycle] componentWillMount')
  }

  componentDidMount() {
    console.log('[Lifecycle] componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Lifecycle] componentWillReceiveProps', nextProps)
  }

  render() {
    console.log('[Lifecycle] render')

    return(
      <div>{this.props.label}</div>
    )
  }
}

class LifecycleContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      label: 'Lifecycle'
    }

    this.trocarLabelHandler = () => this.atualizarLabel()
  }

  atualizarLabel() {
    this.setState({
      label: this.inputRef.value.trim()
    }, () => {
      this.inputRef.value = ''
    })
  }

  render() {
    console.log('[LifecycleContainer] render')

    return (
      <div>
        <Lifecycle label={this.state.label} />
        <input ref={(input) => this.inputRef = input} />
        <button onClick={this.trocarLabelHandler} type="button">Alterar label</button>
      </div>
    )
  }
}

ReactDOM.render(<LifecycleContainer />, document.getElementById('react-root'))
