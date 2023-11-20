import { MyContext } from '@/context';
import React, { useEffect } from 'react'
import HandletimeOutCallback from '@/hook/timeoutcallback'

function timeoutcallback() {
    const [state, setState] = React.useContext(MyContext);
    const timeOutCallback = HandletimeOutCallback();

    useEffect(() => {
        setState(prevAllTime => ({...prevAllTime,timeOutCallback: timeOutCallback}));
      }, [timeOutCallback]);
  return null;
}

export default timeoutcallback