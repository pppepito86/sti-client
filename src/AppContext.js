import React, { useState, useEffect } from 'react';
import useAsync from './useAsync'
import useInterval from './useInterval'
import { json } from './rest'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [now, setNow] = useState(Date.now());
    const [time, setTime] = useState();
    const [contestIsRunning, setContestIsRunning] = useState(false);
    const [contestIsFinished, setContestIsFinished] = useState(false);
    const [unreadQuestions, setUnreadQuestions] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [unreadAnnouncements, setUnreadAnnouncements] = useState(0);
    const [announcements, setAnnouncements] = useState([]);

    const [shouldUpdateTime, setShouldUpdateTime] = useState(false);
    const { value: timeData } = useAsync(json, 'time', [shouldUpdateTime]);

    const [shouldUpdateQuestions, setShouldUpdateQuestions] = useState(false);
    const { value: questionsData } = useAsync(json, 'questions', [shouldUpdateQuestions]);

    const [shouldUpdateAnnouncements, setShouldUpdateAnnouncements] = useState(false);
    const { value: announcementsData } = useAsync(json, 'announcements', [shouldUpdateAnnouncements]);

    function updateTime() {
        setShouldUpdateTime(shouldUpdateTime => !shouldUpdateTime);
    }

    function updateQuestions() {
        setShouldUpdateQuestions(shouldUpdateQuestions => !shouldUpdateQuestions);
    }

    function updateAnnouncements() {
        setShouldUpdateAnnouncements(shouldUpdateAnnouncements => !shouldUpdateAnnouncements);
    }

    useInterval(() => {
        setNow(Date.now());
        updateTime();
        updateQuestions();
        updateAnnouncements();
    }, 10000);
    
    useInterval(() => {
        setContestIsRunning(true);
        setContestIsFinished(false);
    }, time && !contestIsRunning && !contestIsFinished ? time.timeTillStart : null);

    useInterval(() => {
        setContestIsRunning(false);
        setContestIsFinished(true);
    }, time && contestIsRunning ? time.timeTillEnd : null);

    useEffect(() => {
        if (timeData) {
            setTime({...timeData,
                startTime: Date.now() + timeData.timeTillStart,
                endTime: now + timeData.timeTillEnd
            });
            setContestIsRunning(timeData.timeTillStart <= 0 && timeData.timeTillEnd > 0);
            setContestIsFinished(timeData.timeTillEnd <= 0);
        }
    }, [timeData]);

    useEffect(() => {
        if (questionsData) {
            setQuestions(questionsData);
            setUnreadQuestions(questionsData.slice().filter(q => q.answer).filter(q => !q.seen).length);
        }
    }, [questionsData]);

    useEffect(() => {
        if (announcementsData) {
            setAnnouncements(announcementsData);
            setUnreadAnnouncements(announcementsData.slice().filter(a => !a.seen).length);
        }
    }, [announcementsData]);

    return (
        <AppContext.Provider
            value={{
                time: time,
                contestIsRunning: contestIsRunning,
                contestIsFinished: contestIsFinished,
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
