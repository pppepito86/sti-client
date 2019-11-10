import React, { useState }  from 'react';
import useAsync from '../useAsync'
import useInterval from '../useInterval'
import { json } from '../rest'

const DashboardContent = () => {
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const { value: announcements } = useAsync(json, 'announcements', [shouldUpdate]);

  useInterval(() => {
    setShouldUpdate(shouldUpdate => !shouldUpdate);
  }, 10000);

  return (
    <div className="content-wrapper" style={{ minHeight: '550px' }}>
      <section className="content">
        <div className="row">
          <div className="col-md-8">
            {
              announcements && announcements.slice().reverse().map((a) => {
                return <div key={a.id} className="callout callout-info">
                  <h4>{a.topic}</h4>
                  <p>{a.announcement}</p>
                </div>
            })}
            
          </div>

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






        </div>
      </section>
    </div>
  )
}

export default DashboardContent
