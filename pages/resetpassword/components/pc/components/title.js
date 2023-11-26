import { Box } from '@mui/material'
import React from 'react'
import { themedata } from '@/data/themedata'; 
import { frontdata } from '@/data/frontdata'; 
import { ResetPassText } from '@/data/metadata';

function title() { 
  return (
    <Box>
      
      <Box sx={{ pb:2,color: '#171717', fontSize: 20, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word',textAlign:"center"}}>{ResetPassText[0].title}</Box>
      <Box pb={5} sx={{color: `${themedata[0].four}`, fontSize: 10, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>{ResetPassText[0].description}</Box>
  
    </Box>
  )
}

export default title