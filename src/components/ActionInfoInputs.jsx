import React from 'react'
import { Typography, FormControl } from '@mui/material'
import { ActionSubTitleStyled, ActionInputStyled, ActionInputLabelStyled } from './MUIComponents'
import TextEditor from './TextEditor'

const ActionInfoInputs = ({data}) => {
    const inputNum = data.inputLabels.length
    return (
        <>
            <Typography sx={ActionSubTitleStyled}>{data.subtitles[0]}</Typography>
            
            <FormControl sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <label style={ActionInputLabelStyled} htmlFor="title">
                    {data.inputLabels[0]}
                </label>
                <input type="text" id="title" style={ActionInputStyled}></input>
            </FormControl>

            <FormControl sx={{
                ".ql-toolbar": {
                    borderRadius: "4px 4px 0 0",
                    border: "1px solid #EBEAED",
                    background: "#FFF",
                    padding: "13px 16px",
                },
                ".ql-editor": {
                    borderRadius: "0 0 3px 3px",
                    border: "1px solid #EBEAED",
                    background: "#FFF",
                    padding: "16px 16px 15px 16px",
                }
            }}>
                <label style={{ActionInputLabelStyled, }} htmlFor="title">
                    {data.inputLabels[inputNum - 1]}
                </label>
                <TextEditor/>
            </FormControl>
        </>
    )
}

export default ActionInfoInputs