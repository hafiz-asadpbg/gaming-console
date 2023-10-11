// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Linkedin from 'mdi-material-ui/Linkedin'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardLinkedIn = () => {
  return (
    <Card sx={{  boxShadow: 0, color: 'common.black', margin:'10px', backgroundColor: 'success.white', border:'1px solid #45f884' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.black' }}
        >
          Pubg
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.black' }}>
          With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is
          directed.
        </Typography>

      </CardContent>
    </Card>
  )
}

export default CardLinkedIn
