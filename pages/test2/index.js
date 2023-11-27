import { Box, Button, Checkbox, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
import {MyContext} from 'context'
import { Router, useRouter } from 'next/router';
import { buttontext } from '@/data/buttondata';
import Loading from '@/components/loading'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function index() {
  const [state, setState] = useContext(MyContext);
  const router = useRouter();
  
  const handleChange = (event) => {
    setState(prevState => ({ ...prevState, role: event.target.value }));
  };
  const handleCheckboxChange = (event) => {
  setState((prevData) => ({ ...prevData, Confirmed: event.target.checked }));
}
const [openAlert, setOpenAlert] = useState(false);

const handleClickOpen = () => {
   if (state.firstName && state.LastName && state.jobTitle && state.email && state.MobileNumber && state.company_name_en ) {
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
  const handleCountryChange = (event) => {
    setState(prevState => ({ ...prevState, selectedCountry: event.target.value }));
  };
  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setState(prev => ({ ...prev, selectedProvince }));
    const amphoesData = state.data
      .filter(item => item.ProvinceThai === selectedProvince)
      .map(item => item.DistrictThai);
    setState(prev => ({
      ...prev,
      amphures: Array.from(new Set(amphoesData)).sort(),
      selectedAmphoe: '',
      selectedTambon: '',
      zipcode: ''
    }));
  };
  const handleAmphoeChange = (event) => {
    const selectedAmphoe = event.target.value;
    setState(prev => ({ ...prev, selectedAmphoe }));
    const tambonsData = state.data
      .filter(item => item.DistrictThai === selectedAmphoe)
      .map(item => item.TambonThai);
    setState(prev => ({
      ...prev,
      tambons: Array.from(new Set(tambonsData)).sort(),
      selectedTambon: '',
      zipcode: ''
    }));
  };
  const handleTambonChange = (event) => {
    const selectedTambon = event.target.value;
    setState(prev => ({ ...prev, selectedTambon }));
    const tambonData = state.data.find(item => item.TambonThai === selectedTambon);
    if (tambonData) {
      setState(prev => ({ ...prev, zipcode: tambonData.PostCodeMain }));
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleSubmit = async () => {
    setState(prev => ({ ...prev, loading: true }));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    username: state.email,
    firstname: "วรพล",
    surname: "อัศวนิก",
    firstname_en: state.firstName,
    surname_en: state.LastName,
    mobile_phone: state.MobileNumber,
    personal_email: "woraponasvn36@gmail.com",
    company_name: "เดอะ รีโคฟเวอรี่ แอดไวเซอร์ จำกัด",
    company_name_en: state.company_name_en,
    credit_card: "1234123412341238",
    role: state.role,
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
    console.log(state)
    setState((prevData) => ({ ...prevData,open:false, alert:true,errordetail: result.message,status:false }))
  }
})
}
  return (
    <Box pt={3} pb={10}  sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,width:'100%',height:"auto",display: "flex",justifyContent: "center", alignItems: "center"}}>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center" }}> 
 
      <Box p={5} sx={{flexDirection:'column', background: 'white',width:'75%',height:'160vh',borderRadius: 10, }}> 
        <Box sx={{ color: `${themedata[0].ten}`, fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word', textAlign: 'left'}}>User Registration</Box>
        <br></br>
        <Box pt={1} pb={1} sx={{color:  `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>
          Please fill in the form. All fields marked with (*) shall be required.
        </Box>
        <Box sx={{width: '100%',  border: `1px ${themedata[0].four} solid`}}>  
        </Box>
        <Box>
          
        <Box pt={2} pb={2} sx={{color: `${themedata[0].ten}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word', textAlign: 'left'}}>Personal Details</Box>
        </Box>
        <Grid container spacing={0.5} sx={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}} > 
          <Grid item >
          <TextField  id="firstName" name="firstName" label="First Name"placeholder="Enter Your First Name" size='small' value={state.firstName} onChange={handleInputChange} style={{ width: '300px', height: '60px' }} focused color='primary'/>
          </Grid>
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
        </Grid>
     
        <Box style={{ width: '100%', border: `1px ${themedata[0].four} solid` }}></Box>
        <Box>
        <Box pt={2} pb={2}  style={{color: `${themedata[0].ten}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word'}}>Company Details</Box>
        </Box>
        <Grid container spacing={0.5} sx={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}> 
          <Grid item >
          <TextField disabled={state.match === true ? true:false} id="CompanyName" name="CompanyName"  label="Company Name"placeholder="Enter Company Name" size='small'value={state.company_name_en} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
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
          <br></br>
          <br></br>
          </Grid>
          <Grid item >
          <TextField  id="Address" name="Address" label="Address"placeholder="Street, Apt" size='small' value={state.Address} onChange={handleInputChange} style={{ width: '300px', height: '60px' }} focused color='primary'/>
          </Grid>
          <Grid item >
          <TextField  id="Address2" name="Address2" label="Address 2"placeholder="Office, Room/Flat" size='small'value={state.Address2} onChange={handleInputChange}  style={{ width: '300px', height: '60px' }} focused color='primary'/>
          </Grid>
          <Grid container spacing={3} sx={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}} >
          <Grid item >
          <FormControl >
           <InputLabel id="country-select-label">Country</InputLabel>
            <Select labelId="country-select-label"id="country-select"value={state.selectedCountry}label="Country"onChange={handleCountryChange} 
            style={{ width: '300px', height: '40px' }} size='small'>
                {state.countries && state.countries.map((country, index) => (
                <MenuItem key={index} value={country.name}>
                  {country.name}
                </MenuItem>
              ))} 
            </Select>
            </FormControl>
          </Grid>
          <Grid item >
          <FormControl >
            <InputLabel >State / Provice</InputLabel>
            <Select labelId="province-select" id="province-select" value={state.selectedProvince} label="Province" onChange={handleProvinceChange}
            style={{ width: '300px', height: '40px' }} size='small'>
              {state.provinces && state.provinces.map((province, index) => (
                <MenuItem key={index} value={province}>
                  {province}
                </MenuItem>))}
            </Select>
            </FormControl>
          </Grid>
          <Grid item >
          <FormControl >
          <InputLabel id="amphoe-select-label">Amphoe</InputLabel>
          <Select labelId="amphoe-select-label" id="amphoe-select" value={state.selectedAmphoe} label="Amphoe" onChange={handleAmphoeChange}
          style={{ width: '300px', height: '40px' }} size='small'>
           {state.selectedProvince &&  state.amphures.map((amphoe, index) => (
              <MenuItem key={index} value={amphoe}>
                {amphoe}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
          </Grid>
          <Grid item >
          <FormControl >
              <InputLabel id="tambon-select-label">Tambon</InputLabel>
              <Select labelId="tambon-select-label" id="tambon-select"value={state.selectedTambon} label="Tambon"
                onChange={handleTambonChange} style={{ width: '300px', height: '40px' }} size='small'>
                {state.selectedAmphoe && state.tambons.map((tambon, index) => (
                  <MenuItem key={index} value={tambon}>
                    {tambon}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={0.5} sx={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <Grid item >
          <TextField  disabled label="Postal Code" variant="outlined" placeholder="Postal Code"  size='small'   value={state.zipcode}  InputProps={{ readOnly: true, }} style={{ width: '300px', height: '60px' }} focused />
          </Grid>
          <Grid item >
          <TextField  id="Website" name="Website" label="Website"placeholder="www.thacthai.com" size='small' value={state.Website} onChange={handleInputChange} style={{ width: '300px', height: '60px' }} focused color='primary'/>
          </Grid>
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
          <Box p={1} sx={{color: 'black', fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</Box>
            <Box sx={{display: "flex",flexDirection:'column', alignItems: "center", justifyContent: "center" }}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.firstName} size='small' sx={{ width: '70%' }}  />
            <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.LastName} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.jobTitle} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.MobileNumber} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.email} size='small' sx={{ width: '70%' }} />
         </Box>
          <Box p={2}/>
          <Divider/>
          <Box p={1} sx={{color: '#171717', fontSize: 22, fontFamily: frontdata[0].font, fontWeight: '400', wordWrap: 'break-word'}}>Company Details</Box>
          <Box sx={{display: "flex",flexDirection:'column', alignItems: "center", justifyContent: "center" }}>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.company_name_en} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.Branch}  size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.Address} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled" value={state.Address2} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.selectedCountry} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.selectedProvince} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.selectedAmphoe} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.selectedTambon} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.zipcode} size='small' sx={{ width: '70%' }} />
              <br></br>
              <TextField disabled id="outlined-disabled"label="Disabled"value={state.Website} size='small' sx={{ width: '70%' }} />
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <FormControlLabel control={<Checkbox checked={state.Confirmed} onChange={handleCheckboxChange}/>} label="Confirm information is correct" />
          </Box>
          <Box>
          <Button variant="outlined" onClick={handleClose} sx={{width:'100%'}}>Back</Button>
              <Box p={1}/>
              <Button disabled={!state.Confirmed} variant="contained"sx={{width:'100%'}} onClick={handleSubmit} >{state.loading?<Loading/>:buttontext[0].text}</Button>
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
