import React, { Component } from 'react';

import { Form, Input } from 'antd';
const FormItem = Form.Item;

class MyForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="login-form">
                <FormItem>
                    {getFieldDecorator('Name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input placeholder="Name" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('Age', {
                        rules: [{ required: true, message: 'Please input your Age!' }],
                    })(
                        <Input placeholder="Age" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('Address', {
                        rules: [{ required: true, message: 'Please input your Address!' }],
                    })(
                        <Input placeholder="Address" />
                    )}
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(MyForm);