import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import React from 'react'

export default function useHandleClick(props) {
    const [state, setState] = React.useContext(MyContext);

    const handleClick =() =>{
      if(state.decode_token.length === undefined||state.decode_token.length === 0){
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            "username": state.username?state.username:state.decode_token.email,
            "oldpassword": state.oldpassword,
            "newpassword": state.newpassword
          });
          var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}/api/change-password`, requestOptions)
         .then(response => response.json())
         .then(result => {
            if(result.status==="OK"){
              setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message,status:true,url_alert:"/login", }));
            }else{
              setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message,status:false }));
            }
          })
         .catch(error => {
          setState((prevData) => ({...prevData,alert: true,errordetail: error,}))
         });
      }
    }
    return handleClick;
}