import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function amphures() {
  
    const [state, setState] = React.useContext(MyContext);
    
    useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET}/api1/amphures/${selectedProvince}`)
    .then(response => response.json())
    .then(result => setState((prevData) => ({ ...prevData, amphures:  result})))
    .catch(error => {
      setState((prevData) => ({ ...prevData, alert:true,errordetail:  "Unable to connect to the server! Please check the server."}))
    });
}, []);
    return (null
  )
}

export default amphures