import React from 'react';
import { useApp } from '../AppContext';
import {post} from '../rest';

const DashboardContent = () => {
  const announcements = useApp().announcements;
  const contestIsRunning = useApp().contestIsRunning;
  const contestIsFinished = useApp().contestIsFinished;

  return (
    <div className="content-wrapper" style={{ minHeight: '550px' }}>
      <section className="content">
        <div className="row">
          <div className="col-md-8">
            {
              announcements.slice().reverse().map((a) => {
                return <div key={a.id} className="callout callout-info">
                  {a.topic && <h4>{a.topic}</h4>}
                  <p>{a.announcement}</p>
                  {!a.seen && <SeenAnnouncement id={a.id} />}
                </div>
            })}
            

            <TasksInfo />

          </div>

{(contestIsRunning || contestIsFinished) &&
          <div className="col-md-4">
            <p className="text-center">
              <strong>Видими точки</strong>
            </p>

            <div className="progress-group">
              <span className="progress-text">bills</span>
              <span className="progress-number"><b>80</b>/100</span>

              <div className="progress sm">
                <div className="progress-bar progress-bar-aqua" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="progress-group">
              <span className="progress-text">sequence</span>
              <span className="progress-number"><b>31</b>/100</span>

              <div className="progress sm">
                <div className="progress-bar progress-bar-red" style={{ width: '31%' }}></div>
              </div>
            </div>
            <div className="progress-group">
              <span className="progress-text">diff</span>
              <span className="progress-number"><b>100</b>/100</span>

              <div className="progress sm">
                <div className="progress-bar progress-bar-green" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="progress-group">
              <span className="progress-text">общо</span>
              <span className="progress-number"><b>211</b>/300</span>

              <div className="progress sm">
                <div className="progress-bar progress-bar-yellow" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
}





        </div>
      </section>
    </div>
  )
}

const SeenAnnouncement = ({id}) => {
  const updateAnnouncements = useApp().updateAnnouncements;

  const markAnnouncementSeen = async () => {
    const formData = new FormData();
    formData.append('id', id);

    await post(`announcements/seen`, formData);
    updateAnnouncements();
  }

  return (
    <div>
      <input name={id} onClick={markAnnouncementSeen} type="checkbox" className="checkbox pull-left" />
      &nbsp;Прочетох
      </div>

  )
}

function TasksInfo() {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">Задачи</h3>
      </div>
      <div className="box-body table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Задача</th>
              <th>Време</th>
              <th>Памет</th>
              <th>Фийдбек</th>
              <th>Събмити</th>
            </tr>  
          </thead>
          <tbody>
            <tr>
              <td>stairs</td>
              <td>{1} s</td>
              <td>{100} MB</td>
              <td>25/100</td>
              <td>-</td>
            </tr>
            <tr>
              <td>sign</td>
              <td>{0.3} s</td>
              <td>{128} MB</td>
              <td>40/100</td>
              <td>-</td>
            </tr>
            <tr>
              <td>oval</td>
              <td>{0.1} s</td>
              <td>{356} MB</td>
              <td>10/100</td>
              <td>-</td>
            </tr>
            <tr>
              <td>общо</td>
              <td>-</td>
              <td>-</td>
              <td>75/300</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardContent
