import { Box } from '@mui/material'
import React from 'react'
import { themedata } from '@/data/themedata'; 
import { frontdata } from '@/data/frontdata'; 
import { ResetPassText } from '@/data/metadata';



function title() { 
  return (
    <div>
      {/* //!Title */}
      <Box sx={{ pb:2,color: '#171717', fontSize: 25, fontFamily: frontdata[0].font, fontWeight: '800', wordWrap: 'break-word',textAlign:"center"}}>{ResetPassText[0].title}</Box>
      <Box pb={5} sx={{color: `${themedata[0].four}`, fontSize: 15, fontFamily: frontdata[0].font, fontWeight: '0', textAlign: 'left'}}>{ResetPassText[0].description}</Box>
      {/* //!Title */}
    </div>
  )
}

export default title