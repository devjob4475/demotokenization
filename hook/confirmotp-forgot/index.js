import { MyContext } from '@/context';
import { useRouter } from 'next/router';
import React from 'react'

function index() {
    const [state, setState] = React.useContext(MyContext);
    const router = useRouter();

    const handleclick = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "otp": parseInt(state.otp)
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_SENDMAIL}/api2/validate-otp`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status==="OK"){
              setState((prevData) => ({ ...prevData, btverify: false }));
              router.push('/resetpassword');
            }else{
              setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
            }
          })
          .catch(error => console.log('error', error));
    }
  return handleclick;
}

export default index