import React, { Component } from 'react';
/*路由*/
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
/*组件（规定大写字母开头，并写在antd上方）*/
import LeftSider from './component/LeftSider';
import PeopleManagement from './component/PeopleManagement';
import WorkLog from './component/WorkLog';

/*antd*/
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;

class App extends Component {
    /*创建状态机*/
    state = {
        collapsed: false
    };
    /*创建点击事件 es箭头函数写法 固定函数this指向*/
    toggle = () => {
        /*修改状态，第二个参数是当状态修改后的回调函数，只有在次函数里才能访问到修改后的状态（react为了提高效率，将所有的状态修改放到render之前，不会按js单线程顺序执行）*/
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Router>
                <Layout id="components-layout-demo-custom-trigger">
                    {/*将自身state通过attr传递给子组件*/}
                    <LeftSider collapsed = {this.state.collapsed}/>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <span>欢迎登陆OA管理系统</span>
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            {/*设置路由显示规则，当hash值满足path时，显示component*/}
                            <Route path="/peopleManagement" component={PeopleManagement} />
                            <Route path="/workLog" component={WorkLog} />
                            <Redirect path="/" to="/peopleManagement" />  {/*路由重定向*/}
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
