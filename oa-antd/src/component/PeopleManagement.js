import React, {Component} from 'react';

import TableNav from './TableNav';
import PeopleList from './PeopleList';

class PeopleManagement extends Component {

    state = {
        peopleChooseIndex: [],   //人员管理列表中选中的索引
        peopleChooseObj: []    //人员管理列表中选中的数据
    };

    getChooseArr = (index, obj) => {
        this.setState({
            peopleChooseIndex: index,
            peopleChooseObj: obj
        });
        console.log(index);
        console.log(obj);
    };

    getPeople = (title, values) => {
        this.refs.list.setData(title, values);
    };

    //删除方法，由于此处的删除按钮与列表数据对象存储在两个兄弟关系组件中，此处可以用共同的父组件来作为传输桥梁
    delPeopleFun = () => {
        //请求后台，调用删除函数
        alert('删除成功');
    }


    render() {
        const {people, modalTitle, peopleChooseIndex, peopleChooseObj, delPeopleFun} = this.state;
        return (
            <div>
                <TableNav delPeopleFun={delPeopleFun} peopleChooseObj={peopleChooseObj} peopleChooseIndex={peopleChooseIndex} handleSetBtn={this.getPeople}/>
                <PeopleList ref="list" modalTitle={modalTitle} people={people} getChooseArr={this.getChooseArr}/>
            </div>
        );
    }
}

export default PeopleManagement;