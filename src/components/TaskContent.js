import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import Task from './Task';
import LoadingContent from './LoadingContent';

async function sendRequest(url) {
  const token = localStorage.getItem("token");
  const response = await fetch('http://localhost/api/'+url, {
    headers: {'Authorization': `Basic ${token}`}
  });
  return await response.json();
}

const TaskContent = () => {
  const {tid} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState({submissions: []});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const data = await sendRequest(`tasks/${tid}`);
      setTask(data);
      
      setIsLoading(false);
    };

    fetchData();
  }, [tid]);

  if (isLoading) return <LoadingContent />

  const points = task.submissions.reduce((prev, current) => Math.max(prev, current.points), 0);
  return (
    <div className="content-wrapper">
      <section className="content-header" style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1 style={{display: 'inline-block', verticalAlign: 'top'}}>Задача {tid} - <b>{task.name}</b></h1>
        <div className="progress-group" style={{display: 'inline-block', height: '26px', verticalAlign: 'top', width: '48.5%'}}>
          <span className="progress-text">Точки</span>
          <span className="progress-number"><b>{points}</b>/100</span>

          <div className="progress sm">
            <div className="progress-bar progress-bar-aqua" style={{width: points+'%'}}></div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-6">
            <Task.TaskDescription tid={tid} />
            <Task.TaskLimits time={task.time} memory={task.memory} />
          </div>
          <div className="col-md-6">
            <Task.TaskSubmit />
          </div>
        </div>
        <div className="row">  
          <div className="col-md-12">
            <Task.TaskSubmissions tid={tid} submissions={task.submissions} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default TaskContent
