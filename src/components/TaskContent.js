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
      console.log(data);
      setTask(data);
      
      setIsLoading(false);
    };

    fetchData();
  }, [tid]);

  if (isLoading) return <LoadingContent />
  
  return (
    <div className="content-wrapper" style={{minHeight: '498px'}}>
      <section className="content-header">
        <h1>Задача {tid} - <b>{task.name}</b></h1>
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
