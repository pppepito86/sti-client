import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import Submission from './Submission';
import LoadingContent from './LoadingContent';

async function sendRequest(url) {
  const token = localStorage.getItem("token");
  const response = await fetch('http://localhost/api/'+url, {
      headers: {'Authorization': `Basic ${token}`}
  });
  return await response.json();
}

function SubmissionContent() {
  const {tid, sid} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [submission, setSubmission] = useState({tests:[], source:''});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const data = await sendRequest(`tasks/${tid}/solutions/${sid}`);
      console.log(data);
      setSubmission(data);
    
      setIsLoading(false);
    };
    fetchData();
  }, [tid, sid]);

  if (isLoading) return <LoadingContent />

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
