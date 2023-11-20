import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie'; // Import useCookies
import { MyContext } from '@/context';

function useEfotp() {
  const [state, setState] = React.useContext(MyContext);
  const [cookies, setCookie, removeCookie] = useCookies(['bearer_token']);
  useEffect(() => {
    if (cookies.bearer_token) {
      setState((prevData) => ({ ...prevData, alert: true, errordetail: "Please login again", url_alert: "/login" }));
    }
  }, []);



  return null;
}

export default useEfotp;
