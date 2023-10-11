/*// ** React Imports
import { useState, ElementType, ChangeEvent, SyntheticEvent } from 'react'

// ** MUI Imports
import {  Dialog} from '@mui/material';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button, { ButtonProps } from '@mui/material/Button'

// ** Icons Imports
import CardLinkedIn from '../cards/CardLinkedIn'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const Public = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState<boolean>(true)
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  const [open, setOpen] = useState<boolean>(false)
  const handleSubmit = () => {

    setOpen(!open)
  }
  return (
    <CardContent sx={{
      height: '80vh'
    }}>

<Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

      }}>
      <CardLinkedIn />
      <CardLinkedIn />
      <CardLinkedIn />
      <CardLinkedIn />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

      }}>
      <CardLinkedIn />
      <CardLinkedIn />
      <CardLinkedIn />
      <CardLinkedIn />
      </Box>


    </CardContent>
  )
}

export default Public;
*/

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const rules = [
  { type: 'Rule', id: 1, title: 'Rule 1', content: 'Follow fair play and sportsmanship.' },
  { type: 'Rule', id: 2, title: 'Rule 2', content: 'Respect other participants and organizers.' },
  // Add more rules as needed
];

const RulesPage = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '20px', // Adjust the padding as needed
      flexDirection: 'column',
      minHeight:'90vh',
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
        {rules.map(rule => (
          <Card
            key={rule.id}
            sx={{ boxShadow: 0, backgroundColor: '#f1f8ff', marginBottom: '15px', padding: '10px', borderLeft: '3px solid #1a73e8' }}
          >
            <CardContent>
              <Typography variant='h6' sx={{ color: '#1a73e8' }}>
                {rule.type}
              </Typography>
              <Typography variant='subtitle1'>
                {rule.title}
              </Typography>
              <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                {rule.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RulesPage;
