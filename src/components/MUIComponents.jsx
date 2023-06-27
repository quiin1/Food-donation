import { styled } from '@mui/material';
import { Button } from '@mui/material'

export const SignInButton = styled(Button)({
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '.4em',
    color: 'white',
    textTransform: 'none',
    width: '100%',
    padding: '12px 0',
    borderRadius: '4px',
    // backgroundColor: '#777E90',
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'green',
    },
  });

export const CardButton = styled(Button)({
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '.8em',
    color: 'white',
    textTransform: 'none',
    width: '100%',
    padding: '7px 0',
    borderRadius: '4px',
    backgroundColor: '#2BA84A',
    '&:hover': {
      backgroundColor: 'green',
    },
  });

export const PostButton = styled(Button)({
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '.7em',
    color: 'white',
    textTransform: 'none',
    width: 'auto',
    padding: '7px 3em',
    borderRadius: '4px',
    backgroundColor: '#2BA84A',
    '&:hover': {
      backgroundColor: 'green',
    },
  });