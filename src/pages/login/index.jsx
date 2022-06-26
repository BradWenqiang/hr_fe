import React from 'react'
import './login.less'
import login_left from './images/login_left.png'
import login_bg from './images/login_bg.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import { reqLogin } from '../../api'
import { useNavigate } from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'




/**
 * 登录的路由组件
 */
export default function Login() {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    const { username, password } = values
    const response = await reqLogin(username, password)
    const result = response.data
    //登录成功跳转
    if (result.code === '200') {
      message.success('登录成功')
      //存储登录的用户
      const user = result.data
      memoryUtils.user = user
      storageUtils.saveUser(user)
      navigate('/admin', { replace: true })
    } else {
      message.error(result.message)
    }

  };

  const validateUsername = (rule, value, callback) => {
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

  const validatePassword = (rule, value, callback) => {
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
            onFinish={onFinish}
          >

            <Form.Item
              name="username"
              rules={[{ required: true, validator: validateUsername }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, validator: validatePassword }]}
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