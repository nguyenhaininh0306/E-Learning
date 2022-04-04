import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from '../../component/Menu/Menu'
import HomeAdmin from './HomeAdmin'
import SubjectManage from './SubjectManage'
import './Admin.scss'

const Admin = () => {
  return (
    <div className='admin-container'>
      <div className='content-left'>
        <Menu />
      </div>
      <div className='content-right'>
        <Routes>
          <Route path='/admin/*' element={<HomeAdmin />} />
          <Route path='/admin/subject-manage' element={<SubjectManage />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
