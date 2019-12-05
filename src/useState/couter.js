import React,{useState,useEffect} from 'react'
import {Button} from 'antd'
 const Counter = ()=>{
  const [count,setCount] = useState(1)
  useEffect(()=>{ //类似于componentDidMount 和componentDidUpdate
    document.title= `useEffect-${count}`
  })
  return (
    <div>
      <Button onClick={()=>{
        setCount(count+1)
      }}> +</Button>
      <span>{count}</span>
      <Button onClick={()=>{
        setCount(count-1)
      }}>-</Button>
    </div>
  )
}
export default Counter
