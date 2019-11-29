import React from 'react'
import { Layout} from 'antd';
import Menu from './menu'
import './index.css'

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout">
        <Sider breakpoint="xl"
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
            {/* <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> */}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 380,
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