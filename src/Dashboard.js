import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

const Dashboard = () => {
    return (
        <div className="wrapper" style={{height: 'auto', minHeight: '100%'}}>
            <Header />
            <Sidebar />
            <Content />
            <Footer />
        </div>
    )
}

export default Dashboard
