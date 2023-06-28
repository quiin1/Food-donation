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
  }
});

export const ActionButton = styled(Button)({
  textTransform: 'none',
  width: '100%',
  fontFamily: 'Inter',
  // fontFamily: 'Manrope',
  fontWeight: 600,
  fontSize: '.7em',
  // font-size: 14px;
  color: "#FCFCFD",
  lineHeight: "20px",
  borderRadius: '4px',
  backgroundColor: '#2BA84A',
  '&:hover': {
    backgroundColor: 'green',
  },
});

export const ActionTitleStyled = ({
  color: "#2E2C34",
  fontSize: "32px",
  fontFamily: "Inter",
  fontWeight: 600,
  lineHeight: "40px"
});

export const ActionSubTitleStyled = ({
  color: "#2E2C34",
  fontSize: "18px",
  fontFamily: "Inter",
  fontWeight: 600,
  lineHeight: "40px"
});

export const ActionInputLabelStyled = ({
  color: "#504F54",
  fontSize: "14px",
  fontFamily: "Inter",
  fontWeight: 500,
  lineHeight: "20px"
});

export const ActionInputStyledText = ({
  borderRadius: "4px",
  border: "1px solid #EBEAED",
  background: "#FFF",
  padding: "14px 12px 11px 12px",
  
  color: "#141416",
  /* Regular Text/14px/Semibold */
  fontSize: "14px",
  fontFamily: "Manrope",
  fontWeight: 600,
  lineHeight: "20px",
});

export const ActionInputStyledNumber = styled(Button)({
  
});
export const ActionInputStyledSelect = ({
  borderRadius: "4px",
  border: "1px solid #F4F5F6",
  background: "#FFF",
  padding: "14px 20px",
});

export const ActionInputStyledDate = styled(Button)({
  
});