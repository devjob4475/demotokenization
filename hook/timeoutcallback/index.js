import { MyContext } from '@/context';
import React, { useCallback } from 'react'

function index() {
    const [state, setState] = React.useContext(MyContext);
    const timeOutCallback = useCallback(() => {
        setState(prevAllTime => ({...prevAllTime,timer: prevAllTime.timer - 1}));
      }, []);
  return timeOutCallback;
}

export default index