import {  Button } from '@mui/material'
import React from 'react'
import { themedata } from '@/data/themedata'; 
import { frontdata } from '@/data/frontdata'; 
import { MyContext } from '@/context';
import { ResetPassText } from '@/data/metadata';
import useHandleClick from '@/hook/resetpassword';
import useHandleClickToken from '@/hook/resetpassword-by-confirm';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';


function SubmitButton() { 
  const [state, setstate] = React.useContext(MyContext);
  const handleClick = useHandleClick();
  const handleClickToken = useHandleClickToken();
  const router = useRouter();
  const token = router.query.token;
  return (
    <Box pt={3}>
       {/* //?Button */}
       <Button disabled={!state.minLength || !state.hasNumber || !state.hasUpper || !state.hasLower || !state.passwordsMatch} onClick={typeof token === 'undefined' ? handleClick:handleClickToken}  variant='contained'  sx={{ fontSize: '12px', padding: '6px 12px',color:`${themedata[0].three}`,
        width: '300px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,backgroundColor:!state.minLength || !state.hasNumber || !state.hasUpper || !state.hasLower || !state.passwordsMatch?`${themedata[0].four}`:`${themedata[0].primary}` }}>{ResetPassText[0].buttontext}</Button>
       {/* //?Button */}
    </Box>
  )
}

export default SubmitButton