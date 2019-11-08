import React, { useState } from 'react';
import { useAuth } from '../AuthContext'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuth().login;

  const handleLogin = React.useCallback((e) => {
    e.preventDefault();
    login(username, password)
  }, [login, username, password])

  return (
    <div style={{ height: '100%', background: '#d2d6de', transition: 'none', OTransition: 'none', WebkitTransition: 'none' }}>
      <div className="login-box" style={{ margin: '0 auto', paddingTop: '7%' }}>
        <div className="login-logo">
          <a href="http://18.185.92.223/index2.html"><b>Летен турнир по информатика</b></a>
        </div>
        <div className="login-box-body">

          <form method="post" action="">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Име" name="username" value={username} />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Парола" name="password" value={password} />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <input type="hidden" name="ip" id="ip" value="382c5697-ca1c-47f8-af60-79156c17bb5a.local" />
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                </div>
              </div>
              <div className="col-xs-4">
                <button onClick={handleLogin} className="btn btn-primary btn-block btn-flat">Вход</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Login
