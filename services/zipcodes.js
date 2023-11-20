import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function zipcodes() {
    const [state, setstate] = React.useContext(MyContext);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET}/api1/zipcodes/${selectedTambon}`,)
        .then(response => response.json())
        .then(result => setstate((prevData) => ({ ...prevData, zipcodes:  result})))
        .catch(error => {
          setstate((prevData) => ({ ...prevData, alert:true,errordetail:  "Unable to connect to the server! Please check the server."}))
        });
    },[]);
  return (
   null
  )
}

export default zipcodes