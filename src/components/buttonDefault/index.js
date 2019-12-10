import React,{ useContext } from 'react'

import Button from '../button'
import TimerContext from '../../TimerContext'

function ButtonDefault(){
  const [ timer, setTimer] = useContext(TimerContext)

  return(
    <Button
      text={"Default"}
      bgColor='blue'
      textColor='white'
      onClick={() => {
        setTimer(1000)
      }}
    />
  )
}

export default ButtonDefault
