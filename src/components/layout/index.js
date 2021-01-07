import React from 'react'
import { Layout} from 'antd';
import Menu from './menu'
import './index.css'
import  {MenuFoldOutlined,MenuUnfoldOutlined}  from '@ant-design/icons'
// import Icon from '@ant-design/icons'
const loginOutIcon =require('../../svg/loginOut.svg')
// import WithCopyRight from  '../HOC/WithCopyRight'
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
    };
  }
  toggle = (status) => {
    this.setState({
      collapsed: status,
    });
  };
 loginOut = ()=>{
   console.log('this',this)
   localStorage.removeItem('loginToken')
   console.log('window.origin',origin)
    window.location.href = window.origin+'/#/login'
 }
  render() {
    console.log('children',this.props.children)
    const {collapsed} = this.state
    return (
      <Layout className="layout">
        <Sider breakpoint="xl"
            trigger={null} collapsible collapsed={this.state.collapsed}
            collapsedWidth="80"
            onBreakpoint={broken => {
              console.log(broken);
            }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}>
          <div className="logo" />
          <Menu/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
           <div className="flexWrapper">
           {collapsed?<MenuFoldOutlined className="MenuFlodIcon" onClick={this.toggle.bind(this,false)}/> :
            <MenuUnfoldOutlined className="MenuFlodIcon"
             onClick={this.toggle.bind(this,true)}/>}
             <span className="loginOutBtn" onClick={this.loginOut.bind(this)}>
               <img src={loginOutIcon} alt=""></img>
             </span>
           </div>
            
          </Header>
          <Content
            className="app-content"
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 380,
              minWidth: 700
            }}
          >
            {this.props.children}
            
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo