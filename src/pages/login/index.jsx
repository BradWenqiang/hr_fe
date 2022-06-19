import React, { Component } from 'react'
import './login.less'

import login_left from './images/login_left.png'
import login_bg from './images/login_bg.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input ,message} from 'antd';
import {reqLogin} from '../../api'



/**
 * 登录的路由组件
 */
export default class index extends Component {
  
  onFinish = async (values) => {
    const {username,password} = values
      const response = await reqLogin(username,password)
      const result = response.data
      if (result.code == 0){
        message.success(result.data)
      }else{
        message.error(result.message)
      }
  };

  validateUsername= (rule, value, callback) =>{
    if (typeof value === 'undefined') {
      callback(new Error('请输入用户名!'))
    }
    if (value === '') {
      callback(new Error('请输入用户名!'))
    } else {
      const reg = /^[A-Za-z0-9_-]{1,32}$/
      if (!reg.test(value)) {
        callback(new Error('用户名只能由字母、数字、下划线和横线连接符组成且，不能超过32字符'))
      } else {
        callback()
      }
    }
  }

  validatePassword= (rule, value, callback) =>{
    if (typeof value === 'undefined') {
      callback(new Error('请输入密码!'))
    }
    if (value === '') {
      callback(new Error('请输入密码!'))
    } else {
      const reg = /^[A-Za-z0-9_-]{1,32}$/
      if (!reg.test(value)) {
        callback(new Error('密码只能由字母、数字、下划线和横线连接符组成，且不能超过32字符'))
      } else {
        callback()
      }
    }
  }

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
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true ,validator:this.validateUsername}]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true,validator:this.validatePassword }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
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
