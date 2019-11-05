import React from 'react'
import { useAuth } from '../AuthContext';
import moment from 'moment'

function TaskDescription({tid}) {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">Условие</h3>
      </div>
      <div className="box-body">
        <a target="_blank" className="btn btn-info" href={`http://localhost/task/${tid}/pdf?download=false`} >Отвори</a>
        <a style={{marginLeft: '3px'}} target="_blank" className="btn btn-info" href="http://52.59.81.222/user/problem/1/pdf?download=true">Изтегли</a>
      </div>
    </div>
  )
}

function TaskLimits({time, memory}) {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">Ограничения</h3>
      </div>
      <div className="box-body">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Време</td>
              <td>{time} s</td>
            </tr>
            <tr>
              <td>Памет</td>
              <td>{memory} MB</td>
            </tr>
          </tbody>
        </table>          
      </div>
    </div>
  )
}

function TaskSubmit() {
  return (
    <div className="nav-tabs-custom" style={{borderTop: '3px solid #d2d6de', borderBottom: '1px solid #f4f4f4'}}>
    <ul className="nav nav-tabs pull-right">
      <li className="active" style={{marginTop:'-3px'}}><a href="http://52.59.81.222/user/problem/1#file-upload" data-toggle="tab">Файл</a></li>
      <li style={{marginTop: '-3px'}}><a href="http://52.59.81.222/user/problem/1#source-upload" data-toggle="tab">Код</a></li>
      <li className="pull-left header" style={{fontSize: '18px'}}>Предай решение</li>
    </ul>
    <div className="tab-content no-padding">
      <div className="tab-pane active" id="file-upload" style={{position: 'relative'}}>

      <div className="box-body">
    <form role="form" method="post" encType="multipart/form-data" action="http://52.59.81.222/user/submit-file">
          <div className="box-body">
            
             <input type="hidden" className="form-control" name="problemNumber" id="problemNumber" value="1" />
                
            <div className="form-group">
              <label htmlFor="file">Файл</label>
              <input type="file" name="file" id="file" accept=".cpp,.c" />
            </div>
    <input type="hidden" name="ip" id="ip" value="92ed92a0-4e42-4b8e-b686-a6eb0c1d80c9.local" />
          </div>

          <div className="box-footer">
            <button type="submit" onClick={useAuth().logout} id="submitcodebutton2" className="btn btn-primary">Предай</button>
            <span id="timetosubmit2" style={{marginLeft: '5px'}}></span>
          </div>
          
          
        </form> 
      </div>
  

</div>
      <div className="tab-pane" id="source-upload" style={{position: 'relative', height: 'auto'}}>

      <div className="box-body">
    <form role="form" method="post" action="http://52.59.81.222/user/submit-code">
          <div className="box-body">
            
            <input type="hidden" className="form-control" name="problemNumber" id="problemNumber" value="1" />
                
            <div className="form-group">
              <textarea name="code" placeholder="Поставете вашият код" maxLength="65536" style={{width: '100%', height: '80px', fontSize: '14px', lineHeight: '18px', border: '1px solid #dddddd', padding: '10px'}}></textarea>

            </div>
    <input type="hidden" name="ip" id="ip" value="92ed92a0-4e42-4b8e-b686-a6eb0c1d80c9.local" />
          </div>

          <div className="box-footer">
            <button type="submit" id="submitcodebutton3" className="btn btn-primary">Предай</button>
            <span id="timetosubmit3" style={{marginLeft: '5px'}}></span>
          </div>
        </form> 
      </div>


</div>
    </div>
  </div>

  )
}

function TaskSubmissions({ tid, submissions }) {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">Предадени решения{submissions.size}</h3>
      </div>
      <div className="box-body">
      <table className="table table-bordered" style={{tableLayout: 'fixed', wordWrap: 'break-word'}}>
        <thead>
          <tr>
            <th style={{width: '10px'}}>#</th>
            <th style={{width:'15%'}}>Час</th>
            <th style={{width:'65%'}}>Детайли</th>
            <th style={{width:'10%'}}>Точки</th>
          </tr>
        </thead>
          <tbody>
            {
              submissions.map((s, i) => {
                return <tr key={i}>
                  <td><a href={`/task/${tid}/submission/${submissions.length-i}`}>{submissions.length-i}</a></td>
                  <td>{moment.unix(s.upload_time/1000).format("DD MMM YYYY hh:mm:ss")}</td>
                  <td>{s.verdict}</td>
                  <td>{s.points}</td>
                </tr>
            })}
          </tbody>
        </table>          
      </div>
    </div>
  )
}

export default {TaskDescription, TaskLimits, TaskSubmit, TaskSubmissions}