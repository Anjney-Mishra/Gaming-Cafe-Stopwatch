import React from 'react'

const Legend = () => {
  return (
    <div>
        <ul>
            <li>
            <span style={{height:'10px',width:'10px',background:'lightpink'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 30 Minutes +
            </li>
            <li>
            <span style={{height:'10px',width:'10px',background:'yellow'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 1 Hour +
            </li>
            <li>
            <span style={{height:'10px',width:'10px',background:'orange'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 2 Hour +
            </li>
            <li>
            <span style={{height:'10px',width:'10px',background:'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 3 Hour +
            </li>
        </ul>
    </div>
  )
}

export default Legend