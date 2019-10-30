import React,{ useContext } from 'react'

import Button from './button'
import TimerContext from '../TimerContext'


function ButtonFaster(){
  const { timer, setTimer } = useContext( TimerContext )

  const changeTimer = (currentTimer) => currentTimer / 2

  return(
    <Button text={"faster"} onClick={ () => {
      setTimer( changeTimer )
    } }/>
  )
}

export default ButtonFaster