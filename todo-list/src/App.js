import React, { Component } from 'react';

//引入组件
import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';

//引入bootstrap  --  又受不了丑，又懒得写样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/todo-list.css';

var list = [
    {text: 'aaaa'},
    {text: 'bbbb'}
];

class App extends Component {

    //创建状态机，为了便于管理组件间的值传输，将主要state属性写在共同父组件中
    state = {
        data: []   //任务数组，没有后台，采用localStorage
    };

    //当组件被挂载时，获取本地数据
    componentWillMount() {
        this.getLocalData()
    };

    //获取本地数据
    getLocalData = () => {
        this.setState({
            data: JSON.parse(localStorage.getItem('react-todo-list')) || []
        })
    };


    //保存数据到本地
    setLocalData = (mission) => {
        let data = this.state.data;
        data.push(mission);
        this.setState({
            data
        }, () => {
            localStorage.setItem('react-todo-list', JSON.stringify(this.state.data))
        })
    };

    //新增任务
    addMission = (text) => {
        let mission = {
            isComponent: false,  //新增任务的完成状态默认false
            text
        };
        this.setLocalData(mission)
    };

    render() {
        let {data} = this.state;
        console.log(this.state.data);
        console.log(list);
        return (
            <div className="container-fluid">
                <TodoHeader />
                <TodoMain
                    addMission={this.addMission}
                    data={list}
                />
                <TodoFooter />
            </div>
        );
    };
}

export default App;
