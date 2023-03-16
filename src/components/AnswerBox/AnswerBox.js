import React from 'react'
import './AnswerBox.css'

function AnswerBox({title,color,bgColor}) {
  return (
    <div style={{backgroundColor: bgColor}} className='Answer-container'>
        <p style={{color: color}} className='Answer-heading'>{title}</p>
        <p className='Answer-heading-link'> View the answer explanation</p>

    </div>
  )
}

export default AnswerBox