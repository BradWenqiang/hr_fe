import React, { useEffect } from 'react'
import memoryUtils from '../../utils/memoryUtils'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'



const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3','4'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
export default function Admin() {
  //如果内存中没有user = 当前没登录
  const navigate = useNavigate()
  const user = memoryUtils.user
  useEffect(() => {
    if (!user.userNo) {
      navigate('/login', { replace: true })
    }
  }, [])

  return (
      <Layout style={{height:'100%'}}>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
  )

}
