import React from 'react'
import moment from 'moment'

function SubmissionOverview({submission}) {
  return (
    <div className="box-body">
      <table style={{tableLayout: 'fixed', wordWrap: 'break-word'}} className="table table-bordered">
        <tbody><tr>
          <th style={{width: '15%'}}>Час</th>
          <th style={{width: '10%'}}>Група</th>
          <th style={{width: '10%'}}>Задача</th>
          <th style={{width: '10%'}}>Точки</th>
          <th style={{width: '55%'}}>Статус</th>
        </tr>
        <tr>
          <td>{moment.unix(submission.upload_time/1000).format("DD MMM YYYY hh:mm:ss")}</td>
          <td>{submission.contest}</td>
          <td>{submission.name}</td>
          <td>{submission.points}</td>
          <td>{submission.verdict}</td>
         </tr>
       </tbody>
      </table>
    </div>
  )
}

function NoGroupScore({tests}) {
  return (
    <div className="box-body">
    <table style={{tableLayout: 'fixed', wordWrap: 'break-word'}} className="table table-bordered table-striped">
      <tbody>
        <tr>
          <th>Стъпка</th>
          <th>Резултат</th>
          <th>Време</th>
        </tr>

        <tr>
          <td>Група 1</td>
          <td style={{backgroundColor: '#ff0000'}}></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

function SubmissionDetails({tests}) {
  console.log(tests);
  return (
    <div className="box-body">
    <table style={{tableLayout: 'fixed', wordWrap: 'break-word'}} className="table table-bordered table-striped">
      <tbody>
        <tr>
          <th>Стъпка</th>
          <th>Резултат</th>
          <th>Време</th>
        </tr>
        {
          tests.map((test, i) => {
            const color = test.verdict==='OK'?'#00FF00':'#ff0000';
            return <tr key={i}>
              <td>{test.name.replace('Test', 'Тест ')}</td>
              <td style={{backgroundColor: color}}>{test.verdict}</td>
              <td>{test.time}</td>
            </tr>
        })}
      </tbody>
    </table>
  </div>
  )
}

function SubmissionDetails2({steps}) {
  console.log(steps);
  return (
    <div className="box-body">
    <table style={{tableLayout: 'fixed', wordWrap: 'break-word'}} className="table table-bordered table-striped">
      <tbody><tr>
        <th>Стъпка</th>
        <th>Резултат</th>
        <th>Време</th>
      </tr>

      <tr>
        <td>Група 1</td>
        <td style={{backgroundColor: '#ff0000'}}></td>
      <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 1</td>
<td>OK</td>
        <td>0.26</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 2</td>
<td>TL</td>
        <td>2.002</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 3</td>
<td>TL</td>
        <td>2.002</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 4</td>
<td>OK</td>
        <td>0.64</td>
      </tr>
      <tr>
        <td>Група 2</td>
        <td style={{backgroundColor: '#ff0000'}}></td>
        <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 5</td>
<td>TL</td>
        <td>2.002</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 6</td>
<td>OK</td>
        <td>0.38</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 7</td>
<td>OK</td>
        <td>0.79</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 8</td>
<td>OK</td>
        <td>0.63</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 9</td>
<td>OK</td>
        <td>0.2</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 10</td>
<td>TL</td>
        <td>2.003</td>
      </tr>
      <tr>
        <td>Група 3</td>
        <td style={{backgroundColor: '#ff0000'}}></td>
        <td></td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 11</td>
<td>OK</td>
        <td>0.45</td>
      </tr>
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;Тест 12</td>
<td>TL</td>
        <td>2.002</td>
      </tr>
    </tbody></table>
  </div>
  )
}

function SubmissionSource({source}) {
  return (
    <pre>{source}</pre>
  )
}

export default {SubmissionOverview, SubmissionDetails, SubmissionSource}
