import React from 'react'
import { Typography, FormControl, OutlinedInput, Select, Box, Grid } from '@mui/material'
import { ActionSubTitleStyled, ActionInputLabelStyled, ActionInputStyledText, ActionInputStyledSelect } from './MUIComponents'
import TextEditor from './TextEditor'

const ActionInfoInputs = ({data}) => {
    let rows = []
    const inputNum = data.inputs.length
    for (let i = 0; i < inputNum; i++) {
        let width = data.inputs[i].width
        let grid = 12/(100/Number(width.slice(0, width.length-1))) //fullwidth=12
        rows.push(
                <Grid item xs={grid}>
                    <FormControl 
                        sx={{
                            display: 'flex', 
                            gap: '8px', 
                            width: "100%"
                        }}
                    >
                        <label style={ActionInputLabelStyled} htmlFor="">
                            {data.inputs[i].label}
                        </label>
                        {
                            {
                                'text': <OutlinedInput id="" type="text" style={ActionInputStyledText}/>,
                                'number': <OutlinedInput id="" type="number" style={ActionInputStyledText}/>,
                                'select': (
                                    <Select id="" type="select" style={ActionInputStyledSelect}/>
                                ),
                                'date': <OutlinedInput id="" type="date" style={ActionInputStyledText}/>,
                                'money': (
                                    <Box sx={{display: 'flex', gap: '12px'}}>
                                        <OutlinedInput id="" type="number" style={{ActionInputStyledText, width: "100%"}}/>
                                        <Select id="" type="select" style={ActionInputStyledSelect}/>
                                    </Box>
                                ),
                                'description': (
                                    <FormControl sx={{
                                        "*": {
                                            fontFamily: 'Manrope'
                                        },
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
                                        <TextEditor/>
                                    </FormControl>
                                )
                            }[data.inputs[i].type]
                        }
                    </FormControl>
                </Grid>
        )
    }
    return (
        <Box sx={{fontFamily: 'Manrope'}}>
            <Typography sx={ActionSubTitleStyled}>{data.subtitles[0]}</Typography>
            <Grid container spacing={2}>{rows}</Grid>
        </Box>
    )
}

export default ActionInfoInputs