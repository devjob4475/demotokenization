import '@/assets/css/globals.css'
import theme from '@/utils/theme'
import { Box, ThemeProvider } from '@mui/material'
import { MyProvider } from '@/context';
import localFont from 'next/font/local';

const cooper = localFont({
  src: [
    {
      path: '../public/fonts/Metropolis/Metropolis-Bold.otf',
      weight: "900",
    },
    {
      path: '../public/fonts/Metropolis/Metropolis-Regular.otf',
      weight: "400",
    },
  ],
});
export default function App({ Component, pageProps, }) {
  const { user } = pageProps;
  return ( 
    <Box>
       <style jsx global>{`
        :root {
          --cooper-font: ${cooper.style.fontFamily};
        }
      `}</style>
    <ThemeProvider theme={theme}>
      <MyProvider>
      <Component {...pageProps} />
      </MyProvider>
    </ThemeProvider> 
    </Box>
   );
 }

 