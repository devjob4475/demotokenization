import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import logocmpany from '/assets/images/image 8.png'; 
import Image from 'next/image';
import { themedata } from 'data/themedata'; 
import { frontdata } from 'data/frontdata'; 
import { MyContext } from 'context'; 
import { useRouter } from 'next/router';
import Title from '@/components/title';
import { buttontext } from '@/data/buttondata';
import Loading from '@/components/loading'
function Index() {
  const [state, setState] = useContext(MyContext);
  const router = useRouter(); 
  const handleButtonClick = async () => {
    setState((prevData) => ({ ...prevData, btverify: true}));
    router.push('/emailverification-forgot');
  };
  return (
    <Box sx={{background: `linear-gradient(${themedata[0].primary}, ${themedata[0].three})`, height: "100vh", width: '100%'}}>
      <Title namepage="Forgot password" company="Partner Demo Tracthai"/>
      <Box p={4} sx={{display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <Box sx={{ color: `${themedata[0].ten}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Enter Company E-mail</Box>
        <Box pb={3} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>Please enter your company email address.</Box>
        <Box pb={3} ><Image alt="Iconview" src={logocmpany} width={200} height={'auto'} /></Box>
        <TextField id="Email" onChange={(e)=>{setState((prevData) => ({ ...prevData, username:  e.target.value}))}} label="Company Email Address" placeholder="@tracthai.com" size='small' style={{ width: '300px', height: '60px'}} focused color='primary' />
        <Button onClick={handleButtonClick} variant='contained' style={{ fontSize: '12px', padding: '6px 12px', backgroundColor: `${themedata[0].primary}`, width: '300px', height: 'auto', textTransform: 'capitalize', fontFamily: frontdata[0].font, color: `${themedata[0].three}` }}>{state.loading?<Loading/>:buttontext[0].text}</Button>
      </Box>
    </Box>
  );
}

export default Index;
