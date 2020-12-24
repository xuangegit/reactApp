import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'antd'
import {UserOutlined} from '@ant-design/icons'

export default class menu extends Component{
  render(){
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>职位列表</span>
              <NavLink to='/jobManager'></NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <UserOutlined />
              <span>dashbord</span>
              <NavLink to='/dashbord'></NavLink>
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>
                    nav
                    <NavLink to="/home"></NavLink>
                  </span>
                </span>
              }
            >
              <Menu.Item key="6">
                <UserOutlined />
                <span>sub1</span>
                <NavLink to="/home"></NavLink>
              </Menu.Item>
            </Menu.SubMenu>   
      </Menu>
    )
  }
}