import React from 'react'
import Particles from 'react-particles-js';
import { Form, Input, Button, Checkbox } from 'antd';
import {UserOutlined ,LockOutlined} from '@ant-design/icons';
import './login.css'
export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      layout: {
        labelCol: {
          span: 0,
        },
        wrapperCol: {
          span: 24,
        },
      },
      tailLayout: {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      }
    }
  }
     onFinish = (values) => {
      console.log('Success:', values);
      console.log('this',this)
      this.props.history.push('/')
    }
  
   onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }
  render(){
    const {tailLayout,layout} = this.state
    return(
      <div style={{width:"100%",height: '100vh'}}>
        <Particles 
          style={{
            width: '100%',
            height: '100vh',
            backgroundColor: "#000" 
          }}
           params={{
             particles: {
               line_linked: {
                 shadow: {
                   enable: true,
                   color: "#fff",
                   blur: 15,
                   opacity:0.5
                 }
               },
               number: {
                 value: 60,
                 density: {
                   enable: true,
                   value_area: 1000
                 }
               },
               color: {
                 value: "#909399"
               },
               "shape": {
                 "type": "circle",
                 "stroke": {
                   "width": 0,
                   "color": "#000000"
                 },
                 "polygon": {
                   "nb_sides": 8
                 }
               },
               "opacity": {
                 "value": 1,
                 "random": true,
                 "anim": {
                   "enable": true,
                   "speed": 1,
                   "opacity_min": 1,
                   "sync": false
                 }
               },
               "size": {
                 "value": 5,
                 "random": true,
                 "anim": {
                   "enable": false,
                   "speed": 180,
                   "size_min": 0.1,
                   "sync": false
                 }
               },
               "move": {
                 "enable": true,
                 "speed": 6,
                 "direction": "none",
                 "random": true,
                 "straight": false,
                 "out_mode": "out",
                 "bounce": false,
                 "attract": {
                   "enable": false,
                   "rotateX": 600,
                   "rotateY": 1200
                 }
               },
               
             
       
             },
             interactivity: {
               "detect_on": "canvas",
               "events": {
                 "onhover": {
                   "enable": true,
                   "mode": "repulse"
                 }
               },
               "modes": {
                 "grab": {
                   "distance": 100,
                   "line_linked": {
                     "opacity": 1
                   }
                 },
                 "bubble": {
                   "distance": 100,
                   "size": 80,
                   "duration": 2,
                   "opacity": 0.8,
                   "speed": 3
                 },
                 "repulse": {
                   "distance": 150,
                   "duration": 0.4
                 },
                 "push": {
                   "particles_nb": 4
                 },
                 "remove": {
                   "particles_nb": 2
                 }
               }
             },
             retina_detect:true
           }}
           
        >
          
        </Particles>
        <div className="loginContainer">
            <div></div>
            <div >
              <Form
                {...layout}
                className="loginForm"
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish.bind(this)}
                onFinishFailed={this.onFinishFailed.bind(this)}
              >
                <Form.Item
                  // label="用户名"
                  className="itemOnly"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ]}
                >
                  <Input  autoComplete="off" className="borderOnly" bordered={false} placeholder="请输入用户名" prefix={<><UserOutlined className="iconClass"/><div className="separateLine"> |</div></>}/>
                </Form.Item>

                <Form.Item
                  // label="密码"
                  className="itemOnly"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: '请输入密码',
                    },
                  ]}
                >
                  <Input.Password className="borderOnly" bordered={false} placeholder="请输入密码" prefix={<><LockOutlined className="iconClass"/><div className="separateLine"> |</div></>} />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item >
                  <Button type="primary" htmlType="submit" block>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
      </div>
    )
  }
}