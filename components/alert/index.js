import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { MyContext } from '@/context';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { themedata } from '@/data/themedata';
import { frontdata } from '@/data/frontdata';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const router = useRouter();
    const [state, setState] = React.useContext(MyContext);

  return (
      <Dialog PaperProps={{ sx: { borderRadius: "7px" } }} open={state.alert} TransitionComponent={Transition} keepMounted >
        <DialogTitle sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>{!state.status?<ErrorIcon style={{fontSize:"60px"}} color="error"/>:<CheckCircleIcon style={{fontSize:"60px"}} color="success"/>}</DialogTitle>
        <DialogContent sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Box sx={{color:`${themedata[0].black}`,textTransform:'capitalize',textAlign:"center", fontFamily: frontdata[0].font,fontSize: 16,fontWeight:400}}>{state.alert? state.errordetail:""}</Box>
        </DialogContent>
        <DialogActions sx={{pb:2,display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Button onClick={()=>{
            setState((prevData) => ({ ...prevData, alert:  false,loading:false,btlogin:false,btchangepass:false}))
            router.push(state.url_alert);
          }} style={{ fontSize: '16px', padding: '6px 12px',
          backgroundColor:`${themedata[0].primary}`,width: '100px', height: 'auto',textTransform:'capitalize', fontFamily: frontdata[0].font,color:`${themedata[0].three}` }}>OK</Button>
        </DialogActions>
      </Dialog>
  );
}
