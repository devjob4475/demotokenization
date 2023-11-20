import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import logocmpany from '/assets/images/3675555 1.png'
import Link from 'next/link';
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
function Index() {
  const [otp, setOtp] = useState('');
  return (
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={4} sx={{display:'flex',flexDirection:'column', background: 'white',
      borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: `${themedata[0].ten}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', 
          wordWrap: 'break-word',}}>Check your Email</Box>
          <Box pb={3} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0',textAlign:'center' 
          }}>We have sent password to your Email<br></br> 
          ex**e@tracmail.com</Box>
          <Box pb={3} ><Image alt="Iconview" src={logocmpany} width={200} height={'auto'}></Image></Box>       
          <Link href="/login" >
          <Button  variant='contained'  style={{ fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}` }}>Next</Button>
          </Link>
        <Box p={2}>
      <label style={{color:`${themedata[0].four}`,fontSize: 15, fontFamily: frontdata[0].font}}>Didn’t receive password?</label>
      <Button variant="text" sx={{color:`${themedata[0].secondary}`,textTransform:'capitalize', fontFamily: frontdata[0].font}} >Resend</Button>
      </Box>
        </Box>
      </Box>  
  )
}

export default Index;
