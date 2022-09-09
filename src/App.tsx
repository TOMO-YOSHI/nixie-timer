import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Nixie_0 from './nixie_0_9/nixie_0.png';
import Nixie_1 from './nixie_0_9/nixie_1.png';
import Nixie_2 from './nixie_0_9/nixie_2.png';
import Nixie_3 from './nixie_0_9/nixie_3.png';
import Nixie_4 from './nixie_0_9/nixie_4.png';
import Nixie_5 from './nixie_0_9/nixie_5.png';
import Nixie_6 from './nixie_0_9/nixie_6.png';
import Nixie_7 from './nixie_0_9/nixie_7.png';
import Nixie_8 from './nixie_0_9/nixie_8.png';
import Nixie_9 from './nixie_0_9/nixie_9.png';
import Nixie_Colon from './nixie_0_9/nixie_colon.png';

function App() {
  const [time, setTime] = useState(0);
  const [stopIntervel, setStopInterval] = useState<any>(null);
  const [hou, setHou] = useState<number | string>(0)
  const [min, setMin] = useState<number | string>(0)
  const [sec, setSec] = useState<number | string>(0)
  const [milliSec, setMilliSec] = useState<number | string>(0);
  const [timerOn, setTimerOn] = useState(false);

  const startTimer = useCallback(
    () => {
      if(timerOn) return;
      setTimerOn(true);
      const stop = setInterval(() => {
        setTime(prev => prev + 1);
      }, 10)
      setStopInterval(stop);
    },
    [timerOn],
  )

  const stopTimer = useCallback(
    () => {
      setTimerOn(false);
      clearInterval(stopIntervel);
    },
    [stopIntervel],
  )

  useEffect(()=>{
    // console.log(time);
    let milliseconds = time;
    // Seconds
    let seconds = Math.floor(milliseconds / 100);
    // console.log('milliseconds', milliseconds - seconds * 100);
    milliseconds = milliseconds - seconds * 100;
    // console.log('seconds', seconds);
    // Minutes
    let minutes = Math.floor(seconds / 60);
    // console.log('seconds', seconds - minutes * 60);
    seconds = seconds - minutes * 60;
    // Hours
    let hours = Math.floor(minutes / 60);
    // console.log('minutes', minutes - hours * 60);
    minutes = minutes - hours * 60;
    // console.log('hours', hours);
    setMilliSec(milliseconds < 10 ? "0" + milliseconds : milliseconds);
    setSec(seconds < 10 ? "0" + seconds : seconds);
    setMin(minutes < 10 ? "0" + minutes : minutes);
    setHou(hours < 10 ? "0" + hours : hours);
  }, [time])

  useEffect(()=>{
    console.log(`${hou}:${min}:${sec}:${milliSec}`);
  }, [hou, min, sec, milliSec])

  return (
    <div className="App">
      <div>
        <ul>
          <li className="hours">
            <img src={
                hou >= 90 ?
                  Nixie_9 :
                hou < 90 && hou >= 80 ?
                  Nixie_8 :
                hou < 80 && hou >= 70 ?
                  Nixie_7 :
                hou < 70 && hou >= 60 ?
                  Nixie_6 :
                hou < 60 && hou >= 50 ?
                  Nixie_5 :
                hou < 50 && hou >= 40 ?
                  Nixie_4 :
                hou < 40 && hou >= 30 ?
                  Nixie_3 :
                hou < 30 && hou >= 20 ?
                  Nixie_2 :
                hou < 20 && hou >= 10 ?
                  Nixie_1 :
                hou < 10 && hou >= 0 ?
                  Nixie_0 : "null"
            } alt="nixie" />
          </li>
          <li className="hours">
            <img src={
              parseInt(hou.toString()[1]) === 9 ?
                Nixie_9 :
              parseInt(hou.toString()[1]) === 8 ?
                Nixie_8 :
              parseInt(hou.toString()[1]) === 7 ?
                Nixie_7 :
              parseInt(hou.toString()[1]) === 6 ?
                Nixie_6 :
              parseInt(hou.toString()[1]) === 5 ?
                Nixie_5 :
              parseInt(hou.toString()[1]) === 4 ?
                Nixie_4 :
              parseInt(hou.toString()[1]) === 3 ?
                Nixie_3 :
              parseInt(hou.toString()[1]) === 2 ?
                Nixie_2 :
              parseInt(hou.toString()[1]) === 1 ?
                Nixie_1 :
              parseInt(hou.toString()[1]) === 0 ?
                Nixie_0 : Nixie_0
            } alt="nixie" />
          </li>
          <li className="hours">
            <img src={Nixie_Colon} alt="nixie_colon" />
          </li>
          <li>
            <img src={
              min < 60 && min >= 50 ?
                Nixie_5 :
              min < 50 && min >= 40 ?
                Nixie_4 :
              min < 40 && min >= 30 ?
                Nixie_3 :
              min < 30 && min >= 20 ?
                Nixie_2 :
              min < 20 && min >= 10 ?
                Nixie_1 :
              min < 10 && min >= 0 ?
                Nixie_0 : Nixie_0
            } alt="nixie" />
          </li>
          <li>
            <img src={
              parseInt(min.toString()[1]) === 9 ?
                Nixie_9 :
              parseInt(min.toString()[1]) === 8 ?
                Nixie_8 :
              parseInt(min.toString()[1]) === 7 ?
                Nixie_7 :
              parseInt(min.toString()[1]) === 6 ?
                Nixie_6 :
              parseInt(min.toString()[1]) === 5 ?
                Nixie_5 :
              parseInt(min.toString()[1]) === 4 ?
                Nixie_4 :
              parseInt(min.toString()[1]) === 3 ?
                Nixie_3 :
              parseInt(min.toString()[1]) === 2 ?
                Nixie_2 :
              parseInt(min.toString()[1]) === 1 ?
                Nixie_1 :
              parseInt(min.toString()[1]) === 0 ?
                Nixie_0 : Nixie_0
            } alt="nixie" />
          </li>
          <li>
            <img src={Nixie_Colon} alt="nixie_colon" />
          </li>
          <li>
            <img src={
              sec < 60 && sec >= 50 ?
                Nixie_5 :
              sec < 50 && sec >= 40 ?
                Nixie_4 :
              sec < 40 && sec >= 30 ?
                Nixie_3 :
              sec < 30 && sec >= 20 ?
                Nixie_2 :
              sec < 20 && sec >= 10 ?
                Nixie_1 :
              sec < 10 && sec >= 0 ?
                Nixie_0 : Nixie_0
            } alt="nixie" />
          </li>
          <li>
            <img src={
              parseInt(sec.toString()[1]) === 9 ?
                Nixie_9 :
              parseInt(sec.toString()[1]) === 8 ?
                Nixie_8 :
              parseInt(sec.toString()[1]) === 7 ?
                Nixie_7 :
              parseInt(sec.toString()[1]) === 6 ?
                Nixie_6 :
              parseInt(sec.toString()[1]) === 5 ?
                Nixie_5 :
              parseInt(sec.toString()[1]) === 4 ?
                Nixie_4 :
              parseInt(sec.toString()[1]) === 3 ?
                Nixie_3 :
              parseInt(sec.toString()[1]) === 2 ?
                Nixie_2 :
              parseInt(sec.toString()[1]) === 1 ?
                Nixie_1 :
              parseInt(sec.toString()[1]) === 0 ?
                Nixie_0 : Nixie_0
            } alt="nixie" />
          </li>
          <li>
            <img src={Nixie_Colon} alt="nixie_colon" />
          </li>
          {/* Milliseconds */}
          <li>
            <img src={
                milliSec >= 90 ?
                  Nixie_9 :
                milliSec < 90 && milliSec >= 80 ?
                  Nixie_8 :
                milliSec < 80 && milliSec >= 70 ?
                  Nixie_7 :
                milliSec < 70 && milliSec >= 60 ?
                  Nixie_6 :
                milliSec < 60 && milliSec >= 50 ?
                  Nixie_5 :
                milliSec < 50 && milliSec >= 40 ?
                  Nixie_4 :
                milliSec < 40 && milliSec >= 30 ?
                  Nixie_3 :
                milliSec < 30 && milliSec >= 20 ?
                  Nixie_2 :
                milliSec < 20 && milliSec >= 10 ?
                  Nixie_1 :
                milliSec < 10 && milliSec >= 0 ?
                  Nixie_0 : "null"
            } alt="nixie" />
          </li>
          <li>
            <img src={
              parseInt(milliSec.toString()[1]) === 9 ?
                Nixie_9 :
              parseInt(milliSec.toString()[1]) === 8 ?
                Nixie_8 :
              parseInt(milliSec.toString()[1]) === 7 ?
                Nixie_7 :
              parseInt(milliSec.toString()[1]) === 6 ?
                Nixie_6 :
              parseInt(milliSec.toString()[1]) === 5 ?
                Nixie_5 :
              parseInt(milliSec.toString()[1]) === 4 ?
                Nixie_4 :
              parseInt(milliSec.toString()[1]) === 3 ?
                Nixie_3 :
              parseInt(milliSec.toString()[1]) === 2 ?
                Nixie_2 :
              parseInt(milliSec.toString()[1]) === 1 ?
                Nixie_1 :
              parseInt(milliSec.toString()[1]) === 0 ?
                Nixie_0 : Nixie_0
            } alt="nixie" />
          </li>
        </ul>
        <div className="buttons">
        <button
          // className="metal radial video_play"
          className={
            timerOn ?
              ["metal", "radial", "video_play", "timer_on"].join(" ")
            :
              ["metal", "radial", "video_play"].join(" ")
          }
          onClick={startTimer}
        >Start</button>
          {/* <button className="metal radial">✈</button> */}
          <button
            className="metal linear"
            onClick={stopTimer}
          >Stop</button>
          {/* <button className="metal linear">1</button>
          <button className="metal linear">0</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
