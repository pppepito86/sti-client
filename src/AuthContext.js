import React from 'react';

const AuthContext = React.createContext()

class AuthProvider extends React.Component {

    constructor() {
        this.state = {isAuth: this.isAuthenticated()}
    }

    isAuthenticated() {
        return localStorage.hasOwnProperty('isAuth');
    }

    login() {
        setTimeout(() => {
            localStorage.setItem('isAuth', true);
            this.setState({isAuth: this.isAuthenticated()});
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
            isAuthenticated: this.isAuthenticated,
            login: this.login,
            logout: this.logout
        }}>
            {this.props.children}
        </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
