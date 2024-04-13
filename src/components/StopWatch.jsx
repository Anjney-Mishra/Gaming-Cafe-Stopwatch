import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const StopWatch = () => {
    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);
    const [tcolor,setTcolor] = useState("white");
    const interValIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            interValIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current)
            },10);

            return () => {
                clearInterval(interValIdRef.current)
            }
        }
    },[isRunning])

    useEffect(()=>{
        //30 min +
        if(elapsedTime>= 1800000)
        {
            setTcolor("lightpink")
        }
        //1 hr +
        if(elapsedTime>= 3600000)
        {
            setTcolor("yellow")
        }
        //2 hr +
        if(elapsedTime>= 7200000)
        {
            setTcolor("orange")
        }
        //3 hr +
        if(elapsedTime>= 10800000)
        {
            setTcolor("red")
        }
    },[elapsedTime])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
        setTcolor("white")
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000*60*60));
        let minutes = Math.floor(elapsedTime / (1000*60)%60);
        let seconds = Math.floor(elapsedTime / (1000)%60);
        // let milliseconds = Math.floor((elapsedTime % 1000)/10);
        hours = String(hours).padStart(2,"0")
        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0")
        return `${hours}:${minutes}:${seconds}`
    }

  return (
    <div className='flex flex-col gap-2 w-[200px] border p-4 items-center my-2' style={{ backgroundColor: tcolor }}>
        <div className='font-bold text-4xl'>{formatTime()}</div>
        <div className='flex gap-2'>
            <button className='p-2 bg-red-600 text-white rounded-lg hover:bg-red-800' onClick={start}>Start</button>
            <button className='p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600' onClick={stop}>Stop</button>
            <button className='p-2 bg-green-600 text-white rounded-lg hover:bg-green-800' onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch