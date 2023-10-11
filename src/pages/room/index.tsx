// ** React Imports
import { SyntheticEvent, useState } from 'react'
// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports


// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from '@mui/material'
import Navbar from 'src/views/homeView/navbar'
import Footer from 'src/views/homeView/footer'
import Description from 'src/views/RoomView/description'
import TableCollapsible from 'src/views/RoomView/TableCollapsible'
import TabInfo from 'src/views/RoomView/TabInfo'
import ChatScreen from 'src/views/RoomView/chatscreen'

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Room = () => {
  // ** State
  const [value, setValue] = useState<string>('account')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
    <Navbar/>
    <Card
      sx={{
        maxWidth: '100%',
        width: '100%',
        overflow: 'hidden',
        boxShadow: 'none',
        position: 'relative',
        padding: '80px 80px',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 0,
          borderRadius: 'inherit',
          opacity: 0.15
        }

      }}
    >
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Description</TabName>
              </Box>
            }
          />
          <Tab
            value='security'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Participants</TabName>
              </Box>
            }
          />
          <Tab
            value='info'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Rules</TabName>
              </Box>
            }
          />
          <Tab
            value='Chat'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Chat</TabName>
              </Box>
            }
          />
          <Tab
            value='Home'
            label={
              <Link href='/register'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Register</TabName>
                </Box>
              </Link>
            }
          />
          <Tab
            value='Home'
            label={
              <Link href='/'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Home</TabName>
                </Box>
              </Link>
            }
          />
        </TabList>


        <TabPanel sx={{ p: 0 }} value='account'>
          <Description  />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          <TableCollapsible/>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='Chat'>
          <ChatScreen/>
        </TabPanel>
      </TabContext>
    </Card>
    <Footer/>
    </>
  )
}

export default Room

Room.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
