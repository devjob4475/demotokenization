import * as React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const StripedLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20, 
  position: 'relative',
  backgroundColor: theme.palette.success.main, 
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.success.dark, 
    position: 'relative',
  },
  [`& .${linearProgressClasses.bar}::after`]: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // Define five white stripes using the linear-gradient
    backgroundImage: `linear-gradient(
      to right,
      transparent,
      transparent calc(20% - 2px),
      white calc(20% - 2px),
      white 20%,
      transparent 20%,
      transparent calc(40% - 2px),
      white calc(40% - 2px),
      white 40%,
      transparent 40%,
      transparent calc(60% - 2px),
      white calc(60% - 2px),
      white 60%,
      transparent 60%,
      transparent calc(80% - 2px),
      white calc(80% - 2px),
      white 80%,
      transparent 80%,
      transparent calc(100% - 2px),
      white calc(100% - 2px),
      white 100%
    )`,
    opacity: 0.5, // Set the opacity of the stripes
    backgroundSize: '100% 100%',
  },
}));

export default function CustomProgress() {
  const [progress, setProgress] = React.useState(70); // Example progress value

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="body2" color="text.secondary">
        Password Strength
      </Typography>
      <StripedLinearProgress variant="determinate" value={progress} />
      {/* Position the label to the right */}
      <Typography variant="caption" sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
        Strong
      </Typography>
    </Box>
  );
}
