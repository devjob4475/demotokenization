import { Box } from '@mui/material'
import React from 'react'

function index() {
  return (
    <Box>
        <Box sx={{background:"linear-gradient(110deg, #84BAA1, #FFFBE2 100%)",height:"100vh",width:'100%'}}>
        <Box p={1} sx={{display:'flex',flexDirection:'column',width: '32%', height: '65%', background: 'white',
        borderRadius: 10,justifyContent:'center',alignItems:'center',position:'absolute',top:'50%',left:'50%',
        transform: 'translate(-50%, -50%)'}}> 
        </Box>
    </Box>
</Box>
  )
}

export default index