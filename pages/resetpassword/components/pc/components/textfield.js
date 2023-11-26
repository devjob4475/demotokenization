import { Box, TextField,InputAdornment, Alert, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { MyContext } from '@/context';
import { ResetPassText } from '@/data/metadata';
import Image from 'next/image';
import Hide from '@/assets/images/Hide.png'
import Show from '@/assets/images/Show.png'
import handlevalidatepassword from '@/hook/validatepassword'
import { useRouter } from 'next/router';
import { frontdata } from '@/data/frontdata';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { themedata } from '@/data/themedata';

function textfield() { 
  const [state, setstate] = React.useContext(MyContext);
  const updatePassword = handlevalidatepassword();
  const router = useRouter();
  const token = router.query.token;
  
  return (
    <>
      {typeof token === 'undefined' ? (
      <TextField type={state.showPassword ? 'text' : 'password'} onChange={(e) => {setstate((prevData) => ({...prevData,oldpassword: e.target.value,}));}}
      label={ResetPassText[0].InputOldPass} placeholder={ResetPassText[0].InputOldPass} size='small' style={{ width: '300px', height: '60px'}} focused
      color='primary' InputProps={{endAdornment: (<InputAdornment position="end"><Image style={{ cursor: "pointer" }} onClick={() => {setstate((prevData) => ({...prevData,showPassword: !state.showPassword,}));}}
      alt="Iconview" src={state.showPassword ? Show : Hide} width={20} height={'30px'} /></InputAdornment>),}}/>) : ""}
      <TextField type={state.showNewPassword ? 'text' : 'password'} onChange={(e)=>{updatePassword(e.target.value);
       setstate((prevData) => ({ ...prevData, newpassword:  e.target.value}))}}   label={ResetPassText[0].InputNewPass} placeholder={ResetPassText[0].InputNewPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
      <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showNewPassword: !state.showNewPassword }));}} alt="Iconview" src={state.showNewPassword ? Show : Hide} width={20} height={'30px'}></Image>
      </InputAdornment>)}}/>
      <Box sx={{ width: '97%', mb: 2 ,textAlign: 'right'}}>
      <LinearProgress size="sm"
         variant="determinate"
         value={
            state.passwordStrength === 'Very Weak' ? 25
            : state.passwordStrength === 'Weak' ? 50
            : state.passwordStrength === 'Medium' ? 75
            : state.passwordStrength === 'Strong' ? 100
            : 0 
         }
         sx={{
            '& .MuiLinearProgress-bar': {
            backgroundColor:
               state.passwordStrength === 'Very Weak' ? '#d32f2f'
                  : state.passwordStrength === 'Weak' ? '#ff9800' 
                  : state.passwordStrength === 'Medium' ? '#ffb74d' 
                  : state.passwordStrength === 'Strong' ? '#4caf50' 
                  : '#d32f2f' 
            }
         }}
      />
   <Typography
        variant="body2"
        sx={{
          color: (theme) => {
            return state.passwordStrength === 'Very Weak' ? themedata[0].Veryweak
              : state.passwordStrength === 'Weak' ? themedata[0].weak
              : state.passwordStrength === 'Medium' ? themedata[0].medium
              : state.passwordStrength === 'Strong' ? themedata[0].strong
              : themedata[0].passtextsusecss; 
          }
        }}
      >
         {state.passwordStrength}
      </Typography>
</Box>
      <TextField  type={state.showConPassword ? 'text' : 'password'} onChange={(e)=>{
        const confirmPass = e.target.value;
        setstate((prevData) => ({ ...prevData,passwordsMatch: state.newpassword === confirmPass, confirmpassword:  e.target.value}))}}  label={ResetPassText[0].InputConPass} placeholder={ResetPassText[0].InputConPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
      <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showConPassword: !state.showConPassword }));}} alt="Iconview" src={state.showConPassword ? Show : Hide} width={20} height={'30px'}></Image>
      </InputAdornment>)}}/>
      <Box id="passwordvalidate" display="flex" flexDirection="column" alignSelf="flex-start">
      <Box sx={{color:state.minLength ? themedata[0].passtextsusecss : themedata[0].passwordtext,mt:0.5,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
         {state.minLength ? (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passtextsusecss} />) : (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passwordtext}/>)} Password must be at least 8 characters.
      </Box>
      <Box sx={{color:state.hasNumber ? themedata[0].passtextsusecss : themedata[0].passwordtext,mt:0.5,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
         {state.hasNumber ? (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passtextsusecss}/>) : (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passwordtext}/>)} Password must contain a number.
      </Box>
      <Box sx={{color:state.hasUpper ? themedata[0].passtextsusecss : themedata[0].passwordtext,mt:0.5,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
         {state.hasUpper ? (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passtextsusecss}/>) : (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passwordtext}/>)} Password must contain an uppercase letter.
      </Box>
      <Box sx={{color:state.hasLower ? themedata[0].passtextsusecss : themedata[0].passwordtext,mt:0.5,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
         {state.hasLower ? (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passtextsusecss}/>) : (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passwordtext}/>)} Password must contain a lowercase letter.
      </Box>
      <Box sx={{color:state.passwordsMatch  ? themedata[0].passtextsusecss : themedata[0].passwordtext,mt:0.5,mb:2,display:"flex",alignItems:"center",fontSize: 12, fontFamily: frontdata[0].font, fontWeight: '400',}}>
         {state.passwordsMatch  ? (<CheckCircleOutlineIcon style={{fontSize:"17px"}} color = {themedata[0].passtextsusecss}/>) : (<ClearIcon style={{fontSize:"17px"}} color = {themedata[0].passwordtext}/>)} {state.passwordsMatch ? "Passwords match." : "Passwords do not match."}
      </Box>
      </Box>
    </>
  )
}

export default textfield