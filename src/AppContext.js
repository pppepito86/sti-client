import React, { useState, useEffect } from 'react';
import useAsync from './useAsync'
import useInterval from './useInterval'
import { json } from './rest'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [unreadQuestions, setUnreadQuestions] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [unreadAnnouncements, setUnreadAnnouncements] = useState(0);
    const [announcements, setAnnouncements] = useState([]);

    const [shouldUpdateQuestions, setShouldUpdateQuestions] = useState(false);
    const { value: questionsData } = useAsync(json, 'questions', [shouldUpdateQuestions]);

    const [shouldUpdateAnnouncements, setShouldUpdateAnnouncements] = useState(false);
    const { value: announcementsData } = useAsync(json, 'announcements', [shouldUpdateAnnouncements]);

    function updateQuestions() {
        setShouldUpdateQuestions(shouldUpdateQuestions => !shouldUpdateQuestions);
    }

    function updateAnnouncements() {
        setShouldUpdateAnnouncements(shouldUpdateAnnouncements => !shouldUpdateAnnouncements);
    }

    useInterval(() => {
        updateQuestions();
        updateAnnouncements();
    }, 10000);

    useEffect(() => {
        if (questionsData) {
            setQuestions(questionsData);
            setUnreadQuestions(questionsData.slice().filter(q => q.answer).filter(q => !q.seen).length);
        }
    }, [questionsData]);

    useEffect(() => {
        console.log(announcementsData);
        if (announcementsData) {
            setAnnouncements(announcementsData);
            setUnreadAnnouncements(announcementsData.slice().filter(a => !a.seen).length);
        }
    }, [announcementsData]);

    return (
        <AppContext.Provider
            value={{
                questions: questions,
                unreadQuestions: unreadQuestions,
                announcements: announcements,
                unreadAnnouncements: unreadAnnouncements,
                updateQuestions: updateQuestions,
                updateAnnouncements: updateAnnouncements
            }}>
            {children}
        </AppContext.Provider>
    )

}

const useApp = () => React.useContext(AppContext)

export { AppProvider, useApp }
