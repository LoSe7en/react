import React, {Component} from 'react';

import { Table } from 'antd';

//表格配置项
const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

//模拟数据
var data = [];
var len = 50;
for (let i = 0; i < len; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class PeopleList extends Component {
    state = {
        render: true,
        selectedRowKeys: [], // Check here to configure the default column
    };
    onSelectChange = (selectedRowKeys, selectedRows) => {
        this.props.getChooseArr(selectedRowKeys, selectedRows);
        this.setState({ selectedRowKeys });
    };
    setData = (title, people) => {
        if(title === '新增') {
            //调用新增接口
            //调用接口后，重新请求数据，渲染表格

            //此处只作为本地演示
            data.unshift({
                key: ++len,
                name: people.Name,
                age: people.Age,
                address: people.Address
            });
            //修改state，让页面重新渲染，显示新数据
            this.setState({
                render: !this.state.render
            })
        } else {
            console.log()
        }
    };

    delPeople = (index) => {
        //调用后台删除接口
        //调用接口后，重新请求数据，渲染表格
        alert(index+'已删除');
    }

    render() {
        const { selectedRowKeys } = this.state; //对象属性结构
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true
        };
        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        );
    }
}

export default PeopleList