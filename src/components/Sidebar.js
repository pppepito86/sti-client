import React from 'react'
import { useParams, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { json } from '../rest'
import useAsync from '../useAsync'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faBook, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons'
import ContestCountdown from './ContestCountdown';
import { useApp } from '../AppContext';

const Sidebar = () => {
  const { tid } = useParams();
  const location = useLocation();
  const { value: tasks, loading } = useAsync(json, 'tasks', []);
  const contestIsRunning = useApp().contestIsRunning;
  const contestIsFinished = useApp().contestIsFinished;
  const unreadQuestions = useApp().unreadQuestions;
  const unreadAnnouncements = useApp().unreadAnnouncements;

  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        
        <ContestCountdown />
        <ul className="sidebar-menu tree" data-widget="tree">      
          <li className="header">МЕНЮ</li>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> &nbsp;<span>Начало</span>
              {unreadAnnouncements > 0 && 
                <span class="pull-right-container">
                  <small class="label pull-right bg-red">new</small>
                </span>
              }
            </Link>
          </li>
          <li className={location.pathname === '/questions' ? 'active' : ''}>
            <Link to="/questions">
              <FontAwesomeIcon icon={faQuestion} /> &nbsp;<span>Въпроси</span>
              {unreadQuestions > 0 && 
                <span class="pull-right-container">
                  <small class="label pull-right bg-red">new</small>
                </span>
              }
            </Link>
          </li>
 
          <li className="header">ЗАДАЧИ</li>
          {
            (contestIsRunning || contestIsFinished) &&
            !loading && tasks.map((t) => {
              return <li key={t.number} className={t.number + "" === tid ? 'active' : ''}>
                <Link to={`/task/${t.number}`}>
                  <FontAwesomeIcon icon={faFile} /> &nbsp;<span>{t.name}</span>
                </Link>
              </li>
          })}
          <li className="header">ДОКУМЕНТАЦИЯ</li>
          <li>
            <Link target="_blank" to="/docs/en/index.html">
              <FontAwesomeIcon icon={faBook} /> &nbsp;<span>C++ Документация</span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
