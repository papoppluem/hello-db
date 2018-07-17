import React from 'react'
import Link from 'gatsby-link'
// import io from 'socket.io-client'
const socket = io.connect('http://127.0.0.1:3002')

class IndexPage extends React.Component {
  state = {
    message: '',
    response: ''
  }
  click = () => {
    // console.log('local')
    socket.emit('msg', this.state.message)
    
  }

  change = (event) => {
    const data = event.target.value
    this.setState({
      message: data
    })
  }

  componentDidMount = () => {
    socket.on('newMsgRecieve', (data) => {
      console.log(data)
      this.setState({
        response: data
      })
    })
    // console.log(io)
  }

  render() {
    return (
    <div>
      <h1>Hi people</h1>
      {this.state.message}
      <input onChange={this.change} />
      <button onClick={this.click}>click</button>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      response here <br />
      {this.state.response}
    </div>

    )
  }
}

export default IndexPage
