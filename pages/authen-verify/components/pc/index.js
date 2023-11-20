import { Box, Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import OtpInput from 'react-otp-input';
import { themedata } from '@/data/themedata';
import { frontdata } from '@/data/frontdata'; 
import { MyContext } from '@/context';
import Loading from '@/components/loading'
import HandleConfirm from '@/hook/confirmtotp'
import HandleResend from '@/hook/resendcode'
import Handletryanother from '@/hook/tryanother'
import UseEFOTP from '@/services/useefotp'
import { buttontext } from '@/data/buttondata';
import { TOTPText } from '@/data/metadata';
import { useRouter } from 'next/router';

function Index() {
  const [state, setstate] = React.useContext(MyContext);

  const handleclick = HandleConfirm();

  
  return (
   <>
        {/* <UseEFOTP/> */}
        <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={5} sx={{display:'flex',flexDirection:'column', background: 'white',borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
        <Box sx={{ color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word',}}>{TOTPText[0].title}</Box>
        <Box pb={3} pt={2} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>{TOTPText[0].description}</Box>
        <Box pb={3} >
          <OtpInput className='otp-input-container' value={state.totp} onChange={(newdata)=>{setstate((prevData) => ({ ...prevData, totp: newdata}));}} numInputs={6}
          renderSeparator={<span>&nbsp;&nbsp;</span>} renderInput={(props) => <input className="otp-input" {...props} inputMode="text"/>}
          inputStyle={{ fontSize: '20px', width: '50px', height: '50px',borderRadius:"5px",border: `1px solid ${themedata[0].four}`}}/>
        </Box>
        <Button disabled={state.loading?true:false} onClick={handleclick}  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}`}}>{state.loading?<Loading/>:buttontext[0].text}</Button>
        </Box>
      </Box> 
      </>
  )
}

export default Index;
