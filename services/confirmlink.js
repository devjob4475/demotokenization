import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function confirmlink() {
    const [state, setState] = React.useContext(MyContext);
    

    useEffect(() => { 
        if(state.confirmlink){
        const decodedToken = JSON.parse(atob(state.confirmlink.split('.')[1]));
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": decodedToken.email,
          "password": "pAXe02j7",
          "remember": false
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}/api/login`, requestOptions)
        .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        }
    }, [state.confirmlink]);
  return null;
}

export default confirmlink