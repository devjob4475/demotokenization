import { frontdata } from '@/data/frontdata'
import { themedata } from '@/data/themedata'
import { Button, Divider, FormControlLabel } from '@mui/material'
import { Box  } from '@mui/system'
import React, { useContext } from 'react'
import Email from '@/assets/images/email.png'
import Account from '@/assets/images/account.jpg'
import Company from '@/assets/images/company.jpg'
import Role from '@/assets/images/role.jpg'
import Password from '@/assets/images/password.jpg'
import Image from 'next/image'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MyContext } from '@/context'

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 100, 
  height: 55, 
  padding: 0,
  borderRadius: 26 ,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    borderRadius: 22,
    '&.Mui-checked': {
      transform: 'translateX(26px)', 
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
        borderRadius: 13,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '& .MuiSwitch-thumb': { 
      width: 50, 
      height: 50, 
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 13,
  },
}));

function index() {
    const [state, setState] = useContext(MyContext);
  return (
    <Box pt={10} pb={20} sx={{width:"70%",height:"100vh",background: `linear-gradient(108deg, ${themedata[0].primary} 0%, ${themedata[0].bgshadowwhite} 100%), linear-gradient(110deg, ${themedata[0].greenlight} -2.13%, ${themedata[0].greenblack} 102.03%), ${themedata[0].three}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button size="large" variant="contained" sx={{ background: `${themedata[0].three}`, textTransform: 'none',  padding: '12px 24px',  fontSize: '10px',justifyContent:'flex-start' }}> Personal Info</Button>
        <Button size="large" variant="contained" sx={{ background: `${themedata[0].three}`, textTransform: 'none',  padding: '12px 24px',  fontSize: '10px',justifyContent:'flex-start' }}> All User</Button>
        </Box>
         <Box p={7} sx={{ flexDirection:'column', background: 'white', width: '90%', height: '80%', borderRadius: 5, display: "flex", alignItems: "center",zIndex:'1' }}>
         <Box sx={{ color: `${themedata[0].ten}`, fontSize: "85px", fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word',position: 'relative'}}>Personal Infomation</Box>
         <Divider sx={{ width: '80%', pt:'1',pb:'2',height:'39.1px'}} />
         <Box sx={{width: '100%', height: '17%', background: 'white', borderRadius: 2, border: '0.57px #171717 solid', marginBottom: 2,marginTop: 2,display:'flex',justifyContent:'flex-start',alignItems:'center',paddingLeft: 2}} >
         <Box ><Image style={{width:"100px",height:"auto"}} src={Email} alt='email'/></Box><Box sx={{fontWeight: 'bold',fontSize:"50px",marginLeft: 1,}}>Email</Box><Divider orientation="vertical" flexItem sx={{mx: 2,height:'90%',}}/> <Box sx={{ flexGrow: 1, textAlign: 'left',fontSize:"50px" }}>{state.decode_token.UsernameOriginal}</Box>
         </Box>
         <Box sx={{width: '100%',height: '17%', background: 'white',borderRadius: 2,border: '0.57px #171717 solid',marginBottom: 2,marginTop: 2,display: 'flex',justifyContent: 'flex-start', alignItems: 'center',paddingLeft: 2 }}>
         <Box><Image style={{width:"100px",height:"auto"}} src={Account} alt='email'/></Box><Box sx={{fontWeight: 'bold', marginLeft: 1,fontSize:"50px"}}>Name</Box><Divider orientation="vertical" flexItem sx={{mx: 2, height: '90%'}}/><Box sx={{ flexGrow: 1, textAlign: 'left',fontSize:"50px" }}>{state.decode_token.UsernameOriginal}</Box>
         </Box>
         <Box sx={{width: '100%',height: '17%', background: 'white',borderRadius: 2,border: '0.57px #171717 solid',marginBottom: 2,marginTop: 2,display: 'flex',justifyContent: 'flex-start', alignItems: 'center',paddingLeft: 2 }}>
         <Box><Image style={{width:"100px",height:"auto"}} src={Company} alt='email'/></Box><Box sx={{fontWeight: 'bold',fontSize:"50px",marginLeft: 1}}>Company</Box><Divider orientation="vertical" flexItem sx={{mx: 2,height:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}/><Box sx={{ flexGrow: 1, textAlign: 'left',fontSize:"50px" }}>{state.decode_token.firstname_original}  {state.decode_token.surname_origianl}</Box>
         </Box>
         <Box sx={{width: '100%',height: '17%', background: 'white',borderRadius: 2,border: '0.57px #171717 solid',marginBottom: 2,marginTop: 2,display: 'flex',justifyContent: 'flex-start', alignItems: 'center',paddingLeft: 2 }}>
         <Box><Image style={{width:"100px",height:"auto"}} src={Role} alt='email'/></Box><Box sx={{fontWeight: 'bold',fontSize:"50px",marginLeft: 1}}>Role</Box><Divider orientation="vertical" flexItem sx={{mx: 2,height:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}/><Box sx={{ flexGrow: 1, textAlign: 'left',fontSize:"50px" }}>{state.decode_token.role}</Box>
         </Box>
         <Box sx={{width: '100%',height: '17%', background: 'white',borderRadius: 2,border: '0.57px #171717 solid',marginBottom: 2,marginTop: 2,display: 'flex',justifyContent: 'flex-start', alignItems: 'center',paddingLeft: 2 }}>
         <Box><Image style={{width:"100px",height:"auto"}} src={Password} alt='email'/></Box><Box sx={{fontWeight: 'bold',fontSize:"50px",marginLeft: 1}}>Password</Box><Divider orientation="vertical" flexItem sx={{mx: 2,height:'90%',}}/><Box sx={{ flexGrow: 1, textAlign: 'left',fontSize:"50px" }}>{state.decode_token.password_hash}</Box >
         </Box>
         <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '80%' ,flexDirection:'column'}}>
         <Box ><FormControlLabel control={<IOSSwitch  />} label="Tokenization" sx={{'& .MuiFormControlLabel-label': { fontSize: '80px' }}} /></Box>
          <Box sx={{  display: 'flex',  alignItems: 'center', fontSize: '90px', '& svg': { fontSize: '90px'} }}> <VisibilityIcon /></Box>
        </Box>
        <Box>
        <Button variant="contained"color="error"sx={{fontSize: '16px', width: '600px', height: '90px', }}>Contained</Button> 
        </Box>
         </Box>
    </Box>
  )
}

export default index
