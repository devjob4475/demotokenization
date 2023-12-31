import { Box, Button, Collapse, Divider, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
import {MyContext} from 'context'
import { Router, useRouter } from 'next/router'; 
import { buttontext } from '@/data/buttondata';
import Loading from '@/components/loading'


function Index() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [checked, setChecked] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState(undefined);
  const [state, setState] = useContext(MyContext);
const handleCompanyChange = (event) => { 
  setSelectedCompany(event.target.value); 
};
const handleClick = () => {
  setClicked(prevClicked => {
    setClicked2(false); 
    return !prevClicked; 
    
  });
  setChecked(false);
  setSelectedCompany(undefined)
  
};
const handleClick2 = () => {
  setClicked2(prevClicked2 => {
    setClicked(false); 
    return !prevClicked2;
  });
  setChecked(prevState => !prevState);
  setSelectedCompany(undefined)
};
const router = useRouter();
  const clickTo = () => {
    if(clicked2 === false){
      setState((prevData) => ({ ...prevData, company_name_en:  ""}));
      setState((prevData) => ({ ...prevData, match:  false}));
      router.push('/updateinformation');
      }else{
      router.push('/updateinformation');
      }
  }
    return (
      <Box sx={{ background: `linear-gradient(${themedata[0].primary}, ${themedata[0].three})`, height: "100vh", width: '100%' }}>
        <Box p={3} sx={{
          display: 'flex', flexDirection: 'column', background: 'white', width: '70%',
          borderRadius: 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Box sx={{ color: `${themedata[0].ten}`, fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word' }}>Company Selection</Box>
          <br></br>
          <Box pb={3} sx={{ color: `${themedata[0].four}`, fontSize: 13, fontFamily: frontdata[0].font, fontWeight: '0', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            Please Take A Look At The Companies Listed Below And Tell Us Whether You Are Working At Any Of Them
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'
          }}>
          <Button sx={{ width: "300", height: 'auto', background:clicked2 ? `${themedata[0].btcompany}` : 'white', borderRadius: 1, border: `1px ${themedata[0].secondary} solid`,p:1 }}onClick={handleClick2}>
          <Box sx={{textAlign:'left'}}>
          <span  style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '800',  }}>Yes! </span>
          <span  style={{ color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '350',fontSize:'10px' }}>
            I'm working at one of these companies Please state which company you work for.
        </span>
        </Box>
        </Button>
              <Collapse in={checked}>
              <Box p={1} sx={{display: 'flex',justifyContent: 'center',alignItems:'center',flexDirection:'column'}}>
                <Box p={1}  sx={{width:"100%" , height: "100%" , background: 'white',borderRadius: '5px',border: `1px ${themedata[0].secondary} solid`}}>
                  <RadioGroup value={selectedCompany} onChange={handleCompanyChange}>
                    <FormControlLabel value="recovery"control={<Radio size="small" />}label={<Box p={2} sx={{fontSize:'13px'}}>
                      {state.company_name_en}</Box>}/>
                    <Divider />
                    <FormControlLabel value="company1"control={<Radio size="small" />}label={<Box p={2} sx={{fontSize:'13px'}}>Company1</Box>}/>
                  </RadioGroup>
                </Box>
              </Box>
            </Collapse>
            <br></br>
            <Button  sx={{ width: "300", height: 'auto', background:clicked ? `${themedata[0].btcompany}` : 'white', borderRadius: 1, border: `1px ${themedata[0].secondary} solid`,p:1, }}onClick={handleClick}>
          <Box sx={{textAlign:'left'}}>
          <span  style={{  color: `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '900'}}>No! </span>
          <span  style={{ color:  `${themedata[0].ten}`, fontFamily: frontdata[0].font, fontWeight: '350',  fontSize:'10px' }}> 
          I'm not working at any companies listed.On the next page, you'll need to fill in a newaccount registration form.</span>
        </Box>
        </Button>
          </Box>
          <Box p={5} sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Button   variant='contained'  sx={{fontSize: '12px', padding: '6px 12px',backgroundColor:`${themedata[0].primary}`,
          width: 200, height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}`}}
          disabled={clicked === false && selectedCompany === undefined} onClick={clickTo}>{state.loading?<Loading/>:buttontext[0].text}
          </Button>
          </Box>
          
        </Box>
      </Box>
    )
  }
  export default Index;
  
