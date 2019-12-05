import TodoList from  '../components/TodoList'
import Counter from '../useState/couter'
import React from 'react'
import * as http from '../services' 
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list: [
        {title:'吃饭',isChecked:false},
        {title:'睡觉',isChecked:false},
        {title:'打豆豆',isChecked:true},
      ]
    }
  }
  
  componentDidMount(){
    http.getToList().then(d=>{
      console.log('返回数据',d)
      this.setState({
        list:d.data
      })
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('preState',nextState)
    return true
  }
  render(){
    console.log('http',http)
    console.log('state',this.state)
    return(
      <div>
        这是首页
        <Counter />
        <TodoList list={this.state.list}/>
      </div>
    )
  }
}