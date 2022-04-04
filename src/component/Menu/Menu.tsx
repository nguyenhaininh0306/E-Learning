import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import {
  BellOutlined,
  BookOutlined,
  FileTextOutlined,
  HomeOutlined,
  InboxOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Link, NavLink } from 'react-router-dom'
import './Menu.scss'

const Menu = () => {
  const [toggle, setToggle] = useState(false)

  const clickToggle = () => {
    setToggle(!toggle)
    // console.log(toggle)
  }

  return (
    <div className='navbar-container'>
      <div className='navbar-content-one'>
        <div className='logo'>
          <img src={logo} width='74px' height='42px' />
        </div>

        <div className='toggle' onClick={() => clickToggle()}>
          {toggle && toggle === true ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )}
        </div>

        <div className='menu-content'>
          <div className='menu'>
            <ul>
              <li>
                <NavLink to='/admin/*'>
                  <HomeOutlined />
                </NavLink>
              </li>

              <li>
                <NavLink to='/admin/subject-manage'>
                  <BookOutlined />
                </NavLink>
              </li>

              <li>
                <NavLink to='/admin/personal-files'>
                  <FileTextOutlined />
                </NavLink>
              </li>

              <li>
                <NavLink to='/admin/test'>
                  <InboxOutlined />
                </NavLink>
              </li>

              <li>
                <NavLink to='/admin/notification'>
                  <BellOutlined />
                </NavLink>
              </li>

              <li>
                <NavLink to='/admin/setting'>
                  <SettingOutlined />
                </NavLink>
              </li>

              <li>
                <NavLink to='/admin/help'>
                  <MessageOutlined />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {toggle && toggle === true ? (
        <div className='navbar-content-two'>
          <ul className='navbar'>
            <li className='title-navbar'>
              <NavLink to='/admin/*'>
                <HomeOutlined /> Trang chủ
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/subject-manage'>
                <BookOutlined /> Quản lý môn học
              </NavLink>
              <ul className='sub-menu'>
                <li className='title-sub-menu'>
                  <Link to='/admin/subject-manage/subject'>
                    Danh sách môn học
                  </Link>
                </li>
                <li className='title-sub-menu'>
                  <Link to='/admin/subject-manage/approve'>
                    Phê duyệt môn học
                  </Link>
                </li>
              </ul>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/personal-files'>
                <FileTextOutlined /> Tệp riêng tư
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/test'>
                <InboxOutlined /> Ngân hàng đề thi
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/notification'>
                <BellOutlined /> Thông báo
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/setting'>
                <SettingOutlined /> Cài đặt hệ thống
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/help'>
                <MessageOutlined /> Trợ giúp
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Menu
