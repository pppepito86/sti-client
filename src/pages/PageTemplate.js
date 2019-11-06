import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class PageTemplate extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Sidebar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default PageTemplate
