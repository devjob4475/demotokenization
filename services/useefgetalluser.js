import { useContext, useEffect } from 'react';
import { MyContext } from '@/context';

function useEfotp() {
  const [state, setState] = useContext(MyContext);
  useEffect(() => {
    if(state.bearer_token){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${state.bearer_token}`);
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET}/api/users`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result){
            setState((prevData) => ({ ...prevData, alluser: result }));
          }else{
            setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
          }
        })
        .catch(error => console.log('error', error));
    
    }
  }, [state.bearer_token]);



  return null;
}

export default useEfotp;
