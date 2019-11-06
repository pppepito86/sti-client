import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class PageTemplate extends React.Component {
    render() {
        return (
            <div className="wrapper" style={{height: 'auto', minHeight: '100%'}}>
                <Header />
                <Sidebar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default PageTemplate
