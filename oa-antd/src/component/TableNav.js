import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import MyForm from './MyForm';

class TableNav extends Component {

    state = {
        modalTitle: '新增',
        visible: false
    };

    handleAdd = () => {
        this.setState({
            modalTitle: '新增',
            visible: true
        })
    };
    handleMod = () => {
        this.setState({
            modalTitle: '修改',
            visible: true
        }, () => {
            let user = Object.assign({}, this.props.peopleChooseObj[0]);
            console.log(user);
            console.log(this.refs.myForm)
        });
    };
    handleDel = () => {
        if(window.confirm('是否删除？')) {
            //调用父组件删除方法
            this.props.delPeopleFun()
        }
    };

    /*modal*/
    showModal = () => {
        this.setState({
            visible: true
        });
    }
    handleOk = () => {
        //验证表单错误与数据
        this.refs.myForm.validateFields((err, values) => {
            if(!err) {
                this.props.handleSetBtn(this.state.modalTitle, values);
                this.setState({
                    visible: false
                });
            }
        })
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
        this.refs.myForm.resetFields();  //重置表单内容
    }
    render() {
        return (
            <div style={{paddingBottom: 20+'px'}}>  {/*jsx文件要求格式*/}
                <Button onClick={this.handleAdd}>新增</Button>{/*方法不能加()，否则会直接调用*/}
                <Button onClick={this.handleMod} disabled={this.props.peopleChooseIndex.length===1? false:true}>修改</Button>{/*需要传递参数时可以使用.bind()*/}
                <Button onClick={this.handleDel} disabled={this.props.peopleChooseIndex.length>0? false:true}>删除</Button>{/*bind第一个参数默认是该函数中的this，无需改变this时可传null*/}

                {/*modal*/}
                <div id="components-form-demo-normal-login">
                    <Modal
                        title={this.state.modalTitle}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <MyForm ref="myForm"/>
                    </Modal>
                </div>

            </div>
        )
    }
}

export default TableNav