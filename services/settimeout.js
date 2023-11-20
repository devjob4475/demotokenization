import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function settimeout() {
    const [state, setState] = React.useContext(MyContext);
    useEffect(() => {
        state.timer > 0 && setTimeout(state.timeOutCallback, 1000);
      }, [state]);
  return null;
}

export default settimeout