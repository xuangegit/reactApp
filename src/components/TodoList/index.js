import  React,{createRef} from "react"
import {Input,Button,Checkbox} from 'antd'
import PropTypes from 'prop-types'

export default class TodoList extends React.Component{
  static propTypes={
    list:PropTypes.arrayOf(PropTypes.object)
  }
  constructor(props){
    super(props)
    console.log('props',props)
    this.inputRef = createRef()
    this.state={
      like: false,
      input:'',
      list:[...this.props.list]
    }
    this.handleClick=this.handleClick.bind(this)
    this.addClick=this.addClick.bind(this)
    this.inputChange=this.inputChange.bind(this)
    // console.log('state',this.state)
  }
  addClick(){
   
    //数组拷贝（）this.state.list.slice() 和 [...this.state.list] 
    // console.log(this.state.list.slice())
    // const list = this.state.list.slice()
    const list = [...this.state.list]
    list.push({title:this.state.input,isChecked:false})
    if(this.state.input){
      this.setState({
        list:list,
        input:''
      },()=>{
        console.log('state',this.state)
        this.inputRef.current.focus()
      })
    }else{
       this.inputRef.current.focus()
    }
   
  }
  inputChange(e){
    // console.log(e)
    this.setState({
      input:e.target.value
    })
  }
  handleClick(){
    // console.log('this',this)
   
    this.setState({
      like:!this.state.like,
    });
    // this.setState((preState)=>{
    //   return {
    //     like:!preState.like,
    //   }
    // },(state)=>{
    //   console.log('state',state)
    // })
  }
  enterHandle(){
    this.addClick()
  }
  checkBoxChange(index){
    // console.log('state',this.state)
    this.setState((preState)=>{
      return preState.list.map((item,i)=>{
        if(index===i){
          item.isChecked=!item.isChecked
        }
        return item
      })
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState)
    return true
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    console.log('getDerivedStateFromProps',nextProps)
    this.setState({
      list:nextProps.list
    })
    // return{
    //   list:nextProps.list
    // }
  }
  render(){
    // console.log('state',this.state)
    return(
      <div>
        <Input.Group compact>
          <Input  placeholder="请输入" 
            ref={this.inputRef}
            value={this.state.input} onChange={this.inputChange} style={{width:"30%"}}
            onPressEnter={this.enterHandle.bind(this)}
          /> 
          <Button onClick={this.addClick}> add </Button> 
        </Input.Group>
        <ul className="TodoItem"  style={{overflowY:'scroll',maxHeight:'500px'}}>
          {this.state.list.map((item,index)=>
            <li key={index}>
              <Input.Group compact> 
                <Checkbox checked={item.isChecked} size="small" onChange={this.checkBoxChange.bind(this,index)} style={{width:'30px'}}/>{item.title}
              </Input.Group>
              </li>
          )}
        </ul> 
        <span onClick={this.handleClick} style={{cursor: 'pointer'}}>
          {this.state.like?'取消💗':'点赞'}
        </span>
        <br/> 
      </div>
    )   
  }
} 