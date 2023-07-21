import { createTheme } from "@mui/material"
import backGroundImg from './assets/login/image7.png'

const theme = createTheme({
    palette: {
        green: {
            main: "#2BA84A"
        }
    },
})

export default theme

export const palette = {
    green: "#2BA84A",
    black: "#000000"
}

export const defaultStyle = { 
  fontFamily: 'SF Pro',
  color: '#141416',
  fontSize: 32,
  fontWeight: 700,
}
  
export const textStyle0 = {
  color: palette.green,
  fontWeight: '700',
  fontSize: '.8em',
}
export const textStyle1 = {
  fontWeight: '700',
  fontSize: '.65em',
}
export const textStyle2 = {
  fontWeight: '400',
  fontSize: '.4em',
}
export const textStyle3 = {
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '.35em',
}
export const textStyle4 = {
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '.8em',
  color: "#2E2C34"
}

export const backgroundStyle = {
  height: '100vh',
  backgroundImage: `url(${backGroundImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

export const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}