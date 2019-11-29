import React from 'react'
export default class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state={
      date:new Date().toLocaleString()
    }
  }
  componentDidMount(){
    this.timer = setInterval(() => {
      this.tick()
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  tick(){
    this.setState({
      date:new Date().toLocaleString()
    })
  }
  render(){
    return (
      <div>
          现在时间是：{this.state.date}
      </div>
    )
  }
}