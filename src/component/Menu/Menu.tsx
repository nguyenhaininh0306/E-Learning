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
                <HomeOutlined /> Trang ch???
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/subject-manage'>
                <BookOutlined /> Qu???n l?? m??n h???c
              </NavLink>
              <ul className='sub-menu'>
                <li className='title-sub-menu'>
                  <Link to='/admin/subject-manage/subject'>
                    Danh s??ch m??n h???c
                  </Link>
                </li>
                <li className='title-sub-menu'>
                  <Link to='/admin/subject-manage/approve'>
                    Ph?? duy???t m??n h???c
                  </Link>
                </li>
              </ul>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/personal-files'>
                <FileTextOutlined /> T???p ri??ng t??
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/test'>
                <InboxOutlined /> Ng??n h??ng ????? thi
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/notification'>
                <BellOutlined /> Th??ng b??o
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/setting'>
                <SettingOutlined /> C??i ?????t h??? th???ng
              </NavLink>
            </li>

            <li className='title-navbar'>
              <NavLink to='/admin/help'>
                <MessageOutlined /> Tr??? gi??p
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
