import React, { Component } from 'react'

export class Home extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
    }

     changeHandel(){
        this.setState({message: "hello"})
        console.log(this.state.message);
    }

  render() {
    return (<>
      <div>{this.state.message}</div>
      <button onClick={this.changeHandel}>click me</button>
      </>)
  }
}

export default Home