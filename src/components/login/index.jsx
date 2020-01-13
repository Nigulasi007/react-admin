import React, { Component } from 'react';

import { Form,Input, Button, Icon } from 'antd';

import logo from './logo.png';

import './index.less';

@Form.create()
class Login extends Component {

 
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="login-section">
          <h3>用户登录</h3>
          <Form className="login-form">
            <Form.Item>
             {getFieldDecorator(
               'username',
               {
                 rules: [
                   {
                     required:true,
                     massage:'用户名不能为空'
                   },
                   {
                      min:4,
                      massage:'用户名必须大于四位数'
                   },
                   {
                      max:15,
                      massage:'用户名必须小于15位'
                   },
                   {
                    pattern:/^\w$/,
                    massage:'用户名只能包字母，数字，下划线'
                   }
                 ]
               }
             )(
                <Input 
                prefix={
                <Icon type='user' style={{color: 'rgba(0,0,0,.25)' }} />
              }
               placeholder="用户名"
               />
             )}
            </Form.Item>
            <Form.Item>
              <Input 
              prefix={
              <Icon type='lock' style={{color: 'rgba(0,0,0,.25)' }} />
            }
             placeholder="密码"
             />
            </Form.Item>
            <Form.Item>
            <Button className="login-form-btn" type='primary'>登录</Button>
            </Form.Item>        
          </Form>
        </section>
      </div> 
    );
  }
}

export default Login;
