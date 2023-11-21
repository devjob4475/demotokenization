import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import React from 'react'
import { useCookies } from 'react-cookie'; // Import useCookies

export default function useHandleClick(props) {
    const [state, setState] = React.useContext(MyContext);
    const [cookies, setCookie, removeCookie] = useCookies(['bearer_token']);

    const handleClick =() =>{
      if(state.confirmlink){
        const decodedToken = JSON.parse(atob(state.confirmlink.split('.')[1]));
        const fakeexp = 1699408598;
        // const expirationDate = new Date(fakeexp * 1000); //
        const expirationDate = new Date(decodedToken.exp * 1000);
        setCookie('bearer_token', state.confirmlink, { path: '/', expires: expirationDate });
        setState((prevData) => ({ ...prevData, decode_token: decodedToken}));
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", `Bearer ${state.confirmlink}`);
          if(decodedToken){
          var raw = JSON.stringify({
            "username": decodedToken.username,
            "newpassword": state.newpassword
          });
          }
          var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}:${process.env.NEXT_PUBLIC_API_PORT_LOGIN}/api/change-password-byconfirm-link`, requestOptions)
         .then(response => response.json())
         .then(result => {
            console.log("🚀 ~ file: index.js:36 ~ handleClick ~ result:", result)
            if(result.status==="OK"){
              setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message,status:true,url_alert:"/login", }));
            }else{
              setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message,status:false,url_alert:"/login" }));
            }
          })
         .catch(error => {
          setState((prevData) => ({...prevData,alert: true,errordetail: error,}))
         });
      }
    }
    return handleClick;
}
