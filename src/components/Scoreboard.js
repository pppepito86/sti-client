import React from 'react'
import { withRouter } from "react-router";

function ScoreboardTable() {
  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">Класиране</h3>
      </div>
      <div className="box-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: '10px' }}>#</th>
              <th>Час</th>
              <th>Детайли</th>
              <th>Точки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="/task/2/submission/1">1</a></td>
              <td>03.11.19 14:04:04</td>
              <td>OK,TL,TL,OK,TL,OK,OK,OK,OK,TL,OK,TL,TL,TL,TL,TL,TL,TL,TL,TL</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default withRouter(ScoreboardTable)
