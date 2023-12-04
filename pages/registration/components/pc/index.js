import { Box, Button, Checkbox, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
import {MyContext} from 'context'
import { Router, useRouter } from 'next/router';
import { buttontext } from '@/data/buttondata';
import Loading from '@/components/loading'
import { Container } from '@mui/system';
import Dialogpc   from '../dialogpc/index'

    function index() {
  const [state, setState] = useContext(MyContext);
  const router = useRouter();
  const handleChange1 = (event) => {
    setState(prevData => ({ ...prevData, title: event.target.value }));
};
  const handleChange = (event) => {
        setState(prevState => ({ ...prevState, role: event.target.value }));
};
  const handleClickOpenpc = () => {
    if (state.firstName) {
        setState((prevData) => ({ ...prevData, openpc: true }))
      } else {
        setState((prevData) => ({ ...prevData, alert: true }))
        setState((prevData) => ({ ...prevData, errordetail: "กรุณากรอกข้อมูลให้ครบถ้วนก่อนทำการส่งฟอร์ม." }))
      }
    }
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}/api1/countries`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load countries');
        }
        return response.json();
      })
      .then(result => {
        setState(prevState => ({ ...prevState, countries: result }));
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <Box  sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,width:'100%',height:"130vh"}}>
      
      <Box pt={3} sx={{display: "flex", alignItems: "center", justifyContent: "center" }}> 
      <Box p={1} sx={{ flexDirection:'column', background: 'white', width: '80%', height: '750px', borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}> 
      <Box p={3}>
            <Box  sx={{ color: `${themedata[0].four}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Update information</Box>
          <Box pb={3} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
              Please fill in the form. All fields marked with (*) shall be required.</Box>
          <Divider/>
          <Box p={1} sx={{color: `${themedata[0].four}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
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
          <Divider/>
          <Box  p={2} sx={{color: `${themedata[0].four}`, fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
          <Grid item  container  pl={5}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{  width: '50%' }}>
            <Grid item xs={4} pb={2}>
            <FormControl sx={{ width: '80px', height: '40px', pr: 0.5 }}>
              <InputLabel >title</InputLabel>
              <Select size='small' value={state.title} label="Sex" onChange={handleChange1}>
                <MenuItem value={"Mr"}>Mr.</MenuItem>
                <MenuItem value={"Mrs"}>Mrs.</MenuItem>
                <MenuItem value={"Miss"}>Miss.</MenuItem>
              </Select>
            </FormControl>
            <TextField  id="firstName" name="firstName" label="First Name"placeholder="Enter Your First Name" size='small' value={state.firstName} onChange={handleInputChange} sx={{ width: '215px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            <TextField  id="jobTitle" name="jobTitle" label="Job Title"placeholder="Enter Your Job Title" size='small' value={state.jobTitle} onChange={handleInputChange}  sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            <TextField disabled id="Email" name="company_email" label="Email"placeholder="example@thac.com" size='small'value={state.email} onChange={handleInputChange}  sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>     
            <Grid item xs={4}>
            <TextField  id="LastName" name="LastName" label="Last Name"placeholder="Enter Your Last Name" size='small' value={state.LastName} onChange={handleInputChange}  sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid> 
            <Grid item xs={4}>
            <TextField  id="MobileNumber" name="MobileNumber" label="Mobile Number"placeholder="Enter Your Mobile Number" size='small'value={state.MobileNumber} onChange={handleInputChange}   sx={{ width: '300px', height: '60px' }} focused color='primary'/>
            </Grid>
            <Grid item xs={4}>
            <FormControl >
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select labelId="demo-simple-select-label"id="demo-simple-select"value={state.role}label="Role"onChange={handleChange}
            sx={{ width: '300px', height: '40px' }} size='small'>
              <MenuItem value={"admin"}>admin</MenuItem>
              <MenuItem value={"user"}>user</MenuItem>
            </Select>
          </FormControl>
            </Grid>
          </Grid>
          </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', mb:3}}>
        <Button variant="contained" onClick={handleClickOpenpc} sx={{color:'white', textTransform:'capitalize', width: '200px', height: 'auto'}}>{state.loading?<Loading/>:buttontext[0].text}</Button>
        <Dialogpc/>
        <Box>
        </Box>
        </Box>
        </Box>
        </Box> 
        </Box>
  )
}
export default index
