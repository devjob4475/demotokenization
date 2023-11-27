import { Box, Button, Checkbox, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
import {MyContext} from 'context'
import { useRouter } from 'next/router';
import { buttontext } from '@/data/buttondata';
import Loading from '@/components/loading'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function index() {
  const [state, setState] = useContext(MyContext);
  const router = useRouter();
  const [title, settitle] = React.useState('');

  const handleChange1 = (event) => {
    settitle(event.target.value);
  };
  
  const handleChange = (event) => {
    setState(prevState => ({ ...prevState, role: event.target.value }));
  };
  const handleCheckboxChange = (event) => {
  setState((prevData) => ({ ...prevData, Confirmed: event.target.checked }));
}
const [openAlert, setOpenAlert] = useState(false);

const handleClickOpen = () => {
   if (state.firstName && state.LastName && state.jobTitle && state.email && state.MobileNumber  ) {
      setState((prevData) => ({ ...prevData, open: true }))
    
    console.log(state)
  } else {
    setOpenAlert(true);
  }
}
const handleCloseAlert = () => {
  setOpenAlert(false);
}
const handleClose = () => {
  setState((prevData) => ({ ...prevData, open: false }));
}
  
const handleInputChange = (event) => {
  const { name, value } = event.target;

  setState((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleSubmit = async () => {
  setState(prev => ({ ...prev, loading: true }));

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
username: state.email,
firstname: state.firstName,
surname: state.LastName ,
firstname_en: state.firstName,
surname_en: state.LastName ,
mobile_phone: state.MobileNumber,
personal_email: state.email,
company_name: state.varidate.company_name_en_original,
company_name_en: state.varidate.company_name_en_original,
credit_card: "1234123412341238",
country: state.varidate.country,
province: state.varidate.province,
amphoe: state.varidate.amphoe,
tambon: state.varidate.tambon,
zipcode: state.varidate.zipcodezipcode,
website: state.varidate.website,
address1: state.varidate.address1,
address2: state.varidate.address2,
role: state.role,
title: title
});

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: raw,
redirect: 'follow'
};
fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}/api/register`,requestOptions)
.then(response => response.json())
.then(result => {  
if (result.status === "OK") {
  setState(prev => ({ ...prev, loading:false  }));
  router.push('/checkyouemail');
}else
{
  setState((prevData) => ({ ...prevData,openpc:false, alert:true,errordetail: result.message,status:false }))
}
})
}
  return (
    <Box pt={3} pb={10}  sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,width:'100%',height:"auto",display: "flex",justifyContent: "center", alignItems: "center"}}>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center" }}> 
 
      <Box p={5} sx={{flexDirection:'column', background: 'white',width:'75%',height:'a',borderRadius: 10, }}> 
        <Box sx={{ color: `${themedata[0].ten}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word', textAlign: 'left'}}>User Registration</Box>
        <br></br>
        <Box pt={1} pb={1} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
          Please fill in the form. All fields marked with (*) shall be required.
        </Box>
        <Box sx={{width: '100%',  border: `1px ${themedata[0].four} solid`}}>  
        </Box>
        <Box>
        <Box pt={2} pb={2} sx={{color: `${themedata[0].ten}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word', textAlign: 'left'}}>Company Details</Box>
        </Box>
        <Grid container spacing={0.5} sx={{flexDirection:'column'}} > 
        <Grid item >
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word',textAlign:'left'}}>Company Name</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}> {state.varidate.company_name_en_original}</Box></Grid>
          <br></br>        
        <Grid item >
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Branch</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391', fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Branch - </Box></Grid>
          <br></br>
        <Grid item > 
         <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Address</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.address1} </Box></Grid>
          <br></br>
        <Grid item > 
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Address 2</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.address2} </Box> </Grid>
          <br></br>      
        <Grid item > 
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Country</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.country}</Box></Grid>
          <br></br>
        <Grid item >
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>State / Provice</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.province}</Box></Grid>
          <br></br>
        <Grid item >
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>District</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.amphoe}</Box></Grid>
          <br></br>
        <Grid item > 
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Sub-District</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.tambon}</Box></Grid> 
          <br></br>
        <Grid item > 
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Post / ZIP Code</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.zipcode}</Box> </Grid>
          <br></br>
        <Grid item > 
          <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Website</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.website}</Box> </Grid>
          <br></br>
        </Grid>
        <Box style={{ width: '100%', border: `1px ${themedata[0].four} solid` }}></Box>
        <Box>
        <Box pt={2} pb={2}  style={{color: `${themedata[0].ten}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Personal Details</Box>
        </Box>
        
          <Box sx={{display:'flex',}}>
        <FormControl sx={{ width: '95px', height: 'auto', pr: 0.5 }}>
              <InputLabel >title</InputLabel>
              <Select size='small' value={title} label="Sex" onChange={handleChange1}>
                <MenuItem value={"Mr"}>Mr.</MenuItem>
                <MenuItem value={"Mrs"}>Mrs.</MenuItem>
                <MenuItem value={"Miss"}>Miss.</MenuItem>
              </Select>
        </FormControl>
          <TextField  id="firstName" name="firstName" label="First Name"placeholder="Enter Your First Name" size='small' value={state.firstName} onChange={handleInputChange} style={{ width: '220px', height: '60px' }} focused color='primary'/>
          </Box>
          <Grid container spacing={0.5} sx={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}> 
          <Grid item >
          <TextField  id="LastName" name="LastName" label="Last Name"placeholder="Enter Your Last Name" size='small' value={state.LastName} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
          </Grid>
          <Grid item >
          <TextField  id="jobTitle" name="jobTitle" label="Job Title"placeholder="Enter Your Job Title" size='small' value={state.jobTitle} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
          </Grid>
          <Grid item >
          <TextField  id="MobileNumber" name="MobileNumber" label="Mobile Number"placeholder="Enter Your Mobile Number" size='small'value={state.MobileNumber} onChange={handleInputChange}   style={{ width: '300px', height: '60px' }} focused color='primary'/>
          </Grid>
          <Grid item >
          <TextField disabled id="Email" name="company_email" label="Email"placeholder="example@thac.com" size='small'value={state.email} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
          </Grid>
          <Grid item >
          <FormControl >
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select labelId="demo-simple-select-label"id="demo-simple-select"value={state.role}label="Role"onChange={handleChange}
            style={{ width: '300px', height: '40px' }} size='small'>
              <MenuItem value={"admin"}>admin</MenuItem>
              <MenuItem value={"user"}>user</MenuItem>
            </Select>
          </FormControl>
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
        <Button variant="contained" onClick={handleClickOpen} sx={{color:'white', textTransform:'capitalize', width: '200px', height: 'auto'}}>Next</Button>
        <Box>
        <Dialog fullScreen open={state.open} onClose={handleClose} TransitionComponent={Transition}>
            <Box p={3}>
                   <Box sx={{ color: 'black', fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Confirm User <br></br> Registration</Box>
          <Box pb={3} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
          Please Check and confirm the information.</Box>
          <Divider/>
          <Box sx={{color: 'black', fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <br></br>
            <Box sx={{display: "flex",flexDirection:'column', alignItems: "center", justifyContent: "center" }}>
            <Grid container spacing={0.5} sx={{flexDirection:'column'}} > 
            <Grid item >
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word',textAlign:'left'}}>Company Name</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}> {state.varidate.company_name_en_original}</Box></Grid>
              <br></br>        
            <Grid item >
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Branch</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391', fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Branch - </Box></Grid>
              <br></br>
            <Grid item > 
            <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Address</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.address1} </Box></Grid>
              <br></br>
            <Grid item > 
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Address 2</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.address2} </Box> </Grid>
              <br></br>      
            <Grid item > 
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Country</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.country}</Box></Grid>
              <br></br>
            <Grid item >
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>State / Provice</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.province}</Box></Grid>
              <br></br>
            <Grid item >
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>District</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.amphoe}</Box></Grid>
              <br></br>
            <Grid item > 
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Sub-District</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.tambon}</Box></Grid> 
              <br></br>
            <Grid item > 
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Post / ZIP Code</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.zipcode}</Box> </Grid>
              <br></br>
            <Grid item > 
              <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Website</div>
              <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.website}</Box> </Grid>
              <br></br>
            </Grid>
         </Box>
          <Box p={2}/>
          <Divider/>
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
          <Box sx={{display: "flex",flexDirection:'column', alignItems: "center", justifyContent: "center" }}>
          <Box sx={{display: "flex",flexDirection:'row', alignItems: "center", justifyContent: "center" }}>
          <TextField disabled id="outlined-disabled"label="Disabled"value={title} size='small' sx={{ width: '15%' }}  />
          <TextField disabled id="outlined-disabled"label="Disabled"value={state.firstName} size='small' sx={{ width: '55%' }}  />
          </Box >
          <br></br>
          <TextField disabled id="outlined-disabled"label="Disabled" value={state.LastName} size='small' sx={{ width: '70%' }} />
          <br></br>
          <TextField disabled id="outlined-disabled"label="Disabled" value={state.jobTitle} size='small' sx={{ width: '70%' }} />
          <br></br>
          <TextField disabled id="outlined-disabled"label="Disabled" value={state.MobileNumber} size='small' sx={{ width: '70%' }} />
          <br></br>
          <TextField disabled id="outlined-disabled"label="Disabled" value={state.email} size='small' sx={{ width: '70%' }} />
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <FormControlLabel control={<Checkbox checked={state.Confirmed} onChange={handleCheckboxChange}/>} label="Confirm information is correct" />
          </Box>
          <Box>
          <Button disabled={!state.Confirmed} variant="contained"sx={{width:'100%'}} onClick={handleSubmit} >{state.loading?<Loading/>:buttontext[0].text}</Button>
              <Box p={1}/>
              <Button variant="outlined" onClick={handleClose} sx={{width:'100%'}}>Back</Button>
             </Box> 
          </Box>
            </Dialog>
            <Dialog open={openAlert}onClose={handleCloseAlert}aria-labelledby="alert-dialog-title"aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">{"ข้อมูลไม่ครบถ้วน"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  กรุณากรอกข้อมูลให้ครบถ้วนก่อนทำการส่งฟอร์ม.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAlert} color="primary" autoFocus>
                  ตกลง
                </Button>
              </DialogActions>
            </Dialog>
              </Box>
            </Box>
          </Box>
          </Box> 
        </Box>
  )
}
export default index
