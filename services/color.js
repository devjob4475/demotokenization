import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie'; // Import useCookies
import { MyContext } from '@/context';

function logintext() {
  const [state, setState] = useContext(MyContext);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET_TEXT}/api/get-table/color`)
      .then(response => response.json())
      .then(result => {
        if(result.status==="OK"){
          setState(prev => ({...prev, color:result.table_data }));
        }
      })
      .catch(error => console.log('error', error));
  }, []);



  return null;
}

export default logintext;
