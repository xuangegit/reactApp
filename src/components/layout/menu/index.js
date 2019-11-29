import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Icon,Menu} from 'antd'

export default class menu extends Component{
  render(){
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>首页</span>
              <NavLink to='/home'></NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>dashbord</span>
              <NavLink to='/dashbord'></NavLink>
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="setting" />
                  <span>
                    nav
                    <NavLink to="/home"></NavLink>
                  </span>
                </span>
              }
            >
              <Menu.Item key="6">
                <Icon type="video-camera" />
                <span>sub1</span>
                <NavLink to="/dashbord"></NavLink>
              </Menu.Item>
            </Menu.SubMenu>   
      </Menu>
    )
  }
}