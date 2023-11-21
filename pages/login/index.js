import React from 'react';
import { Box } from '@mui/material';
import Body from './components/pc';
import Mobile from './components/mobile';
import Layout from '@/components/layout';
import { themedata } from '@/data/themedata';
import Title from '@/components/title';

function Index() {
  return (
    <Box sx={{ background: `linear-gradient(108deg, ${themedata[0].primary} 0%, ${themedata[0].bgshadowwhite} 100%), linear-gradient(110deg, ${themedata[0].greenlight} -2.13%, ${themedata[0].greenblack} 102.03%), ${themedata[0].three}` }}>
       <Title namepage="Login" company="Partne Demo Tracthai"/>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Layout
          containerheight="auto" 
          templaterow="0fr auto 0fr"
          templateareas="'nav' 'content1' 'footer'"
          mtemplaterow="0fr auto 0fr"
          mtemplateareas="'nav' 'content1' 'footer'"
          Content1={<Box><Body /></Box>}
        />
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Layout
          containerheight="auto"
          templaterow="0fr auto 0fr"
          templateareas="'nav' 'content1' 'footer'"
          mtemplaterow="0fr auto 0fr"
          mtemplateareas="'nav' 'content1' 'footer'"
          Content1={<Box><Mobile /></Box>}
        />
      </Box>
    </Box>
  );
}

export default Index;
