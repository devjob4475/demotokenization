import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, FormControlLabel, Grid, InputLabel, Select, Slide, TextField } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useContext, useState } from 'react'
import {MyContext} from 'context'
import { themedata } from '@/data/themedata';
import { frontdata } from '@/data/frontdata';
import { buttontext } from '@/data/buttondata';
import Loading from '@/components/loading'
import { Router, useRouter } from 'next/router';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    });
    function index() {
    const [state, setState] = useContext(MyContext);
    const [title, settitle] = React.useState('');
    const router = useRouter();
    
    const handleClose = () => {
        setState((prevData) => ({ ...prevData, openpc: false }));
        
}
      const handleCheckboxChange = (event) => {
        setState((prevData) => ({ ...prevData, Confirmed: event.target.checked }));
}
    
const handleSubmit = async () => {
    setState(prev => ({ ...prev, loading: true }));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        username: state.emailconfirm?state.emailconfirm:state.email,
        firstname: state.firstName,
        surname: state.LastName ,
        firstname_en: state.firstName,
        surname_en: state.LastName ,
        mobile_phone: state.MobileNumber,
        personal_email: state.emailconfirm?state.emailconfirm:state.email,
        company_name: state.varidate.company_name_en_original,
        company_name_en: state.varidate.company_name_en_original,
        credit_card: "1234123412341238",
        country: state.varidate.country,
        province: state.varidate.province,
        amphoe: state.varidate.amphoe,
        tambon: state.varidate.tambon,
        zipcode: state.varidate.zipcode,
        website: state.varidate.website,
        address1: state.varidate.address1,
        address2: state.varidate.address2,
        role: state.role,
        title: title
})
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
    <Box>
         <Dialog fullScreen open={state.openpc} onClose={handleClose} TransitionComponent={Transition}>
            <Box p={3}>
            <Box sx={{ color: 'black', fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Confirm User <br></br> Registration</Box>
          <Box pb={3} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
          Please Check and confirm the information.</Box>
          <Divider/>
          <Box sx={{color: 'black', fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <br></br>
            <Box sx={{display: "flex",flexDirection:'column', alignItems: "center", justifyContent: "center" }}>
            <Container elevation={3} >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
        <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Company Name</div>
        <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}> {state.varidate.company_name_en_original}</Box></Box>
        <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Branch</div>
        <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391', fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Branch - </Box></Box>
        <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Address</div>
        <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.address1} </Box></Box>
        <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Address 2</div>
        <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.address2} </Box></Box>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Box p={2} >
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Country</div>
        <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.country}</Box></Box>
        <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>State / Provice</div>
        <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.province}</Box></Box>
        <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>District</div>
        <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.amphoe}</Box></Box>
        <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Sub-District</div>
        <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.tambon}</Box></Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Post / ZIP Code</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.zipcode}</Box></Box>
        <Box p={2}>
        <div style={{ fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Website</div>
          <Box pt={1} sx={{fontFamily: frontdata[0].font,color: '#7F8391'}}>{state.varidate.website}</Box></Box>
        </Grid>
      </Grid>
    </Container>
         </Box>
          <Box p={2}/>
          <Divider/>
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
          <Grid item  container  pl={5}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid item xs={4} pb={2}>
            <Box>
            <TextField disabled id="firstName" name="title" label="title" placeholder="" size='small' value={state.title}  sx={{ width: '85px', height: '60px' }} focused color='primary'/>
            <TextField disabled id="firstName" name="firstName" label="First Name"placeholder="Enter Your First Name" size='small' value={state.firstName}  sx={{ width: '215px', height: '60px' }} focused color='primary'/>
            </Box>
            </Grid>
            <Grid item xs={4}>
            <TextField disabled id="jobTitle" name="jobTitle" label="Job Title"placeholder="Enter Your Job Title" size='small' value={state.jobTitle}   sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            <TextField disabled id="Email" name="company_email" label="Email"placeholder="example@thac.com" size='small'value={state.emailconfirm?state.emailconfirm:state.email} sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>     
            <Grid item xs={4}>
            <TextField  id="LastName" name="LastName" label="Last Name"placeholder="Enter Your Last Name" size='small' value={state.LastName}   sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid item xs={4}>
            <TextField disabled id="MobileNumber" name="MobileNumber" label="Mobile Number"placeholder="Enter Your Mobile Number" size='small'value={state.MobileNumber}    sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            <TextField disabled id="role" name="role" label="Role"placeholder="Enter Your Mobile Number" size='small'value={state.role}    sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
          </Grid>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <FormControlLabel control={<Checkbox checked={state.Confirmed} onChange={handleCheckboxChange}/>} label="Confirm information is correct" />
          </Box>
          <Box sx={{ display:'flex', justifyContent:'center'}}>
          <Button variant="outlined" onClick={handleClose} sx={{width:'20%'}}>Back</Button>
            <Box p={1}/>
            <Button disabled={!state.Confirmed} variant="contained"sx={{width:'20%'}} onClick={handleSubmit} >{state.loading?<Loading/>:buttontext[0].text}</Button>
            
             </Box> 
          </Box>
            </Dialog>
    </Box>
  )
}

export default index