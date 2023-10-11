// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableCustomized from 'src/views/tables/TableCustomized'
import { useState } from 'react'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import { Button } from '@mui/material'
import TournamentAdd from 'src/views/form-layouts/TournamentAdd'
import Tabletournament from 'src/views/tables/Tabletournament'
import TournamentsCom from './tournament'

const MUITable = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handlecreate = () => {
    setOpen(!open);
  }
  const handclose = () => {
    setOpen(false);
  }


  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Tournaments
          </Link>
        </Typography>
        <Typography variant='body2'>Tables display Plyers Details.</Typography>
        <Button variant="contained" onClick={handlecreate}>Add</Button>

      </Grid>
      {
        open && (
          <Grid item xs={12}>
            <TournamentAdd
              open={open}
              handclose={handclose}
            />
          </Grid>
        )
      }
      <Grid item xs={12}>
        <Typography variant='h4'>
          Tournafest  Tournaments        </Typography>
        <Tabletournament />
      </Grid>
      <Grid item xs={12} >
        <TournamentsCom />
      </Grid>
    </Grid>

  )
}

export default MUITable
