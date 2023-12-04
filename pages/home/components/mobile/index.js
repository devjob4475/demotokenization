import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Collapse, Divider, IconButton, Switch, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { themedata } from '@/data/themedata';
import { MyContext } from 'context';
import { useRouter } from 'next/router';
import { frontdata } from '@/data/frontdata';
import Email from '@/assets/images/email.png'
import Account from '@/assets/images/account.jpg'
import Company from '@/assets/images/company.jpg'
import Role from '@/assets/images/role.jpg'
import Password from '@/assets/images/password.jpg'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Image from 'next/image';
import { border, styled } from '@mui/system';
import CachedIcon from '@mui/icons-material/Cached';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 70,
  height: 35,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    padding: -10,
    marginLeft:2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(29px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#28B30E' : '#28B30E',
        opacity: 1,
        border: "2px solid #28B30E",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 26,
    height: 26,
    margin:-3
  },
  '& .MuiSwitch-track': {
    borderRadius: 36 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#39393D',
    opacity: 1,
    border: "2px solid #B3B5B4",
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const IOSSwitchAccount = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 70,
  height: 35,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    padding: -10,
    marginLeft:2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(29px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#28B30E' : '#28B30E',
        opacity: 1,
        border: "2px solid #28B30E",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 26,
    height: 26,
    margin:-3
  },
  '& .MuiSwitch-track': {
    borderRadius: 36 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    border: "2px solid #B3B5B4",
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const IOSSwitchAccountDisable = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 70,
  height: 35,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    padding: -10,
    marginLeft:2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(29px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#28B30E' : '#E9E9EA',
        opacity: 1,
        border: "2px solid #E9E9EA",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 26,
    height: 26,
    margin:-3
  },
  '& .MuiSwitch-track': {
    borderRadius: 36 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    border: "2px solid #B3B5B4",
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


function Index() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showMask,setShowMask] = React.useState(false);
  const [showPasswordAcount, setShowPasswordAccount] = React.useState(false);
  const [showMaskAccount,setShowMaskAccount] = React.useState(false);
  const [info,setInfo] = React.useState(0);
  const [state, setState] = useContext(MyContext);
  const [deleteStates, setDeleteStates] = useState({});
  const [Localalluser, setLocalAllUser] = React.useState([]);
  const [personal, setPersonal] = React.useState([]);
  const [open, setOpen] = useState(false);
  const [maskingEnabled, setMaskingEnabled] = React.useState(false);

  const handleToggleCollapse = () => {
    setOpen((prev) => !prev);
  };

 
useEffect(() => {
  const items = JSON.parse(localStorage.getItem('alluser'));
  if (items) {
    setLocalAllUser(items);
  }
}, []);

useEffect(() => {
  const personaldata = JSON.parse(localStorage.getItem('decode_token'));
  if (personaldata) {
    setPersonal(personaldata);
  }
}, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowToken= () => {
    setShowMask(!showMask);
  };
  const handleClickShowPasswordAccount = () => {
    setShowPasswordAccount(!showPasswordAcount);
  };

  const handleClickShowTokenAccount= () => {
    setShowMaskAccount(!showMaskAccount);
  };
  const handleDelete = (userId) => {

    if (!deleteStates[userId]) {
      setDeleteStates((prevStates) => ({ ...prevStates, [userId]: true }));
    }
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
        if(result.status === "OK")
     setState((prevData) => ({ ...prevData, btalluser: true,btdelete:true}));
        else{
          setState((prevData) => ({ ...prevData, alert: true,errordetail: result.message }));
        }
      })
      .catch(error => console.log('error', error));
  }

  const userInfo = {
    Email: { value: showPassword? personal?personal.UsernameOriginal: state.decode_token.UsernameOriginal : personal?personal.username: state.decode_token.username, icon: <Image style={{width:"20px",height:"auto"}} src={Email} alt='email'/> },
    Name:  { value: showPassword ? personal? personal.firstname_original + ' ' + personal.surname_origianl : state.decode_token.firstname_original + ' ' + state.decode_token.surname_origianl : personal? personal.firstname_token + personal.surname_token : state.decode_token.firstname_token + state.decode_token.surname_token, icon: <Image style={{width:"20px",height:"auto"}} src={Account} alt='email'/> },
    Company: { value: showPassword ? personal? personal.company_name : state.decode_token.company_name : personal? personal.company_token : state.decode_token.company_token, icon: <Image style={{width:"20px",height:"auto"}} src={Company} alt='email'/> },
    Role: { value: personal?personal.role : state.decode_token.role, icon: <Image style={{width:"20px",height:"auto"}} src={Role} alt='email'/> },
    Password: { value: personal? personal.password_hash :state.decode_token.password_hash, icon: <Image style={{width:"19px",height:"auto"}} src={Password} alt='email'/> },
  };

  return (
      <Box  sx={{width:"110%",height:"150vh",background: `linear-gradient(108deg, ${themedata[0].primary} 0%, ${themedata[0].bgshadowwhite} 100%), linear-gradient(110deg, ${themedata[0].greenlight} -2.13%, ${themedata[0].greenblack} 102.03%), ${themedata[0].three}`,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} >
        <Box position="absolute" sx={{width:"90%",height:"auto",display:"flex",flexDirection:"column"}}>
        <Box sx={{display:'flex',ml:3,mb:-0.5}}>
          <Box onClick={()=>{
            setInfo(0);
            setShowMaskAccount(false);
            setShowPasswordAccount(false);
            setShowMask(false);
            setShowPassword(false);
            }} sx={{cursor:"pointer",width: "160px",height: "54px",flexShrink: 0,background:info===0?"#fff":"#FDFDFD",color:info===0?"":"#B6B6B6",borderRadius:"14px 14px 0px 0px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily: frontdata[0].font, fontWeight: '800'}}>
            <Box>Personal Info</Box>         
          </Box>
          {personal.role==="admin"||state.decode_token.role === "admin"?(
          <Box onClick={()=>{
            setInfo(0);
            setShowMaskAccount(true);
            setShowPasswordAccount(false);
            setShowMask(false);
            setShowPassword(false);
            setInfo(1);
            setMaskingEnabled(false);
          }
            } sx={{cursor:"pointer",ml:1,width: "160px",height: "54px",flexShrink: 0,background:info===1?"#fff":"#FDFDFD",color:info===1?"":"#B6B6B6",borderRadius:"14px 14px 0px 0px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily: frontdata[0].font, fontWeight: '800'}}>
            <Box>All User</Box>
          </Box>
          ):("")}
        </Box>
          <Box sx={{p:5,width: "auto",height: "auto",flexShrink: 0,borderRadius:"30px",background:"#fff",boxShadow:"0px 13px 68px 0px rgba(0, 0, 0, 0.13),",overflow: "hidden",}}>
            {info===0?(
              <>
              <Box sx={{fontFamily: frontdata[0].font, fontWeight: '800',fontSize:"20px"}}>Personal Infomation</Box>
              <Divider sx={{mt:3,mb:3}}/>
              {Object.entries(userInfo).map(([key, { value, icon }], index) => (
              <Box key={`${index}`} sx={{mt:2,width:"auto",height:"35px",border:"1px solid #171717" ,borderRadius:"11px",background:"#fff",display:"flex",alignItems:"center",overflow: "hidden"}}>
                <Box sx={{ml:3,alignItems:"center",display:"flex"}}>{icon}</Box>
                <Box sx={{mt:0.2,ml:1,alignItems:"center",display:"flex",fontFamily: frontdata[0].font}}>{key}</Box>
                <Box sx={{ml:key ==="Company"?1:key==="Password"?1:key==="Role"?6:key ==="Name"?4.5:key==="Email"?5:"",width:"1px",height:"25px",background:"#E1E1E1"}}/>
                <Box sx={{ml:2,pl:2,pr:2,fontFamily: frontdata[0].font}}>{showMask ? value : "********************"}</Box>
              </Box>
               ))}
               <Box ml={-0.5} display="flex" alignItems="center" justifyContent="flex-start">
               {personal.role === "admin" ?(
                <IOSSwitch onClick={handleClickShowPassword} sx={{ mt: 1 }}  defaultChecked />
                ):(<IOSSwitchAccountDisable onClick={handleClickShowPassword} sx={{ mt: 1 }} disabled  defaultChecked />)}
                <Box sx={{ml:2,mt:1,fontFamily: frontdata[0].font,}}>Tokenization</Box>
                </Box>
                <Box ml={1} display="flex" alignItems="center" justifyContent="flex-start">
                  {personal.role === "admin" ? (
                    maskingEnabled ? (
                      <VisibilityIcon onClick={() => { handleClickShowToken();setMaskingEnabled(!maskingEnabled);}}sx={{ cursor: 'pointer', ml: 2, mt: 1, fontSize: '40px' }}/>
                      ) : (
                        <VisibilityOffIcon onClick={() => {handleClickShowToken(); setMaskingEnabled(!maskingEnabled);}}sx={{ cursor: 'pointer', ml: 2, mt: 1, fontSize: '40px' }}/>
                        )
                        ) : (
                          <VisibilityIcon color="disabled" sx={{ ml:2,mt: 1, fontSize: '40px' }} disabled />
                          )}
                <Box sx={{ml:2,mt:1,fontFamily: frontdata[0].font,}}>Hide Information</Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <Button sx={{ mt: 2}} variant='contained' onClick={() => { router.push('/login'); }} style={{ fontSize: '12px', padding: '12px 12px', backgroundColor: `${themedata[0].logout}`, width: '300px', height: 'auto', textTransform: 'capitalize', fontFamily: frontdata[0].font, color: `${themedata[0].three}` }}>{state.loading ? <Loading /> : "Logout"}</Button>
                </Box>
              </>
              ):(
                <>
              <Box sx={{display:"flex",fontFamily: frontdata[0].font, fontWeight: '800',fontSize:"20px"}}>All User <Box sx={{display:"flex",alignItems:"center"}}><CachedIcon onClick={()=>{
                setState((prevData) => ({ ...prevData,btalluser:true,btreload:true }));
              }} sx={{cursor:"pointer",fontSize:"20px",animation: state.btreload ? "rotate 2s infinite linear" : "none",}}/></Box></Box>
              <Divider sx={{mt:3,mb:3}}/>
              <table>
        			<tr style={{fontFamily: frontdata[0].font}}>
        				<th>Username</th>
        				{/* <th>Name</th> */}
        				{/* <th>Role</th> */}
        				<th></th>
        			</tr>
        		</table>
            {personal.role==="admin" && Localalluser.map((user, index) => (
            <table key={`${index}`} className="gfg">
        			<tr style={{fontFamily: frontdata[0].font}}>
        				
                <Box>
                <ListItemButton onClick={handleToggleCollapse} sx={{ display: 'flex', alignItems: "center", justifyContent: "flex-start" }}>
                  <Image style={{ width: "20px", height: "auto" }} src={Account} alt='email' />&nbsp;
                 <Box sx={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{showMaskAccount ? showPasswordAcount ? user.UsernameOriginal : user.Username : '********'}</Box>
                  
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{width:'300px'}}>
                      <TableRow>
                      <TableCell>
                      <Typography component="div" variant="body2" >
                      <Box sx={{overflow: 'hidden', textOverflow: 'ellipsis'}} ><strong>Name</strong>  {showMaskAccount ?  showPasswordAcount ? user.FirstnameOriginal + ' ' + user.SurnameOriginal : user.Firstname + user.Surname : '********'}</Box> 
                      </Typography>
                      </TableCell> 
                      </TableRow>
                    </ListItemButton>
                    <ListItemButton>
                      
                        <TableCell>
                         <Box > <strong>Role</strong> {showMaskAccount ? user.Role : '********'}</Box>
                        </TableCell>
                        <TableCell>
                          
                        </TableCell>
                      
                    </ListItemButton>
                  </List>
                </Collapse>
              </Box>
             
        				
        				<td><IconButton sx={{
                  paddingLeft:13,
                  animation: deleteStates[user.ID]
                    ? "zoom 0.5s infinite linear"
                    : "none"
                }}  disabled={personal.role === "admin" ?false:true} onClick={() => handleDelete(user.ID)}>
                        {showPasswordAcount ? (
                            <DeleteForeverIcon color={personal.role === "admin"? "error" : ""} />
                          ) : (
                            <DeleteForeverIcon color={personal.role === "admin" ? "error" : ""} />
                          )}
                        </IconButton></td>
                      </tr>
                    </table>
                ))} 
               <Box ml={-0.5} display="flex" alignItems="center" justifyContent="flex-start" >
               <IOSSwitchAccount onClick={handleClickShowPasswordAccount} sx={{ mt: 1 }} defaultChecked />
                <Box sx={{ml:2,mt:1,fontFamily: frontdata[0].font,}}> Tokenization</Box>
                </Box>
                <Box ml={-0.5} display="flex" alignItems="center" justifyContent="flex-start">
                <IconButton onClick={handleClickShowPasswordAccount} color="inherit">
                {personal.role === "admin" ? (
                    maskingEnabled ? (
                      <VisibilityIcon onClick={() => { handleClickShowTokenAccount();setMaskingEnabled(!maskingEnabled);}}sx={{ cursor: 'pointer', ml: 2, mt: 1, fontSize: '40px' }}/>
                    ) : (
                      <VisibilityOffIcon onClick={() => {handleClickShowTokenAccount(); setMaskingEnabled(!maskingEnabled);}}sx={{ cursor: 'pointer', ml: 2, mt: 1, fontSize: '40px' }}/>
                    )
                  ) : (
                    <VisibilityIcon color="disabled" sx={{ ml:2,mt: 1, fontSize: '40px' }} disabled />
                  )}
                </IconButton>
                <Box sx={{ ml: 2, mt: 1, fontFamily: frontdata[0].font }}>
                Hide Information
                </Box>
              </Box>
                 <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Button sx={{width: 300, mt: 3,ml:"auto"}} variant='contained' onClick={() => {
                   router.push('/login'); 
                   localStorage.removeItem("alluser")
                   localStorage.removeItem("decode_token")
                   }} style={{  fontSize: '12px', padding: '12px 12px', backgroundColor: `${themedata[0].logout}`, width: '300px', height: 'auto', textTransform: 'capitalize', fontFamily: frontdata[0].font, color: `${themedata[0].three}` }}>{state.loading ? <Loading /> : "Logout"}
                   </Button>
                </Box>
              </>
              )}
            </Box>
          </Box>
        </Box>
  );
}
export default Index;