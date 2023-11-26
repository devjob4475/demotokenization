import { useContext, useEffect } from 'react';
import { MyContext } from '@/context';
import { useCookies } from 'react-cookie';

function useEfotp() {
  const [state, setState] = useContext(MyContext);
  const [cookies, setCookie, removeCookie] = useCookies(['bearer_token']);

  useEffect(() => {
    if(state.btalluser){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${cookies?cookies.bearer_token:state.bearer_token}`);
      // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwYzY4MGQ4LTU0ZTItNDc3ZS1hMTU3LTZhY2Q2YjcxOGQxOCIsInVzZXJuYW1lIjoiKioqKioqKkAqKioqKioqKioqKioiLCJVc2VybmFtZU9yaWdpbmFsIjoid29yYXBvbkB0cmFjdGhhaS5jb20iLCJ1c2VybmFtZV90b2tlbiI6Ikl6VlpZR3RUVTBBMk5IbDFZMDlPVEM1bE1XMD0iLCJwYXNzd29yZF9oYXNoIjoiJDJhJDEwJEViT01FVkxXbXhlNzE5ZWFscmk2dU9SMU9NbThYd05SN0s5SlJGa3d0TjJ6VVA0YmxxcVQuIiwiZmlyc3RuYW1lX29yaWdpbmFsIjoid29yYXBvbiIsImZpcnN0bmFtZV90b2tlbiI6IjRMbU9JZUM0cVZEZ3VLYzNmZz09Iiwic3VybmFtZV9vcmlnaWFubCI6ImFzYXZhbmlrIiwic3VybmFtZV90b2tlbiI6IloxazE0TGlLV3p0b0pRPT0iLCJjb21wYW55X25hbWUiOiJUaGUgUmVjb3ZlcnkgQWR2aXNvciBMaW1pdGVkIiwiY29tcGFueV90b2tlbiI6ImQrQzVpSFBndUo5S04rQzRuM2RFTE9DNWlEbE40TG1BSXVDNG9lQzRpZUM0b3VDNGorQzRrZUM1aytDNG9UMDVKbDhoZVE9PSIsInRpbWVzdGFtcCI6IjE3MDA4MTA0NTUiLCJyZXF1aXJlc19hY3Rpb24iOiIiLCJjcmVkaXRfY2FyZF9vcmlnaW5hbCI6IjEyMzQxMjM0MTIzNDEyMzgiLCJjcmVkaXRfY2FyZF9tYXNrZWQiOiIqKioqKiozNDEyMzQqKioqIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzAwODk2OTQzfQ.ZODFlJ2_O992jpxEjvUypuWEriIqn3214emS8m-SPwY");      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET}/api/users`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result){
            localStorage.setItem("alluser", JSON.stringify(result));
            setState((prevData) => ({ ...prevData, alluser: result }));
            if(state.btdelete||state.btreload){
              window.location.reload()
            }
          }else{
            setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
          }
        })
        .catch(error => console.log('error', error));
    
    }
  }, [state.btalluser,state.decode_token]);



  return null;
}

export default useEfotp;
