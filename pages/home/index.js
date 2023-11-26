import React from 'react'
import { Box } from '@mui/material';
import Body from './components/pc/indexsdsd'
import Mobile from './components/mobile'
import Layout from  '../../components/layout'
import { themedata } from '../../data/themedata';
import { frontdata } from '@/data/frontdata';
import Title from '@/components/title';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
function Index() {

  return (
    <Box sx={{background:`linear-gradient(${themedata[0].primary}, ${themedata[0].three})`}}>
          <Title namepage="Home" company="Partner Demo Tracthai"/>
    <Box sx={{display:{sm:"none",xs:'none',md:'flex'}}}>   
      <Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
      Content1={<Box><Body/></Box>}/>
    </Box>
    <Box sx={{display:{xs:'flex',md:'none',sm:"flex"}}}>
      <Layout containerheight="100vh" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
        Content1={<Box>
          {/* <Mobile/> */}
          <Box sx={{width:"80%",display:"flex",flexDirection:"column",textAlign:"center",position:"absolute",height:"auto",top:"50%",left:"50%",transform:"translate(-50%,-50%)",display:"flex",alignItems:"center",fontFamily:frontdata[0].font,fontWeight:500,fontSize:"30px"}}>
            
            <DeveloperModeIcon sx={{fontSize:"40px",animation: "rotate 2s infinite linear" }}/><Box sx={{mt:2}}>Work in Progress: Mobile Version Coming Soon!</Box>
          </Box>
        </Box>}/>
    </Box>
    </Box>
  )
}
export default Index