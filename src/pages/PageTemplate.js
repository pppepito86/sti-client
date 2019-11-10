import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TaskContent from '../components/TaskContent';
import SubmissionContent from '../components/SubmissionContent';
import PdfContent from '../components/PdfContent';
import ScoreboardContent from '../components/ScoreboardContent';
import DashboardContent from '../components/DashboardContent';
import QuestionsContent from '../components/QuestionsContent';

const PageTemplate = ({ content }) => {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
            {content === 'task' && <TaskContent />}
            {content === 'submission' && <SubmissionContent />}
            {content === 'pdf' && <PdfContent />}
            {content === 'questions' && <QuestionsContent />}
            {content === 'scoreboard' && <ScoreboardContent />}
            {content === 'dashboard' && <DashboardContent />}
            <Footer />
        </div>
    )
}

export default PageTemplate
