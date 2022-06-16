import React, { Component } from 'react'
import './login.less'

import login_left from './images/login_left.png'
import login_bg from './images/login_bg.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';


/**
 * 登录的路由组件
 */
export default class index extends Component {
  render() {
    return (
      <div className='login'>
        <div className='login-left'>
          <div className='img_bg' >

            <div className='top'>
              <p className='h1'> Star HR</p>
              <p className='h2'> 星星之火，可以燎原</p>
            </div>

            <div className='middle'>
              <img className='img' src={login_left} alt='login_left' />
            </div>

            <div className='bottom' />

          </div>


        </div>
        <div className='login-right'>
          <div className='top' />
          <div className='main-box'>
            <p className='h1'> 用户登录</p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
               
              </Form.Item>
            </Form>
          </div>

        </div>

        <div className='login_foot'>
          <img className='img' src={login_bg} alt='login_foot' />
        </div>


      </div>
    )
  }
}
