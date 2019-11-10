import React from 'react';


const DashboardContent = () => {
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div class="callout callout-info">
                <h4>Задача diff</h4>
                <p>Качено е условие с поправен тестов пример.</p>
            </div>
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
