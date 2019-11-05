import React from 'react'
import Submission from './Submission';

function SubmissionContent() {
  return (
    <div className="content-wrapper" style={{minHeight: '547px'}}>
      <section className="content-header">
        <h1>
          Решение
          <small>детайли</small>
        </h1>
      </section>
  
      <section className="content">
        <div className="row">
          <section className="col-lg-12 connectedSortable ui-sortable">
            <div className="box">
              <Submission.SubmissionOverview />
              <Submission.SubmissionDetails />
            </div>
            <Submission.SubmissionSource />
          </section>
        </div>
      </section>
    </div>
  )
}

export default SubmissionContent
