// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import CardContent from '@mui/material/CardContent'
import TableCustomized from 'src/views/tables/TableCustomized'
import { useState } from 'react'
import { Button } from '@mui/material'
import { TextField, Select, MenuItem } from '@mui/material'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import SortIcon from '@mui/icons-material/Sort'
import { Dialog, DialogTitle } from '@mui/material'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Box from '@mui/material/Box'


const MUITable = () => {
  const [open, setOpen] = useState<boolean>(false)
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description for Project 1' },
    { id: 2, name: 'Project 2', description: 'Description for Project 2' },
    { id: 3, name: 'Project 3', description: 'Description for Project 3' }
  ]
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  const [platformName, setPlatformName] = useState('')
  const [fee, setFee] = useState('')

  const handlecreate = () => {
    setOpen(!open)
  }
  const handclose = () => {
    setOpen(false)
  }
  const handleCreateProject = () => {
    alert(`Creating project: ${projectName}`)
    // Use selectedFile for file upload
    setOpen(false)
  }

  const totalPlayers = 1000

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <Card>
          <CardHeader title='Tournafest Players' titleTypographyProps={{ variant: 'h6' }} />
          <CardContent>
            <Typography variant='body2'>
              There are currently {totalPlayers} players registered on Tournafest.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack direction='row' spacing={1}>
          <Select value='all' label='Platform'>
            <MenuItem value='abc'>abc</MenuItem>
            <MenuItem value='bca'>bca</MenuItem>
            <MenuItem value='abc'>abc</MenuItem>
            <MenuItem value='bca'>bca</MenuItem>
          </Select>
          <IconButton color='primary' aria-label='search' component='span'>
            <SearchIcon />
          </IconButton>
          <Select value={'All'} label='Platform'>
            <MenuItem value='abc'>abc</MenuItem>
            <MenuItem value='bca'>bca</MenuItem>
            <MenuItem value='abc'>abc</MenuItem>
            <MenuItem value='bca'>bca</MenuItem>
          </Select>
          <IconButton color='primary' aria-label='sort' component='span'>
            <SortIcon />
          </IconButton>
        </Stack>
        <Button variant='contained' onClick={() => setOpen(true)} sx={{ marginLeft: '1rem' }}>
          Add
        </Button>
      </Grid>
      {open && (
        <Grid item xs={12}>
          <Dialog
            fullScreen
            open={open}
            onClose={handclose}
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
              <DialogTitle>Create New Player</DialogTitle>
              <DialogContent>
                <TextField
                  label='Player Name'
                  variant='outlined'
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  margin='normal'
                  sx={{
                    width: '100%'
                  }}
                />
                <TextField
                  label='Email'
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
                  value={platformName}
                  onChange={e => setPlatformName(e.target.value)}
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
                    value={fee}
                    onChange={e => setFee(e.target.value)}
                    margin='normal'
                  />
                  <TextField
                    label='Country'
                    variant='outlined'
                    fullWidth
                    value={fee}
                    onChange={e => setFee(e.target.value)}
                    margin='normal'
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handclose}>Cancel</Button>
                <Button variant='contained' color='primary' onClick={handleCreateProject}>
                  Add
                </Button>
              </DialogActions>
            </Box>
          </Dialog>
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography variant='h4'>Tournafest Players</Typography>
        <TableCustomized />
      </Grid>
    </Grid>
  )
}

export default MUITable
