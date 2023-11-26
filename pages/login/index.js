import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import Body from './components/pc';
import Mobile from './components/mobile';
import Layout from '@/components/layout';
import { themedata } from '@/data/themedata';
import Title from '@/components/title';
import { MyContext } from '@/context';

const getDefaultState = () => ({
  "menuMobile": false,"token":[],"role":[],"country":[],"provinces":[],
  "amphures":[],"Tambons":[],"zipcode":[],"open":false,"username":"","password":"" ,"data":[],"btlogin":false,"btchangepass":false,"showPassword":false,
  "decode_token":[],"bearer_token":"","oldpassword":"","newpassword":"","confirmpassword":"","alert":false,"errordetail":"","isFormValid":false,
  "showPassword":false,"remember":false,"loading":false,"status":false,"url_alert":"","btverify":false,"otp":"","timer": 0,"timeOutCallback": null,
  "disabledbt":false,"showNewPassword":false,"showConPassword":false,"passwordStrength":"","passwordsMatch":"","minLength": false,"hasNumber": false,"hasUpper": false,"hasLower": false,
  "confirmlink":[],"confirmlink_decode":[],"totp":"","bttryanother":false,"qrcode_url":[],"anchorEl":null,"data":[],"selectedProvince":(""),
  "selectedAmphoe":(""),"selectedTambon":(""),"firstName":(""),"LastName":(""),"jobTitle":(""),"company_email":(""),
  "MobileNumber":(""),"CompanyName":(""),"Branch":(""),"Address":(""),"Address2":(""),"Website":(""),"Country":(""),
  "Confirmed":false,"Email":(""),"OpenAlert":false,"selectedCountry":(""),"math":false,"password":(""),"role":(""),
  "company_name_en":(""),"alluser":[],"login_text":[],"color":[],"email":"","openpc":false,"btalluser":null,"btdelete":false,"btreload":false
});

function Index() {
  const [state, setState] = useContext(MyContext);

  useEffect(() => {
    setState(getDefaultState());
  }, []);

  return (
    <Box sx={{ background: `linear-gradient(108deg, ${themedata[0].primary} 0%, ${themedata[0].bgshadowwhite} 100%), linear-gradient(110deg, ${themedata[0].greenlight} -2.13%, ${themedata[0].greenblack} 102.03%), ${themedata[0].three}` }}>
       <Title namepage="Login" company="Partner Demo Tracthai"/>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Layout
          containerheight="auto" 
          templaterow="0fr auto 0fr"
          templateareas="'nav' 'content1' 'footer'"
          mtemplaterow="0fr auto 0fr"
          mtemplateareas="'nav' 'content1' 'footer'"
          Content1={<Box><Body /></Box>}
        />
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Layout
          containerheight="auto"
          templaterow="0fr auto 0fr"
          templateareas="'nav' 'content1' 'footer'"
          mtemplaterow="0fr auto 0fr"
          mtemplateareas="'nav' 'content1' 'footer'"
          Content1={<Box><Mobile /></Box>}
        />
      </Box>
    </Box>
  );
}

export default Index;
