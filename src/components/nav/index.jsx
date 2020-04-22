import React, { Component } from 'react'
import './index.less'
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
const { SubMenu } = Menu;
const menuList=require('./../../config/menuConfig').default
export default class Nav extends Component {
    state={
        MenuTree:""
    }
    componentDidMount(){
        const MenuList=this.handleMenu(menuList)
        this.setState({
            MenuTree:MenuList
        })
    }
    //菜单渲染
    handleMenu=(data)=>{
        return  data.map(item=>{
            if(item.children){
            return <SubMenu title={item.title} key={item.key}>{this.handleMenu(item.children)}</SubMenu>
            }
            return <Menu.Item key={item.key}><NavLink to={"/admin"+item.key}>{item.title}</NavLink></Menu.Item>
        })
    }
    render() {
        return (
            <div className="c-nav">
                <div className="logo">
                <img src="./assets/logo-ant.svg" alt=""/>
                <h2>Imooc mock</h2>
                </div>
               
                <Menu  mode="vertical" theme="dark">
                    {this.state.MenuTree}
                </Menu>,
            </div>
        )
    }
}
