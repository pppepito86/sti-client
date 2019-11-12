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
            
          </div>

{(contestIsRunning || contestIsFinished) &&
          <div className="col-md-4">
            <p className="text-center">
              <strong>Точки</strong>
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

export default DashboardContent
