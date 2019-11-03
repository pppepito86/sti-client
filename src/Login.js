import React from 'react'
import { AuthConsumer, AuthProvider } from './AuthContext'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //const { isAuth } = this.props;
        return  (
            <AuthConsumer>
                {({login}) =>
            <div className="container">
              <h2>Landing Page</h2>
              <button onClick={login}>Login</button>
            </div>
                }
            </AuthConsumer>
            
          )
    }
}

export default Login
