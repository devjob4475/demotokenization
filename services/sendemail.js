import { MyContext } from '@/context';
import { env } from '@/next.config';
import React, { useEffect } from 'react'

export default function Login(props) {
    const [state, setState] = React.useContext(MyContext);

    useEffect(() => {
      if(state.btverify){
        setState((prevData) => ({ ...prevData, loading: true}));
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email":state.username ? state.username: state.decode_token.UsernameOriginal?state.decode_token.UsernameOriginal:state.confirmlink_decode.username
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_SENDMAIL}/api2/send-otp`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status==="OK"){
              setState((prevData) => ({ ...prevData, loading: false}));
            }else{
              setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
            }
          })
          .catch(error => {
            setState((prevData) => ({ ...prevData, alert: true,errordetail: error }));
          });
      }
    }, [state.btverify]); 
    
    return null;
}
