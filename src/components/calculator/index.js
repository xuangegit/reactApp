/***
 * @description封装了react官方文档（Api） 10.状态提升模块
 * @person-understanding(个人理解) 所谓的状态提升就是通过父组件props的属性来管理子组件的状态或者说是可控组件为父组件  
 */
import React from 'react'
import Temperature from './temperature'
export default class Calculator extends React.Component{
  constructor(props){
   super(props)
  //  温度转换
   this.tryConvert = this.tryConvert.bind(this) 
   this.toCelsius = this.toCelsius.bind(this)
   this.toFahrenheit = this.toFahrenheit.bind(this)
  //change函数
   this.celsiusChange = this.celsiusChange.bind(this)
   this.fahrenheitChange = this.fahrenheitChange.bind(this)
   this.state={
     temperature:'',
     scale:'c'
   } 
  }
  celsiusChange(value){
    this.setState({temperature:value,scale:'c'})
  }
  fahrenheitChange(value){
    this.setState({temperature:value,scale:'f'})
  }
  tryConvert(temperature, scale) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = scale ==='c' ?  this.toFahrenheit(input) : this.toCelsius(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString();
  }
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  render(){
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale ==='c' ? temperature : this.tryConvert(temperature,scale)
    const fahrenheit = scale === 'f' ? temperature : this.tryConvert(temperature,scale)
    return(
      <div>
        <Temperature 
          temperature={celsius} 
          temperatureChange={this.celsiusChange} 
          scale='c'/>
        <Temperature 
          temperature={fahrenheit} 
          temperatureChange={this.fahrenheitChange} 
          scale='f'/>
      </div>
    )
  }
}