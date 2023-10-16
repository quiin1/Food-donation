import React, { useEffect } from 'react'
import { Typography, FormControl, OutlinedInput, Select, Box, Grid, MenuItem } from '@mui/material'
import { ActionSubTitleStyled, ActionInputLabelStyled, ActionInputStyledText, ActionInputStyledSelect } from '../../StyleComponents/styles'

import TextEditor from './TextEditor'

interface ActionInfoInputsProps {
    data: {
        title: string
        subtitles: string[]
        inputs: {
            label: string 
            type: string 
            width: string 
            optionList: string[]
        }[]
        button: string
        success: {
            title: string
            content: string
            button: string
        }
    }
    title: string 
    setTitle: Function 
}

const ActionInfoInputs: React.FC<ActionInfoInputsProps> = (props) => {
    useEffect(()=>{
        // console.log(props)
    }, [props])

    let rows = []
    const inputNum = props.data.inputs.length
    for (let i = 0; i < inputNum; i++) {
        let width = props.data.inputs[i].width
        let grid = 12/(100/Number(width.slice(0, width.length-1))) //fullwidth=12
        rows.push(
                <Grid item xs={grid} component="span" key={props.data.inputs[i].label}>
                    <FormControl
                        sx={{
                            display: 'flex', 
                            gap: '8px', 
                            width: "100%"
                        }}
                    >
                        <label style={{...ActionInputLabelStyled}} htmlFor="">
                            {props.data.inputs[i].label}
                        </label>
                        {
                            {
                                'text': <OutlinedInput id="" type="text" style={ActionInputStyledText} 
                                            placeholder={"Crawford Room, Mortlock Wing...."}
                                            value={props.title}
                                            onChange={e => props.setTitle(e.target.value)}
                                        />,
                                'number': <OutlinedInput id="" type="number" style={ActionInputStyledText} 
                                        />,
                                'select': (
                                    <Select id="" type="text" style={ActionInputStyledSelect} 
                                        defaultValue={props.data.inputs[i].optionList && (props.data.inputs[i].optionList[0] || "Vietnam")}
                                    >
                                        {props.data.inputs[i].optionList && props.data.inputs[i].optionList.map(option => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                ),
                                'date': <OutlinedInput id="date" type="date" style={ActionInputStyledText}/>,
                                'money': (
                                    <Box sx={{display: 'flex', gap: '12px'}}>
                                        <OutlinedInput id="" type="number" style={{...ActionInputStyledText, width: "100%", padding: "12px"}} 
                                        />
                                        <FormControl>
                                            <Select id="" type="text" style={ActionInputStyledSelect} 
                                                defaultValue={"USD"}
                                            >
                                                {props.data.inputs[i].optionList && props.data.inputs[i].optionList.map(option => (
                                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                ),
                                'description': (
                                    <Box sx={{
                                        "*": {
                                            color: "#2E2C34",
                                            fontSize: "14px",
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            lineHeight: "24px"
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
                                            minHeight: "120px"
                                        }
                                    }}>
                                        <TextEditor/>
                                    </Box>
                                )
                            }[props.data.inputs[i].type]
                        }
                    </FormControl>
                </Grid>
        )
    }
    return (
        <Box sx={{fontFamily: 'Manrope'}}>
            <Typography component="span" variant='body2' sx={ActionSubTitleStyled}>{props.data.subtitles[0]}</Typography>
            <Grid component="span" container spacing={2}>{rows}</Grid>
        </Box>
    )
}

export default ActionInfoInputs