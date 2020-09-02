import React from 'react'
import '../Timer/Timer.css'
const TimerButton = (props:any) => {
    return (
        <div className='btn'>
           <button className='button' onClick={props.buttonAction}>{props.buttonValue}</button> 
        </div>
    )
}

export default TimerButton
