import React from 'react'
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
export default class Temperature extends React.Component{
  constructor(props){
    console.log(props)
    super(props);
    this.handleChange=this.handleChange.bind(this);
    // this.state={temperature:''} //初始化
  }
  handleChange(e){
    console.log('e',e)
    console.log('props',this)
    this.props.temperatureChange(e.target.value)
  }
  render(){
    const temperature = this.props.temperature
    const scale = this.props.scale
    return(
      <fieldset>
        <span>please input the temperature({scaleNames[scale]}):</span>
        <input value={temperature} onChange={this.handleChange}/>                                                   
      </fieldset>
    )
  }
}