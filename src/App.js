import React, { Component } from 'react'
import { Button } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'


export default class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
      // <div>
      //    <Button type='primary'> Pppp</Button> 
      // </div>
    )


  }
}
