import React from 'react'
import { LiStyle, ProgressButton, UlStyle } from '../style'

const TodoTask = ({id, text, handleToProgress}) => {
    console.log("Task: " + id)

  return (
    <div>
      <UlStyle>
        <LiStyle key={id}>
          {text}
          <ProgressButton className='progress-button' onClick={() => handleToProgress(id)}>To Progress </ProgressButton>
        </LiStyle>
      </UlStyle>
    </div>
  )
}

export default React.memo(TodoTask)