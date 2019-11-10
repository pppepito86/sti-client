import React, { useState }  from 'react';
import { ShowQuestion, SendQuestion } from './Questions';
import useAsync from '../useAsync'
import useInterval from '../useInterval'
import { json } from '../rest'

const QuestionsContent = () => {
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const { value: questions } = useAsync(json, 'questions', [shouldUpdate]);

  useInterval(() => {
    setShouldUpdate(shouldUpdate => !shouldUpdate);
  }, 10000);

  return (
    <div className="content-wrapper" style={{ minHeight: '550px' }}>
      <section className="content">
        <div className="row">
          <div className="col-md-8">
            {
              questions && questions.slice().reverse().map((q) => {
                return <ShowQuestion key={q.id} question={q} setShouldUpdate={setShouldUpdate} />
            })}
          </div>
          <div className="col-md-4">
            <SendQuestion setShouldUpdate={setShouldUpdate} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuestionsContent
