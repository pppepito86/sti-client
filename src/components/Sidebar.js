import React, { useState, useEffect } from 'react'
import { useParams} from "react-router";
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faBook } from '@fortawesome/free-solid-svg-icons'

async function sendRequest(url) {
  const token = localStorage.getItem("token");
  const response = await fetch('http://localhost/api/'+url, {
      headers: {'Authorization': `Basic ${token}`}
  });
  return await response.json();
}

function Sidebar() {
  const { tid } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest(`/tasks`);
      console.log(data);
      setTasks(data);
    };
    fetchData();
  }, []);

    return (
<aside className="main-sidebar">
    <section className="sidebar" style={{height: 'auto'}}>

      <ul className="sidebar-menu tree" data-widget="tree">
        <li className="header">ЗАДАЧИ</li>
        {tasks.map((t) => {
          return <li key={t.number}>
            <Link to={`/task/${t.number}`} style={{backgroundColor: '#445566'}}>
              <FontAwesomeIcon icon={faFile} /> &nbsp;<span>{t.name}</span>
            </Link>
          </li>
        })}        
        <li className="header">МЕНЮ</li>
        <li>
          <a href="http://52.59.81.222/user/communication">
          <FontAwesomeIcon icon={faFile} /> &nbsp;<span>Комуникация</span>
          </a>
        </li>
        <li>
	        <a target="_blank" href="/docs/en/index.html">
            <FontAwesomeIcon icon={faBook} /> &nbsp;<span>C++ Документация</span></a>
        </li>
        
        <li> 
        	<div id="timer" style={{color: '#b8c7ce', textAlign: 'center'}}>
            <Countdown date={Date.now() + 20000} daysInHours="true">
              <span>Състезанието приключи</span>
            </Countdown>
          </div> 
        </li>
      </ul>



    </section>

    	
  </aside>)
}

export default Sidebar
