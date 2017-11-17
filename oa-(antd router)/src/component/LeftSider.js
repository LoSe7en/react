import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
/*antd*/
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
class LeftSider extends Component {
    render() {
        return(
            <Sider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                {/*通过this.props.attr 来获取父组件传来的属性*/}
                <div className="logo">{this.props.collapsed? 'OA':'OA管理系统'}</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <NavLink className="menu-nav" activeClassName="menuActive" to="/peopleManagement">
                            <Icon type="user" />
                            <span>人员管理</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink className="menu-nav" activeClassName="menuActive" to="/workLog">
                            <Icon type="video-camera" />
                            <span>工作日志</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default LeftSider;