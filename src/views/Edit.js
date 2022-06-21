import React from 'react'
import EditForm from '../forms/EditForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'

export default function Edit() {
    const theme = useTheme()
    console.log("edit page")
  return (
      <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">Edit</Typography>
        <EditForm/>
      </Paper>
  )
}
