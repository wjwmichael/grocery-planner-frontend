import {Menu, Icon} from 'antd'
import { Component } from 'react';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const NavBar = ({handleClick, navItems}) => {
    console.log(navItems)
    return (
    <Menu
        onClick={handleClick}
        mode="horizontal"
    >
        {navItems.map(item => {
          return   (
            <Menu.Item key={item.id}>
                <a href={item.link} rel="noopener noreferrer">
                    <Icon type={item.type}/>{item.title}
                </a>
            </Menu.Item>
          );
        })}
    </Menu>
    );
  };
  
  export default NavBar;
