import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie'; // Import useCookies
import { MyContext } from '@/context';

function useEfotp() {
  const [state, setState] = useContext(MyContext);
  useEffect(() => {
    if (state.bttryanother) {
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
      
      fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_TOTP}/api3/api-url`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status === "OK"){
            setState((prevData) => ({ ...prevData, qrcode_url:result.qrCodeURL}));
          }else{
            setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
          }
        })
        .catch(error => {
          setState((prevData) => ({ ...prevData, alert: true,errordetail: error }));
        });
          }
  }, [state.bttryanother]);



  return null;
}

export default useEfotp;
