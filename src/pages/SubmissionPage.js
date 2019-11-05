import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SubmissionContent from '../components/SubmissionContent';

const SubmissionPage = () => {
    return (
        <div className="wrapper" style={{height: 'auto', minHeight: '100%'}}>
            <Header />
            <Sidebar />
            <SubmissionContent />

            <Footer />
        </div>
    )
}

export default SubmissionPage
