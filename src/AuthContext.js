import React from 'react';

const AuthContext = React.createContext()

class AuthProvider extends React.Component {

    constructor() {
        super();
        this.state = {isAuth: localStorage.hasOwnProperty('token')};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async login(username, password) {
        const token = window.btoa(username+':'+password);
        const response = await fetch('http://localhost/api/user', {
            headers: {'Authorization': `Basic ${token}`}
        });
        const user = await response.json();
        console.log(JSON.stringify(user));
        
        localStorage.setItem("name", user.display_name);
        localStorage.setItem("contest", user.contest);
        localStorage.setItem("token", token);
        this.setState({isAuth: true});
    }

    logout() {
        localStorage.removeItem('display_name');
        localStorage.removeItem('contest');
        localStorage.removeItem('token');
        this.setState({isAuth: false});
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

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
