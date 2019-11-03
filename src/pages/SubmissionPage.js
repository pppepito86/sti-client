import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';

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
