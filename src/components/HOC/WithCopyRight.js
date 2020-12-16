import React, { Component,Fragment } from "react";
const WithCopyRight = (component)=>{
  return class WithCopyRight extends Component{
    render(){
      return(
        <Fragment>
          <component {...this.props}/>
          <div>&copy: 2019 &nbsp;react后台管理系统</div>
        </Fragment>
      )
    }
  }
}
export default WithCopyRight