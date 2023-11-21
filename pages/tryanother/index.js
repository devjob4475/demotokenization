import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import React from 'react'
import { useContext } from 'react';

function index() {
    const [state, setState] = useContext(MyContext);
    const router = useRouter();

    const handleclick = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "value": 1,
          "accountName": state.decode_token.UsernameOriginal
        });
        
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_TOTP}:${process.env.NEXT_PUBLIC_API_PORT_TOTP}/api-url`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.statusqr===true){
              setState((prevData) => ({ ...prevData, qrcode_url:result.qrCodeURL}));
              router.push("/authenticator");
            }else if(result.statusqr===false){
              router.push("/authen-verify");
            }
            else{
              setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
            }
          })
          .catch(error => console.log('error', error));
    }
  return handleclick;
}

export default index