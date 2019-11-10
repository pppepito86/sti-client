import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOutAlt, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../AuthContext'
import { useApp } from '../AppContext';

function Header() {
  const unread = useApp().unread;

  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <span className="logo-mini"><b>СТИ</b></span>
        <span className="logo-lg">СТИ</span>
      </Link>
      <nav className="navbar navbar-static-top">
        <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <FontAwesomeIcon  icon={faBars} />
          <span className="sr-only">Toggle navigation</span>
        </a>

        <div className="logo" style={{width: 'auto', backgroundColor: 'rgba(255, 255, 255, 0)'}}>
          {localStorage.getItem("name")}, {localStorage.getItem("contest")} група
        </div>

        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/questions"><FontAwesomeIcon icon={faEnvelope} />
                {unread > 0 && <span className="label label-danger">
                  {unread}
                </span>}
              </Link>
            </li>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faBell} /><span className="label label-danger"></span></Link>
            </li>
            <li>
              <Link to="/" onClick={useAuth().logout}><FontAwesomeIcon icon={faSignOutAlt} /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
