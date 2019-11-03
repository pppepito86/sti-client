import React from 'react'
//import { useAuth } from './AuthContext';

function Header() {
    //const logout = useAuth().logout;
    return (
<header className="main-header">
    <a className="logo" href="http://52.59.81.222/">
      <span className="logo-mini"><b>&gt;ЛТИ</b></span>
      <span className="logo-lg">ЛТИ</span>
      
    </a>
    <nav className="navbar navbar-static-top">
      <a href="http://52.59.81.222/user/problem/1#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

	  <div className="logo" style={{width: 'auto', backgroundColor: 'rgba(255, 255, 255, 0)'}}>Иван Иванов Фурнаджиев, E група</div>

      <div className="navbar-custom-menu">

      </div>
    </nav>
  </header>
    )
}

export default Header
