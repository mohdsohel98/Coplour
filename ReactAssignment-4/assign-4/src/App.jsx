import React, { useEffect, useState } from 'react';
import EmployeeForm from './EmployeeForm';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);  // 5 sec wale counter ke liye
  const [seconds, setSeconds] = useState(0);  // exact seconds count ke liye

  useEffect(() => {
 
    const secondsInterval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    const counterInterval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 5000);

   
    return () => {
      clearInterval(secondsInterval);
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <div >
      <h2> Seconds Passed: {seconds}</h2>
      <h2>Counter updates every 5s: {counter}</h2>
      <EmployeeForm/>
    </div>
  );
};

export default CounterComponent;
