import { Box, TextField,InputAdornment, Alert } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import React from 'react'
import { MyContext } from '@/context';
import { ResetPassText } from '@/data/metadata';
import Image from 'next/image';
import Hide from '@/assets/images/Hide.png'
import Show from '@/assets/images/Show.png'
import styled from 'styled-components';
import handlevalidatepassword from '@/hook/validatepassword'

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
  },
}));

function textfield() { 
  const [state, setstate] = React.useContext(MyContext);
  const updatePassword = handlevalidatepassword();
  return (
    <>
      {/* //*Textfield */}
      <TextField type={state.showPassword ? 'text' : 'password'} onChange={(e)=>{setstate((prevData) => ({ ...prevData, oldpassword:  e.target.value}))}}  label={ResetPassText[0].InputOldPass} placeholder={ResetPassText[0].InputOldPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showPassword: !state.showPassword }));}} alt="Iconview" src={state.showPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>
          <LightTooltip  title={
          <Box display="flex" flexDirection="column" sx={{ '& > *:not(:last-child)': { mb: 0.2 } }}>
            <Alert severity={state.passwordStrength!==""? state.passwordStrength === 'Very Weak' ? "error" :state.passwordStrength === 'Weak' ? "warning" :state.passwordStrength === 'Medium' ? "info" :"success":"error"}>
            {state.passwordStrength!==""?`Password Strength: ${state.passwordStrength}`:"Password Strength: -"}
            </Alert>
          <Alert severity={state.minLength ? "success" : "error"}> Password must be at least 8 characters.</Alert>
          <Alert severity={state.hasNumber ? "success" : "error"}> Password must contain a number.</Alert>
          <Alert severity={state.hasUpper ? "success" : "error"}>Password must contain an uppercase letter.</Alert>
          <Alert severity={state.hasLower ? "success" : "error"}>Password must contain a lowercase letter.</Alert>
        </Box>} placement="right-start">
          <TextField type={state.showNewPassword ? 'text' : 'password'} onChange={(e)=>{updatePassword(e.target.value);
           setstate((prevData) => ({ ...prevData, newpassword:  e.target.value}))}}   label={ResetPassText[0].InputNewPass} placeholder={ResetPassText[0].InputNewPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showNewPassword: !state.showNewPassword }));}} alt="Iconview" src={state.showNewPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>
          </LightTooltip>
          <LightTooltip  title={ 
            <Alert severity={state.passwordsMatch ? "success" : "error"}>{state.passwordsMatch ? "Passwords match." : "Passwords do not match."}</Alert>          
            }placement="right-start">
          <TextField type={state.showConPassword ? 'text' : 'password'} onChange={(e)=>{
            const confirmPass = e.target.value;
            setstate((prevData) => ({ ...prevData,passwordsMatch: state.newpassword === confirmPass, confirmpassword:  e.target.value}))}}  label={ResetPassText[0].InputConPass} placeholder={ResetPassText[0].InputConPass} size='small'  style={{ width: '300px', height: '60px'}} focused color='primary'InputProps={{ endAdornment: (<InputAdornment position="end">
          <Image style={{cursor:"pointer"}} onClick={()=>{setstate((prevData) => ({ ...prevData, showConPassword: !state.showConPassword }));}} alt="Iconview" src={state.showConPassword ? Show : Hide} width={20} height={'30px'}></Image>
          </InputAdornment>)}}/>
          </LightTooltip>
          {/* //*Textfield */}
    </>
  )
}

export default textfield