import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { Box, TextField, Select, MenuItem } from '@mui/material'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import SortIcon from '@mui/icons-material/Sort'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import TableOrganizer from 'src/views/tables/TableOrganizer'
import OrganizerAdd from 'src/views/form-layouts/OrganizerAdd'
import { Dialog, DialogTitle } from '@mui/material'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

const Oragnizers = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleCreate = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const projects = [
    { id: 1, name: 'Project 1', description: 'Description for Project 1' },
    { id: 2, name: 'Project 2', description: 'Description for Project 2' },
    { id: 3, name: 'Project 3', description: 'Description for Project 3' }
  ]

  const handleCreateProject = () => {
    alert(`Creating project: ${projectName}`)
    // Use selectedFile for file upload
    setOpen(false)
  }

  // Replace this with the actual total number of Organizerss
  const totalOrganizerss = 1000

  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  const [age, setage] = useState('')
  const [Password, setPassword] = useState('')

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <Card>
          <CardHeader title='Tournafest Organizerss' titleTypographyProps={{ variant: 'h6' }} />
          <CardContent>
            <Typography variant='body2'>
              There are currently {totalOrganizerss} Organizerss registered on Tournafest.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack direction='row' spacing={1}>
          <Select value={'All'} label='Organizer'>
            <MenuItem value='abc'>abc</MenuItem>
            <MenuItem value='bca'>bca</MenuItem>
            <MenuItem value='abc'>abc</MenuItem>
            <MenuItem value='bca'>bca</MenuItem>
          </Select>{' '}
          <IconButton color='primary' aria-label='search' component='span'>
            <SearchIcon />
          </IconButton>
          <Select value={'All'} label='Organizer'>
            <MenuItem value='abc'>abc</MenuItem>
            <MenuItem value='bca'>bca</MenuItem>
            <MenuItem value='abc'>abc</MenuItem>
            <MenuItem value='bca'>bca</MenuItem>
          </Select>{' '}
          <IconButton color='primary' aria-label='sort' component='span'>
            <SortIcon />
          </IconButton>
        </Stack>
        <Button variant='contained' onClick={handleCreate} sx={{ marginLeft: '1rem' }}>
          Add
        </Button>
      </Grid>
      {open && (
        <Grid item xs={12}>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '0 30rem'
              }}
            >
              <DialogTitle>Create New Oragnizer</DialogTitle>
              <DialogContent>
                <TextField
                  label='Oragnizer Name'
                  variant='outlined'
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  margin='normal'
                  sx={{
                    width: '100%'
                  }}
                />
                <TextField
                  label='Oragnizer Email'
                  variant='outlined'
                  fullWidth
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  margin='normal'
                />
                <TextField
                  label='Age'
                  variant='outlined'
                  fullWidth
                  value={age}
                  onChange={e => setage(e.target.value)}
                  margin='normal'
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <TextField
                    label='Password'
                    variant='outlined'
                    fullWidth
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    margin='normal'
                  />

                  <TextField
                    label='Password'
                    variant='outlined'
                    fullWidth
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    margin='normal'
                  />
                  <TextField
                    label='Country'
                    variant='outlined'
                    fullWidth
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    margin='normal'
                  />
                </Box>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant='contained' color='primary' onClick={handleCreateProject}>
                  Add
                </Button>
              </DialogActions>
            </Box>
          </Dialog>{' '}
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography variant='h4'>Tournafest Organizer</Typography>
        <TableOrganizer />
      </Grid>
    </Grid>
  )
}

export default Oragnizers
