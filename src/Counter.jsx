import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increment =()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div className='center'>
      <h2>With Class Component Counter App</h2>
        {this.state.count}
        <div>
            <button onClick={this.increment}>INCREMENT</button>
            <button onClick={this.decrement}>DECREMENT</button>
        </div>
      </div>
    )
  }
}

export default Counter