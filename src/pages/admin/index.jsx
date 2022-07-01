import React, { useEffect } from 'react'
import memoryUtils from '../../utils/memoryUtils'
import { Layout, Menu, message } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'
import logo_png from './images/logo.png'
import { reqMenu } from '../../api'
import './admin.less'


const { Header } = Layout;

// const items1 = ['department', 'department1', 'department2'].map((key) => ({
//   key,
//   label: `${key}`,
// }));


export default function Admin() {

  const itemsList = [];

  const onFinish = async () => {
    const response = await reqMenu()
    
    const result = response.data
    //登录成功跳转
    if (result.code === '200') {
      const authMenuEntityList = result.data.authMenuEntityList
      authMenuEntityList.forEach(element => {
        console.log(element)
        itemsList.push(
          {
            key: element.authMenuId,
            label: element.authMenuName,
          }
        )
      });
      console.log(itemsList)
    } else {
      message.error(result.message)
    }
  };

  onFinish()


console.log("====")
console.log(itemsList)
console.log("====")
  



  //如果内存中没有user = 当前没登录
  const navigate = useNavigate()
  const user = memoryUtils.user
  useEffect(() => {
    if (!user.userNo) {
      navigate('/login', { replace: true })
    }
  }, [])




  const click = (e) => {
    console.log(e);
    navigate(e.key)
  }


  return (
    <div className="admin">
      <Layout className="box">

        <Header className="header">
          <div className="logo">
            <img src={logo_png} alt='logo' />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={itemsList} onClick={click} />
        </Header>



        {/* 制定路由组件呈现的位置 */}
        <Outlet />

      </Layout>
    </div>
  )

}
