import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import MyForm from './MyForm';

class TableNav extends Component {

    state = {
        modalTitle: '新增',
        visible: false,
        myForm: ''
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
            if(this.state.myForm) {
                let user = Object.assign({}, this.props.peopleChooseObj[0]);
                this.state.myForm.setFieldsValue({
                    Name: user.name,
                    Age: user.age,
                    Address: user.address
                })
            }
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
        this.state.myForm.resetFields();  //重置表单内容
    }

    //当ref被挂载时调用
    //此时基于antd的modal隐藏机制，如果首次visible为false，则该元素不会被渲染，
    //所以只有当modal第一次显示时，该form组件才会被挂载。
    //setState的回调函数中再次调用修改方法，是为了防止网页加载完成后，直接点击修改按钮，弹框不会赋值的问题。
    refForm = (dom) => {
        this.setState({
            myForm: dom
        }, () => {
            if(this.state.visible && this.state.modalTitle === '修改') {
                this.handleMod();
            }
        })
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
                        <MyForm ref={this.refForm}/>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default TableNav