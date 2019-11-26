import React from 'react'
import { withRouter } from "react-router";

function ScoreboardTable() {
  const data = [
    {rank: 1, name: 'Кръстан Асенов Драганов', task1: 80, task2: 75, task3: 100, total: 255},
    {rank: 2, name: 'Кристина Валентинова Стоянова', task1: 100, task2: 20, task3: 100, total: 220},
    {rank: 3, name: 'Теодор Цветалинов Тотев', task1: 100, task2: 10, task3: 100, total: 210},
    {rank: 3, name: 'Борис Владимиров Михов', task1: 100, task2: 10, task3: 100, total: 210},
    {rank: 5, name: 'Георги Георгиев Славчев', task1: 100, task2: 10, task3: 40, total: 150},
    {rank: 6, name: 'Емилиана Иванова Димитрова', task1: 72, task2: 25, task3: 50, total: 147},
    {rank: 7, name: 'Александър Мирославов Гатев', task1: 88, task2: 10, task3: 40, total: 138},
    {rank: 8, name: 'Петър Велиславов Михов', task1: 92, task2: 0, task3: 40, total: 132},
    {rank: 9, name: 'Георги Николаев Илиев', task1: 80, task2: 45, task3: 0, total: 125},
    {rank: 10, name: 'Калоян Георгиев Еленков', task1: 92, task2: 10, task3: 20, total: 122},
    {rank: 11, name: 'Калоян Калинов Димитров', task1: 64, task2: 0, task3: 40, total: 104},
    {rank: 12, name: 'Мария Николаева Дренчева', task1: 64, task2: 25, task3: 0, total: 89},
    {rank: 13, name: 'Мартин Ивов Минков', task1: 76, task2: 0, task3: 10, total: 86},
    {rank: 14, name: 'Огнян Мирославов Йоргов', task1: 72, task2: 0, task3: 10, total: 82},
    {rank: 15, name: 'Богдан Людмилов Люцканов', task1: 72, task2: 0, task3: 0, total: 72},
    {rank: 16, name: 'Калоян Августинов Маринов', task1: 68, task2: 0, task3: 0, total: 68},
    {rank: 17, name: 'Иван Станимиров Атанасов', task1: 56, task2: 10, task3: 0, total: 66},
    {rank: 18, name: 'Мила Борисова Дачева', task1: 64, task2: 0, task3: 0, total: 64},
    {rank: 18, name: 'Лазар Иванов Тодоров', task1: 64, task2: 0, task3: 0, total: 64},
    {rank: 18, name: 'Александър Иванов Коджабашийски', task1: 64, task2: 0, task3: 0, total: 64}
  ];
  return (
    <div className="box">
            <div className="box-header">
              <h3 className="box-title">Класиране</h3>

              <div className="box-tools">
                <div className="input-group input-group-sm hidden-xs" style={{width: '150px'}}>
                  <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

                  <div className="input-group-btn">
                    <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
      <div className="box-body table-responsive no-padding">
              <table className="table table-hover">
                <thead>
                <tr>
                  <th width='10px'></th>
                  <th width='10px'>Място</th>
                  <th>Участник</th>
                  <th width='50px'>З.1</th>
                  <th width='50px'>З.2</th>
                  <th width='50px'>З.3</th>
                  <th width='75px'>Общо</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, i) => {
                  return (
                    <tr>
                    <td style={{padding: '0'}}></td>
                    <td style={{padding: '0'}}><span style={{padding: '0'}}>{row.rank}</span></td>
                    <td style={{padding: '0'}}><span style={{padding: '0'}}>{row.name}</span></td>
                    <ScoreBox points={row.task1} maxPoints={100} />
                    <ScoreBox points={row.task2} maxPoints={100} />
                    <ScoreBox points={row.task3} maxPoints={100} />
                    <ScoreBox points={row.total} maxPoints={300} />
                  </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
    </div>
  )
}

function ScoreBox({points, maxPoints}) {
  var ratio = points*1.0/maxPoints;
  const color = ratio === 1 ? '#4E9A05' :
                ratio > 0.9 ? '#639B04' :
                ratio > 0.8 ? '#789C03' :
                ratio > 0.7 ? '#8E9D02' :
                ratio > 0.6 ? '#A39E01' :
                ratio > 0.5 ? '#B99F00' :
                ratio > 0.4 ? '#C89100' :
                ratio > 0.3 ? '#D17400' :
                ratio > 0.2 ? '#D95700' :
                ratio > 0.1 ? '#E23A00' :
                ratio > 0 ? '#EB1D00' :
                '#F40000';
  return (
    <td style={{padding: '0', whiteSpace: 'nowrap'}}><span className="btn btn-success" style={{fontWeight: 'bold', width: '98%', padding: '0', backgroundColor: color, borderColor: color, color: 'black'}}>{points}</span></td>
  )
}

export default withRouter(ScoreboardTable)
