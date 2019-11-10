import React, { useState } from 'react';
import useAsync from '../useAsync'
import {json, post} from '../rest'
import moment from 'moment'

const ShowQuestion = ({ question }) => {
  return (  
    <div className="box direct-chat direct-chat-primary">
      <div className="box-body">
        <div className="direct-chat-messages" style={{height: 'auto'}}>
          <div className="direct-chat-msg">
            <div className="direct-chat-info clearfix">
              <span className="direct-chat-name pull-left">Въпрос {question.topic==='избери'?'':' за ' +question.topic}</span>
              <span className="direct-chat-timestamp pull-right">
                {moment.unix(question.time / 1000).format("DD MMM YYYY hh:mm:ss")}
              </span>
            </div>
            <div className="direct-chat-text">
              {question.question}
            </div>
          </div>
          {question.answer && 
          <div className="direct-chat-msg right">
            <div className="direct-chat-info clearfix">
              <span className="direct-chat-name pull-right">Отговор</span>
              <span className="direct-chat-timestamp pull-left">
                {moment.unix(question.time / 1000).format("DD MMM YYYY hh:mm:ss")}
              </span>
            </div>
            <div className="direct-chat-text">
              {question.answer}
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

const SendQuestion = ({setShouldUpdate}) => {
  const { value: tasks, loading } = useAsync(json, 'tasks', []);
  const [topic, setTopic] = useState("избери");
  const [question, setQuestion] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (!question || !question.trim().length) return;

    const formData = new FormData();
    formData.append('topic', topic);
    formData.append('question', question);
    formData.append('ip', '127.0.0.1');

    await post(`questions`, formData);
    setQuestion('');
    setShouldUpdate(shouldUpdate => !shouldUpdate);
  }

  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">Задай въпрос</h3>
      </div>
      <div className="box-body">
        <form>
          <div className="form-group">
            <label>Тема</label>
            <select onChange={(e) => setTopic(e.target.value)} value={topic} className="form-control">
              <option>избери</option>
              {
                !loading && tasks.map((t) => {
                  return <option key={t.number} value={t.name}>{t.name}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Въпрос</label>
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="form-control" rows="5" placeholder="Въведи..."></textarea>
          </div>
        </form>
      </div>
      <div className="box-footer">
        <button onClick={e => submit(e)} type="submit" className="btn btn-primary">Изпрати</button>
      </div>
    </div>
  )
}

export {ShowQuestion, SendQuestion}
