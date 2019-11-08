import React from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { json } from '../rest'
import useAsync from '../useAsync'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faBook } from '@fortawesome/free-solid-svg-icons'
import ContestCountdown from './ContestCountdown';

const Sidebar = () => {
  const { tid } = useParams();
  const { value: tasks, loading } = useAsync(json, 'tasks', []);

  return (
    <aside className="main-sidebar">
      <section className="sidebar">

        <ul className="sidebar-menu tree" data-widget="tree">
          <li className="header">ЗАДАЧИ</li>
          {!loading && tasks.map((t) => {
            return <li key={t.number} className={t.number + "" === tid ? 'active' : ''}>
              <Link to={`/task/${t.number}`}>
                <FontAwesomeIcon icon={faFile} /> &nbsp;<span>{t.name}</span>
              </Link>
            </li>
          })}
          <li className="header">МЕНЮ</li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFile} /> &nbsp;<span>Комуникация</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="/docs/en/index.html">
              <FontAwesomeIcon icon={faBook} /> &nbsp;<span>C++ Документация</span></a>
          </li>
          <li>
            <ContestCountdown />
          </li>
        </ul>
      </section>


    </aside>)
}

export default Sidebar
