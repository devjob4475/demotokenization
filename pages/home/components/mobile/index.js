// Add this import at the top of your file
import React, { useContext } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { themedata } from '@/data/themedata';
import { MyContext } from 'context';
import KeyIcon from '@mui/icons-material/Key';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useRouter } from 'next/router';
import { frontdata } from '@/data/frontdata';
import FaceIcon from '@mui/icons-material/Face';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Title from '@/components/title';
function Index() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [state, setState] = useContext(MyContext);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleDelete = (userId) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": userId
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET}/api/delete-user-by-id`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status === "OK"){
        setState(prevState => ({...prevState,alluser: prevState.alluser.filter(user => user.ID !== userId)
        }))}else{
          setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
        }
      })
      .catch(error => console.log('error', error));
  }
  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.log('Something went wrong', err);
    })
  };

  const userInfo = {
    Email: { value: showPassword ? state.decode_token.UsernameOriginal : state.decode_token.username, icon: <EmailIcon /> },
    Name: { value: showPassword ? state.decode_token.firstname_original + ' ' + state.decode_token.surname_origianl : state.decode_token.firstname_token + state.decode_token.surname_token, icon: <AccountCircleIcon /> },
    Company: { value: showPassword ? state.decode_token.company_name : state.decode_token.company_token, icon: <BusinessIcon /> },
    Role: { value: state.decode_token.role, icon: <AccessibilityIcon /> },
    Password: { value: state.decode_token.password_hash, icon: <KeyIcon /> },
  };
  const AllUser = state.decode_token.role === "admin" && {
    User: state.alluser.map((user) => ({
      id: user.ID,
      value: user.UsernameOriginal,
      icon: <FaceIcon />,
    })),
  };
  return (
      <Box margin={0.1} sx={{width:"100%",height:"250vh",background: `linear-gradient(108deg, ${themedata[0].primary} 0%, ${themedata[0].bgshadowwhite} 100%), linear-gradient(110deg, ${themedata[0].greenlight} -2.13%, ${themedata[0].greenblack} 102.03%), ${themedata[0].three}`,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
       <Title namepage="Information" company="Partne Demo Tracthai"/>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 3, borderRadius: 2, boxShadow: 3, background: '#fff', width: 'fit-content', }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Information
        </Typography>
        {Object.entries(userInfo).map(([key, { value, icon }], index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton edge="start" sx={{ mr: 1 }}>
              {icon}
            </IconButton>
            <Typography sx={{ width: '100px', fontWeight: 'bold', userSelect: 'none' }}>{key}:</Typography>
            <Typography sx={{ flexGrow: 1, marginLeft: '10px', userSelect: 'none' }}>
              {value}
            </Typography>
            <IconButton disabled={state.decode_token.role === "admin" ? false : true} onClick={() => handleCopyText(value)} edge="end">
              {(key === 'Password') && (<ContentCopyIcon />)}
            </IconButton>
            {(key === 'Password' || key === 'Email' || key === 'Name' || key === 'Company' || key === 'Role') && (
              <IconButton disabled={state.decode_token.role === "admin" ? false : true} onClick={handleClickShowPassword} edge="end" aria-label="toggle password visibility">
                {showPassword ? <VisibilityIcon color={state.decode_token.role === "admin" ? "success" : ""} /> : <VisibilityOffIcon color={state.decode_token.role === "admin" ? "success" : ""} />}
              </IconButton>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ mt:3,display: state.decode_token.role === "admin" ? "flex" : "none", flexDirection: 'column', padding: 3, borderRadius: 2, boxShadow: 3, background: '#fff', width: 'fit-content' }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>All User</Typography>
        {state.decode_token.role === "admin" && AllUser.User.map((user, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton edge="start" sx={{ mr: 1 }}>
              {user.icon}
            </IconButton>
            <Typography sx={{ width: '100px', fontWeight: 'bold', userSelect: 'none' }}>Username:</Typography>
            <Typography sx={{ flexGrow: 1, userSelect: 'none' }}>{showPassword ? user.value : '********'}</Typography>
            <IconButton disabled={state.decode_token.role === "admin" ?false:true} onClick={() => handleDelete(user.id)}>
             {showPassword ? (
               <DeleteForeverIcon color={state.decode_token.role === "admin"? "error" : ""} />
             ) : (
               <DeleteForeverIcon color={state.decode_token.role === "admin" ? "error" : ""} />
             )}
           </IconButton>
          </Box>
        ))}
      </Box>
      <Button sx={{ mt: 2 }} variant='contained' onClick={() => { router.push('/login'); }} style={{ fontSize: '12px', padding: '6px 12px', backgroundColor: `${themedata[0].primary}`, width: '200px', height: 'auto', textTransform: 'capitalize', fontFamily: frontdata[0].font, color: `${themedata[0].three}` }}>{state.loading ? <Loading /> : "Logout"}</Button>
      </Box>
  );
}

export default Index;