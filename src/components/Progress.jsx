import React from 'react'
import { DoneButton, LiStyle, UlStyle } from '../style'

const Progress = ({id, text, handleDone}) => {
    console.log("Progress: ")
  return (
    <div>
      <UlStyle>
        <LiStyle key={id}>
          {text}
          <DoneButton className='done-button' onClick={() => handleDone(id)}>Done</DoneButton>
        </LiStyle>
      </UlStyle>
    </div>
  )
}

export default React.memo(Progress)