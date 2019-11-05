import React from 'react'
import Task from './Task';

class TaskContent extends React.Component {


  render() {
    return (
      <div className="content-wrapper" style={{minHeight: '498px'}}>
      <section className="content-header">
        <h1>
          Задача <b>test</b>
        </h1>
      </section>


      <section className="content">
        <div className="row">
          <div className="col-md-6">
<Task.TaskDescription />
<Task.TaskLimits />
          </div>
          <div className="col-md-6">
<Task.TaskSubmit />

          </div>
        </div>

        <div className="row">  
           <div className="col-md-12">
             <Task.TaskSubmissions />
        </div>
      </div>
      </section>

      </div>
    );
  }
}

export default TaskContent
