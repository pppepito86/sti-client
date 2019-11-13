import React from 'react'

function Verdict({verdict}) {
  return (
    <div>
      {
        verdict.slice().split(',').map((v) => {
          const color = v==='OK' ? 'label-success' :
                        v==='?' ? 'label-default' :
                        v === 'waiting' || v==='judging' ? 'label-success' :
                        'label-danger';
          return <span className={`label ${color}`} 
              style={{display: 'inline-block', 
              width: '26px', 
              marginRight: '1px'}}>
            {v}
          </span>
        })

      }
    </div>
  )
}

export default Verdict
