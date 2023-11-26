import { Box, Button, Collapse, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
import {MyContext} from 'context'
import { Router, useRouter } from 'next/router'; 
import { buttontext } from '@/data/buttondata';
import Loading from '@/components/loading'

function Index() {
  const [clicked, setClicked] = useState(false);
  const [state, setState] = useContext(MyContext);
  const [company, setCompany] = React.useState('');

  const handleChange = (event) => {
    setCompany(event.target.value);
  };
const router = useRouter();
  const clickTo = () => {
    if(company === 'No!'){
    setState((prevData) => ({ ...prevData, match:  false}));
    router.push('/updateinformation');
    
    }else{
      router.push('/registration');
    }
  };
  return (
      <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`,height:"100vh",width:'100%'}}>
        <Box p={3} sx={{display:'flex',flexDirection:'column', background: 'white',width:'60%',height:'auto',
        borderRadius: 5,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
          <Box sx={{ color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800', 
          wordWrap: 'break-word'}}>Company Selection</Box>
          <br></br>
          <Box pb={3} sx={{color: `${themedata[0].four}`, fontSize: 13, fontFamily: frontdata[0].font, fontWeight: '0', 
          textAlign: 'left'}}>Please Take A Look At The Companies Listed Below<br/> And Tell Us Whether You Are Working At Any Of Them</Box>
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <Box sx={{ minWidth: 120,pb:2  }}>
          <FormControl fullWidth style={{ width: '300px' }}>
          <InputLabel id="company-select-label">Company</InputLabel>
          <Select value={company} label="Company" onChange={handleChange}>
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={"company1"}>{state.varidate.company_name_en_original}</MenuItem>
            <MenuItem value={'No!'}>No!</MenuItem>
          </Select>
        </FormControl>
        </Box>
        </Box>
        <Box p={1} >
          <Button   variant='contained'  sx={{fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
          width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}`}}
          disabled={company === "" } onClick={clickTo}>{state.loading?<Loading/>:buttontext[0].text}
          </Button> 
        </Box>
        </Box>
      </Box>  
  )
}
export default Index;
