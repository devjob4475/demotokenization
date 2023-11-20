import { Box, TextField,InputAdornment, Alert } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import React, { useEffect } from 'react'
import { MyContext } from '@/context';
import { ResetPassText } from '@/data/metadata';
import Image from 'next/image';
import Hide from '@/assets/images/Hide.png'
import Show from '@/assets/images/Show.png'
import handlevalidatepassword from '@/hook/validatepassword'
import { useRouter } from 'next/router';
import Login from '@/services/confirmlink'
import { frontdata } from '@/data/frontdata';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function textfield() { 
  const [state, setstate] = React.useContext(MyContext);
  const updatePassword = handlevalidatepassword();
  const router = useRouter();
  const token = router.query.token;
  return (
    <>
      {/* //*Textfield */}
      {typeof token === 'undefined' ? (
      <TextField type={state.showPassword ? 'text' : 'password'} onChange={(e) => {setstate((prevData) => ({...prevData,oldpassword: e.target.value,}));}}
      label={ResetPassText[0].InputOldPass} placeholder={ResetPassText[0].InputOldPass} size='small' style={{ width: '300px', height: '60px'}} focused
      color='primary' InputProps={{endAdornment: (<InputAdornment position="end"><Image style={{ cursor: "pointer" }} onClick={() => {setstate((prevData) => ({...prevData,showPassword: !state.showPassword,}));}}
      alt="Iconview" src={state.showPassword ? Show : Hide} width={20} height={'30px'} /></InputAdornment>),}}/>) : ""}
      <TextField type={state.showNewPassword ? 'text' : 'password'} onChange={(e)=>{updatePassword(e.target.value);
       setstate((prevData) => ({ ...prevData, newpassword:  e.target.value}))}}   label={ResetPassText[0].InputNewPass} placeholder={ResetPassText[0].InputNewPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
      <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showNewPassword: !state.showNewPassword }));}} alt="Iconview" src={state.showNewPassword ? Show : Hide} width={20} height={'30px'}></Image>
      </InputAdornment>)}}/>
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
      <TextField type={state.showConPassword ? 'text' : 'password'} onChange={(e)=>{
        const confirmPass = e.target.value;
        setstate((prevData) => ({ ...prevData,passwordsMatch: state.newpassword === confirmPass, confirmpassword:  e.target.value}))}}  label={ResetPassText[0].InputConPass} placeholder={ResetPassText[0].InputConPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
      <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showConPassword: !state.showConPassword }));}} alt="Iconview" src={state.showConPassword ? Show : Hide} width={20} height={'30px'}></Image>
      </InputAdornment>)}}/>
          {/* //*Textfield */}
    </>
  )
}

export default textfield