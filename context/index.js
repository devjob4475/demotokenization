import React, { createContext } from 'react';
import Provinces from '@/services/provinces';
import SendEmail from '@/services/sendemail'
import Alert from '@/components/alert'
import Timeoutcallback from '@/services/timeoutcallback';
import SetTimeout from '@/services/settimeout';
import UseefTOTP from '@/services/useeftotp'
import AllUser from '@/services/useefgetalluser'
import Countries from '@/services/countries'
import LoginText from '@/services/logintext'
import Color from '@/services/color'
export const MyContext = createContext();
export const MyProvider = (props) => {
  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"token":[],"role":[],"country":[],"provinces":[],
  "amphures":[],"Tambons":[],"zipcode":[],"open":false,"username":"","password":"" ,"data":[],"btlogin":false,"btchangepass":false,"showPassword":false,
  "decode_token":[],"bearer_token":"","oldpassword":"","newpassword":"","confirmpassword":"","alert":false,"errordetail":"","isFormValid":false,
  "showPassword":false,"remember":false,"loading":false,"status":false,"url_alert":"","btverify":false,"otp":"","timer": 0,"timeOutCallback": null,
  "disabledbt":false,"showNewPassword":false,"showConPassword":false,"passwordStrength":"","passwordsMatch":"","minLength": false,"hasNumber": false,"hasUpper": false,"hasLower": false,
  "confirmlink":[],"confirmlink_decode":[],"totp":"","bttryanother":false,"qrcode_url":[],"anchorEl":null,"data":[],"selectedProvince":(""),
  "selectedAmphoe":(""),"selectedTambon":(""),"firstName":(""),"LastName":(""),"jobTitle":(""),"company_email":(""),
  "MobileNumber":(""),"CompanyName":(""),"Branch":(""),"Address":(""),"Address2":(""),"Website":(""),"Country":(""),
  "Confirmed":false,"Email":(""),"OpenAlert":false,"selectedCountry":(""),"math":false,"password":(""),"role":(""),
  "company_name_en":(""),"alluser":[],"login_text":[],"color":[],"email":"","openpc":false,"varidate":[],"tambons":[],"title":'',"OpenAlert":false,
});
  return (
    <>
       <MyContext.Provider value={[state, setState]}>
      <Provinces/>
      <SendEmail/>
      <Alert/>
      <AllUser/>
      <Countries/>
      {/* <LoginText/> */}
      {/* <Color/> */}
      <Timeoutcallback/>
      <SetTimeout/>
      <UseefTOTP/>
        {children}
      </MyContext.Provider>
    </>
  );
};