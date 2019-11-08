import React from 'react';
import { useParams } from "react-router";
import Submission from './Submission';
import LoadingContent from './LoadingContent';
import useAsync from '../useAsync'
import { json } from '../rest'

function SubmissionContent() {
  const { tid, sid } = useParams();
  const { value: submission, loading } = useAsync(json, `tasks/${tid}/solutions/${sid}`, [tid, sid]);

  if (loading) return <LoadingContent />

  return (
    <div className="content-wrapper">
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
              <Submission.SubmissionOverview tid={tid} submission={submission} />
              <Submission.SubmissionDetails tests={submission.tests} />
            </div>
            <Submission.SubmissionSource source={submission.source} />
          </section>
        </div>
      </section>
    </div>
  )
}

export default SubmissionContent
