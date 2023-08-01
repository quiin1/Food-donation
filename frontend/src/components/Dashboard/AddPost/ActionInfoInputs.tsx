import React from 'react'
import { Typography, FormControl, OutlinedInput, Select, Box, Grid, MenuItem } from '@mui/material'
import { ActionSubTitleStyled, ActionInputLabelStyled, ActionInputStyledText, ActionInputStyledSelect } from '../../StyleComponents/styles'

import TextEditor from './TextEditor'

import { useSelector } from 'react-redux'
import { dataSelector, subpageIndexSelector } from '../../../redux/selectors'

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
}

const ActionInfoInputs: React.FC<ActionInfoInputsProps> = ({data}) => {
    // const subpageIndex = useSelector(subpageIndexSelector)
    // const defaultData = useSelector(dataSelector)[subpageIndex].rows[0]
    // console.log(defaultData)
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
                                'text': <OutlinedInput id="" type="text" style={ActionInputStyledText} 
                                            placeholder={"Crawford Room, Mortlock Wing...."}
                                        />,
                                'number': <OutlinedInput id="" type="number" style={ActionInputStyledText}/>,
                                'select': (
                                    <Select id="" type="text" style={ActionInputStyledSelect} 
                                        placeholder={data.inputs[i].optionList && data.inputs[i].optionList[0] || "S"}
                                    >
                                        {data.inputs[i].optionList && data.inputs[i].optionList.map(option => (
                                            <MenuItem value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                ),
                                'date': <OutlinedInput id="" type="date" style={ActionInputStyledText}/>,
                                'money': (
                                    <Box sx={{display: 'flex', gap: '12px'}}>
                                        <OutlinedInput id="" type="number" style={{...ActionInputStyledText, width: "100%", padding: "12px"}} 
                                            defaultValue={1000}
                                        />
                                        <Select id="" type="text" style={ActionInputStyledSelect} 
                                            defaultValue={"USD"}
                                        >
                                            {data.inputs[i].optionList && data.inputs[i].optionList.map(option => (
                                                <MenuItem value={option}>{option}</MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                ),
                                'description': (
                                    <FormControl sx={{
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