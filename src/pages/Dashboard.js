import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TaskContent from '../components/TaskContent';
import Footer from '../components/Footer';

class Dashboard extends React.Component {

    componentDidMount() {
        console.log("mounted");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("hereeee");
        console.log(this.props === nextProps);
        return false;
    }

    render() {
        return (
            <div className="wrapper" style={{height: 'auto', minHeight: '100%'}}>
                <Header />
                <Sidebar />
                <TaskContent />
                <Footer />
            </div>
        )
    }
}

export default Dashboard
