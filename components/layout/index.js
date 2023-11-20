import React from 'react'
import { Box } from '@mui/material';
import styles from './css/layout.module.css' 



function Index(props) { 
  return (
  <Box className={styles.container} sx={{height:props.containerheight,gridTemplateRows:props.templaterow,gridTemplateAreas:props.templateareas,backgroundImage:props.bgimage,backgroundColor:props.bgcolor,
  '@media (max-width: 550px)': {gridTemplateRows:props.mgridTemplateRows,gridTemplateAreas:props.mtemplateareas,gridTemplateColumns:"1fr"}}}>
    <Box className={styles.nav}>{props.nav}</Box>
    <Box className={styles.content1}>{props.Content1}</Box>
    <Box className={styles.content2}>{props.Content2}</Box>
    <Box className={styles.content3}>{props.Content3}</Box>
    <Box className={styles.content4}>{props.Content4}</Box>
    <Box className={styles.content5}>{props.Content5}</Box>
    <Box className={styles.footer}>{props.footer}</Box>
  </Box>
  )
}

export default Index