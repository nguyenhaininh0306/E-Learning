import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import 'antd/dist/antd.css'
import './Login.scss'

const Login = () => {
  let navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Success:', values)
    navigate('/admin/*')
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <div className='container'>
        <div className='login'>Đăng nhập</div>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          layout='vertical'
        >
          <Form.Item label='Tên đăng nhập' name='username'>
            <Input prefix={<UserOutlined className='' />} />
          </Form.Item>

          <Form.Item label='Mật khẩu' name='password'>
            <Input type='password' prefix={<LockOutlined className='' />} />
          </Form.Item>

          <Form.Item>
            <a className='login-form-forgot' href=''>
              <div className='forgot-password'>Quên mật khẩu?</div>
            </a>
          </Form.Item>

          <Form.Item
            className='btn-container'
            wrapperCol={{ offset: 0, span: 16 }}
          >
            <Button className='btn' type='primary' htmlType='submit'>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Login
