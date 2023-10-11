// ** React Imports
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
      <Button onClick={handleSubmit} variant="contained">
        Create Tournament Public
      </Button>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

      }}>
      <CardLinkedIn />
      <CardLinkedIn />
      </Box>

      {open && (
        <Dialog
          open={open}
        >
          <form>
            <Grid container spacing={7} sx={{
              padding: '2rem',
            }}>
              {/* <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImgStyled src={imgSrc} alt='Profile Pic' />
                  <Box>
                    <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                      Upload New Photo
                      <input
                        hidden
                        type='file'
                        onChange={onChange}
                        accept='image/png, image/jpeg'
                        id='account-settings-upload-image'
                      />
                    </ButtonStyled>
                    <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                      Reset
                    </ResetButtonStyled>
                    <Typography variant='body2' sx={{ marginTop: 5 }}>
                      Allowed PNG or JPEG. Max size of 800K.
                    </Typography>
                  </Box>
                </Box>
              </Grid> */}

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Username' placeholder='Description' defaultValue='johnDoe' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Name' placeholder='TimeZone' defaultValue='John Doe' />
              </Grid>
               <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Name' placeholder='Prize' defaultValue='John Doe' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Platform</InputLabel>
                  <Select label='Platform' defaultValue='admin'>
                    <MenuItem value='admin'>pc</MenuItem>
                    <MenuItem value='author'>playstation 4</MenuItem>
                    <MenuItem value='editor'>playstation 5</MenuItem>
                    <MenuItem value='maintainer'>Maintainer</MenuItem>
                    <MenuItem value='subscriber'>Subscriber</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Structure</InputLabel>
                  <Select label='Time - Zone' defaultValue='active'>
                    <MenuItem value='active'>PLayers </MenuItem>
                    <MenuItem value='inactive'>Multiplayer</MenuItem>
                    <MenuItem value='pending'>Single</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Company name' placeholder='ABC Pvt. Ltd.' defaultValue='ABC Pvt. Ltd.' />
              </Grid>



              <Grid item xs={12}>
                <Button variant='contained' sx={{ marginRight: 3.5 }}>
                  Save Changes
                </Button>
                <Button type='reset' variant='outlined' color='secondary' onClick={()=> setOpen(false)}>
                  Colse
                </Button>
              </Grid>
            </Grid>
          </form>
        </Dialog>)}


    </CardContent>
  )
}

export default Public
