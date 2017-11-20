import React, { Component } from 'react';

//引入组件
import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';

//引入bootstrap  --  又受不了丑，又懒得写样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/todo-list.css';

class App extends Component {

    //创建状态机，为了便于管理组件间的值传输，将主要state属性写在共同父组件中
    state = {
        data: [],   //任务数组，没有后台，采用localStorage
        filter: 'all'   //过滤组件，all表示显示全部，component表示已完成，active表示未完成
    };

    //当组件被挂载时，获取本地数据
    componentWillMount() {
        this.getLocalData('all')
    };

    //获取本地数据
    getLocalData = () => {
        this.setState({
            data: (JSON.parse(localStorage.getItem('react-todo-list')) || []).filter((todo) => {
                if(this.state.filter === 'all') {
                    return todo;
                } else if (this.state.filter === 'active') {
                    return !todo.isComponent;
                } else {
                    return todo.isComponent;
                }
            })
        })
    };

    //保存数据到本地
    setLocalData = (data) => {
        this.setState({
            data
        }, () => {
            //保存任务时，为每个对象添加id属性作为标识
            this.state.data.map((todo, index) => {
                return todo.id = index;
            });
            localStorage.setItem('react-todo-list', JSON.stringify(this.state.data));
            this.getLocalData();
        })
    };

    //新增任务
    addMission = (text) => {
        let mission = {
            isComponent: false,  //新增任务的完成状态默认false
            text
        };
        let data = this.state.data;
        data.unshift(mission);
        this.setLocalData(data);
    };

    //删除任务
    delMission = (index) => {
        let data = this.state.data;
        data.splice(index, 1);
        this.setLocalData(data);
    };

    //完成任务
    componentMission = (id) => {
        let data = JSON.parse(localStorage.getItem('react-todo-list'));   //获取本地全部数据
        data.map((todo) => {
            return (todo.id === id) && (todo.isComponent = !todo.isComponent);
        });
        this.setLocalData(data);
    };

    //根据筛选条件显示相应数据
    todoListFilter = (filter) => {
        this.setState({
            filter
        }, () => {
            this.getLocalData();
        })
    };

    render() {
        let {data} = this.state;
        return (
            <div className="container-fluid">
                <TodoHeader />
                <TodoMain
                    addMission={this.addMission}
                    delMission={this.delMission}
                    componentMission={this.componentMission}
                    data={data}
                />
                <TodoFooter data={data} todoListFilter={this.todoListFilter} />
            </div>
        );
    };
}

export default App;
