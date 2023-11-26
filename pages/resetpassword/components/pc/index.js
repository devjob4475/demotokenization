import React, { useState, useEffect, useContext } from 'react';
import { Box, LinearProgress, Stack } from '@mui/material'
import { themedata } from '@/data/themedata'; 
import Title from './components/title'
import Input from './components/textfield'
import BtSubmit from './components/SubmitButton'
import { useRouter } from 'next/router';
import { MyContext } from '@/context';
import Image from 'next/image';
import logocmpany from '/assets/images/ICON LOGO ChicMSP 13.9 2.png';
import logofron from '/assets/images/img_v2_fron.png';

function Index() {
  const [state, setstate] = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const token = router.query.token;
  useEffect(() => {
    if(token){
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setstate((prevData) => ({ ...prevData, confirmlink: token,confirmlink_decode:decodedToken}));
    }
  }, [token]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"auto",width:'100%'}}></Box>
    </>
    );
  }

  return (
    <>
      <Box  sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={1} pb={3} pl={10} pr={10} sx={{display:'flex',flexDirection:'column', background: 'white',borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}> 
        <Box pb={5} pt={1} sx={{display:'flex', justifyContent:'center' , alignItems:'center',flexDirection:'row'}}>
        <Box><Image alt="Iconview" src={logocmpany} width={35} height={'auto'} /></Box>
        <Box marginTop={1}> <Image alt="Iconview" src={logofron} width={30} height={'auto'} style={{ marginLeft: 3 }} /></Box>
        </Box>
          <Title/>
          <Input/>
          <BtSubmit/>
        </Box>
      </Box>
    </>
  )
}

export default Index;
