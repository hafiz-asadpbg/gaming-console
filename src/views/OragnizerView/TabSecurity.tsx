// ** React Imports
import { ChangeEvent, MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

interface State {
  newPassword: string
  currentPassword: string
  showNewPassword: boolean
  confirmNewPassword: string
  showCurrentPassword: boolean
  showConfirmNewPassword: boolean
}

const TabSecurity = () => {
  // ** States
  const [values, setValues] = useState<State>({
    newPassword: '',
    currentPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })

  // Handle Current Password
  const handleCurrentPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
  }
  const handleMouseDownCurrentPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle New Password
  const handleNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }
  const handleMouseDownNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }
  const handleMouseDownConfirmNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={5}>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Name</InputLabel>
                  <OutlinedInput
                    label='Name'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Company Name</InputLabel>
                  <OutlinedInput
                    label='Company Name'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Displine</InputLabel>
                  <OutlinedInput
                    label='Displine'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Platform</InputLabel>
                  <OutlinedInput
                    label='Platform'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Organizer Name</InputLabel>
                  <OutlinedInput
                    label='Organizer Name'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Website</InputLabel>
                  <OutlinedInput
                    label='Website'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Location</InputLabel>
                  <OutlinedInput
                    label='Location'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Country</InputLabel>
                  <OutlinedInput
                    label='Country'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Starting Date</InputLabel>
                  <OutlinedInput
                    label='Starting Date'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Ending Date</InputLabel>
                  <OutlinedInput
                    label='Ending Date'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>TimeZone</InputLabel>
                  <OutlinedInput
                    label='TimeZone'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: 4.75 }}>
                <Button variant='contained' color='primary' >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
            <img width={183} alt='avatar' height={256} src='data:image/png;base64,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' />
          </Grid>
        </Grid>
      </CardContent>

      <Divider sx={{ margin: 0 }} />


    </form>
  )
}
export default TabSecurity
