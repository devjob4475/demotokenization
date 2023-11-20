import { Box, Button, TextField, useTheme,InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { themedata } from '@/data/themedata'; 
import { frontdata } from '@/data/frontdata'; 
import Image from 'next/image';
import Hide from '@/assets/images/Hide.png'
import Show from '@/assets/images/Show.png'
import { MyContext } from '@/context';
import { ResetPassText } from '@/data/metadata';
import useHandleClick from '@/hook/resetpassword';
import useHandleClickToken from '@/hook/resetpassword-by-confirm';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import handlevalidatepassword from '@/hook/validatepassword'
import { useRouter } from 'next/router';

function Index() {
  const [state, setstate] = React.useContext(MyContext);
  const [isLoading, setIsLoading] = useState(true);
  const updatePassword = handlevalidatepassword(); 
  const handleClick = useHandleClick();
  const handleClickToken = useHandleClickToken();
  const router = useRouter();
  const token = router.query.token;
  const theme = useTheme(); 
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
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}></Box>
    </>
    ); 
  }

  return (
    <>
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={10} sx={{display:'flex',flexDirection:'column', background: 'white',[theme.breakpoints.down('470')]: {p: 5,},[theme.breakpoints.down('400')]: {p: 3,borderRadius:7},
           borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',[theme.breakpoints.down('350')]: {width:"75%",borderRadius:7},transform: 'translate(-50%, -50%)'}}> 
           <Box sx={{ color: '#171717',textAlign:"center", fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word',[theme.breakpoints.down('400')]: {fontSize: 20,pt:3}}}>{ResetPassText[0].title}</Box>
           <Box pb={7} sx={{color:`${themedata[0].four}`, fontSize: 15,textAlign:"center", fontFamily: frontdata[0].font, fontWeight: '0',[theme.breakpoints.down('400')]: {pt: 2,} }}>{ResetPassText[0].description}</Box>
          {typeof token === 'undefined' ? (
          <TextField type={state.showPassword ? 'text' : 'password'} onChange={(e) => {setstate((prevData) => ({...prevData,oldpassword: e.target.value,}));}}
          label={ResetPassText[0].InputOldPass} placeholder={ResetPassText[0].InputOldPass} size='small' sx={{ width: '300px', height: '60px',[theme.breakpoints.down('350')]: {width: '100%', height: '60px'}}} focused
          color='primary' InputProps={{endAdornment: (<InputAdornment position="end"><Image style={{ cursor: "pointer" }} onClick={() => {setstate((prevData) => ({...prevData,showPassword: !state.showPassword,}));}}
          alt="Iconview" src={state.showPassword ? Show : Hide} width={20} height={'30px'} /></InputAdornment>),}}/>) : ""}
          <TextField type={state.showNewPassword ? 'text' : 'password'} onChange={(e)=>{updatePassword(e.target.value);
          setstate((prevData) => ({ ...prevData, newpassword:  e.target.value}))}} InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showNewPassword: !state.showNewPassword }));}} alt="Iconview" src={state.showNewPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}  id="New password" label={ResetPassText[0].InputNewPass} placeholder={ResetPassText[0].InputNewPass} size='small'  sx={{ width: '300px', height: '60px',[theme.breakpoints.down('350')]: {width: '100%', height: '60px'}}} focused color='primary'/>
          <Box id="passwordvalidate" display="flex" flexDirection="column" alignSelf="flex-start">
            <Box sx={{color:state.passwordStrength!==""&&state.passwordStrength!==undefined? state.passwordStrength === 'Very Weak' ? "red" :state.passwordStrength === 'Weak' ? "orange" :state.passwordStrength === 'Medium' ? "orange" :"green":"red",display:"flex",alignItems:"center",mt:-1,fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
               {state.passwordStrength!==""&&state.passwordStrength!==undefined? state.passwordStrength === 'Very Weak' ? (<ClearIcon style={{fontSize:"17px"}} color='error'/>) :state.passwordStrength === 'Weak' ? (<WarningAmberIcon style={{fontSize:"17px"}} color='warning'/>) :state.passwordStrength === 'Medium' ? (<WarningAmberIcon style={{fontSize:"17px"}} color='warning'/>) :(<CheckIcon style={{fontSize:"17px"}} color='success'/>):(<ClearIcon style={{fontSize:"17px"}} color='error'/>)}
               {state.passwordStrength!==""&&state.passwordStrength!==undefined?`Password Strength: ${state.passwordStrength}`:"Password Strength: -"}
            </Box>
            <Box sx={{color:state.minLength ? "green" : "red",mt:0.5,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
               {state.minLength ? (<CheckIcon style={{fontSize:"17px"}} color='success'/>) : (<ClearIcon style={{fontSize:"17px"}} color='error'/>)} Password must be at least 8 characters.
            </Box>
            <Box sx={{color:state.hasNumber ? "green" : "red",mt:0.5,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
               {state.hasNumber ? (<CheckIcon style={{fontSize:"17px"}} color='success'/>) : (<ClearIcon style={{fontSize:"17px"}} color='error'/>)} Password must contain a number.
            </Box>
            <Box sx={{color:state.hasUpper ? "green" : "red",mt:0.5,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
               {state.hasUpper ? (<CheckIcon style={{fontSize:"17px"}} color='success'/>) : (<ClearIcon style={{fontSize:"17px"}} color='error'/>)} Password must contain an uppercase letter.
            </Box>
            <Box sx={{color:state.hasLower ? "green" : "red",mt:0.5,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
               {state.hasLower ? (<CheckIcon style={{fontSize:"17px"}} color='success'/>) : (<ClearIcon style={{fontSize:"17px"}} color='error'/>)} Password must contain a lowercase letter.
            </Box>
            <Box sx={{color:state.passwordsMatch  ? "green" : "red",mt:0.5,mb:2,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
               {state.passwordsMatch  ? (<CheckIcon style={{fontSize:"17px"}} color='success'/>) : (<ClearIcon style={{fontSize:"17px"}} color='error'/>)} {state.passwordsMatch ? "Passwords match." : "Passwords do not match."}
            </Box>
          </Box>
          <TextField type={state.showConPassword ? 'text' : 'password'} InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showConPassword: !state.showConPassword }));}} alt="Iconview" src={state.showConPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}} onChange={(e)=>{const confirmPass = e.target.value;setstate((prevData) => ({ ...prevData,passwordsMatch: state.newpassword === confirmPass, confirmpassword:  e.target.value}))}} id="Confirm new password" label={ResetPassText[0].InputConPass} placeholder={ResetPassText[0].InputConPass} size='small'  sx={{ width: '300px', height: '60px',[theme.breakpoints.down('350')]: {width: '100%', height: '60px'}}} focused color='primary'/>       
          <Box sx={{[theme.breakpoints.down('400')]: {pb: 3,}}}>
             <Button disabled={!state.minLength || !state.hasNumber || !state.hasUpper || !state.hasLower || !state.passwordsMatch} onClick={typeof token === 'undefined' ? handleClick : handleClickToken} style={{color:`${themedata[0].three}`,backgroundColor:!state.minLength || !state.hasNumber || !state.hasUpper || !state.hasLower || !state.passwordsMatch?`${themedata[0].four}`:`${themedata[0].primary}`}}  variant='contained'  sx={{ fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
             width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}`,[theme.breakpoints.down('350')]: {width: '100%', height: '40px'} }}>{ResetPassText[0].buttontext}</Button>
          </Box>
        </Box>
      </Box>  
      </>
  )
}
export default Index;
