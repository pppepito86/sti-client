import React from 'react';

const AuthContext = React.createContext()

class AuthProvider extends React.Component {

    constructor() {
        super();
        this.state = {isAuth: this.isAuthenticated()};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    isAuthenticated() {
        return localStorage.hasOwnProperty('isAuth');
    }

    async login(username, password) {
        const response = await fetch('http://localhost/api/user', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + window.btoa(username+':'+password)
            }
          });
          const myJson = await response.json();
          console.log(JSON.stringify(myJson));
          
        setTimeout(() => {
            localStorage.setItem('isAuth', true);
            this.setState({isAuth: this.isAuthenticated()});
            console.log(this.state.isAuth);
        }, 1000)
    }

    logout() {
        localStorage.removeItem('isAuth');
        this.setState({isAuth: this.isAuthenticated()});
    }

    render() {
        return (
        <AuthContext.Provider
            value={{
            isAuth: this.state.isAuth,
            login: this.login,
            logout: this.logout
        }}>
            {this.props.children}
        </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, AuthConsumer, useAuth }
