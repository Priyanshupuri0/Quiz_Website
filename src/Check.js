import React from 'react'

export default function Check(props) {
  return (
    <div>
        <div className = "Score_holder">{props.checkScore()}</div>
    </div>
  )
}
