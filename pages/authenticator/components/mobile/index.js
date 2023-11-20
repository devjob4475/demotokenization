import { Box, Button, useTheme,TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { themedata } from '../../../../data/themedata';
import { frontdata } from '../../../../data/frontdata'; 
import { MyContext } from '@/context';
import Loading from '@/components/loading'
import HandleConfirm from '@/hook/confirmtotp'
import HandleResend from '@/hook/resendcode'
import UseEFOTP from '@/services/useefotp'
import { buttontext } from '@/data/buttondata';
import { OTPText, totp } from '@/data/metadata';
import QRCode from 'qrcode.react';
import { useMediaQuery } from '@mui/material';

function Index() {
  const [state, setstate] = React.useContext(MyContext);
  const handleclick = HandleConfirm();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('390'));
  const islittleScreen = useMediaQuery(theme.breakpoints.down('281'));

  return (
    <>
    {/* <UseEFOTP/> */}
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box sx={{p:5,width:"auto",display:'flex',flexDirection:'column', background: 'white',borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800',textAlign:"center",[theme.breakpoints.down('390')]: {fontSize: 15,},[theme.breakpoints.down('281')]: {fontSize: 13,}}}>{totp[0].title}</Box>
          <Box pt={2} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'center',[theme.breakpoints.down('390')]: {fontSize: 13,},[theme.breakpoints.down('281')]: {fontSize: 11,}}} dangerouslySetInnerHTML={{ __html: totp[0].description }}/>
          <Box pb={3} pt={1} sx={{color: "#2AB930", fontSize: 13, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'center',[theme.breakpoints.down('390')]: {fontSize: 11,},[theme.breakpoints.down('390')]: {fontSize: 9,}}} dangerouslySetInnerHTML={{ __html: totp[0].description2 }}/>
          <Box sx={{display: 'flex',justifyContent: 'center',width: isSmallScreen?"auto":"200px",height: 'auto',borderRadius:"2%",
            background:
              'linear-gradient(to right, #84BAA1 4px, transparent 4px) 0 0, ' +
              'linear-gradient(to right, #84BAA1 4px, transparent 4px) 0 100%, ' +
              'linear-gradient(to left, #84BAA1 4px, transparent 4px) 100% 0, ' +
              'linear-gradient(to left, #84BAA1 4px, transparent 4px) 100% 100%, ' +
              'linear-gradient(to bottom, #84BAA1 4px, transparent 4px) 0 0, ' +
              'linear-gradient(to bottom, #84BAA1 4px, transparent 4px) 100% 0, ' +
              'linear-gradient(to top, #84BAA1 4px, transparent 4px) 0 100%, ' +
              'linear-gradient(to top, #84BAA1 4px, transparent 4px) 100% 100%',
            backgroundSize: '40px 40px',
            backgroundRepeat: 'no-repeat',
           }} >
            <Box sx={{mt:2.5,mb:2.5,ml:2.5,mr:2.5}}>
               <QRCode value={state.qrcode_url} size={islittleScreen?80:isSmallScreen?100:150} level={"H"} />
            </Box>
          </Box>
          <Box pt={2} sx={{cursor:"pointer",color: `${themedata[0].primary}`, fontSize: isSmallScreen?13:15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'center'}}>{totp[0].cantscan}</Box>
          <Box pb={1} pt={5} sx={{color: `${themedata[0].four}`, fontSize: isSmallScreen?13:15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'center'}}>{totp[0].typethecode}</Box>
          <Box pb={3} pt={2} >
            <OtpInput className='otp-input-container' value={state.totp} onChange={(newdata)=>{setstate((prevData) => ({ ...prevData, totp: newdata}));}} numInputs={6}
             renderSeparator={<span>&nbsp;&nbsp;</span>}renderInput={(props) => <input className="otp-input" {...props} inputMode="text" />}inputStyle={{ fontSize: '20px', width: islittleScreen?"20px":isSmallScreen?"30px":"35px", height: islittleScreen?"20px":isSmallScreen?"30px":'35px',borderRadius:"5px",border: `1px solid ${themedata[0].four}` }}/>
            </Box>
            <Button disabled={state.loading?true:false} onClick={handleclick} variant='contained'  style={{ fontSize: islittleScreen?"10px":'12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
            width: isSmallScreen?"auto":"300px", height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}` }}>{state.loading?<Loading/>:buttontext[0].text}</Button>
        </Box>
      </Box>  
      </>
  )
}

export default Index;
