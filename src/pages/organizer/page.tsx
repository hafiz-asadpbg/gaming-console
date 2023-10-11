import { SyntheticEvent, useState } from 'react';
import { ReactNode } from 'react';
import BlankLayout from 'src/@core/layouts/BlankLayout';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import MuiTab, { TabProps } from '@mui/material/Tab';
import 'react-datepicker/dist/react-datepicker.css';
import ProjectPage from './OrganizerView/ProjectView/page';
import GameOverview from './OverView/page';
import GeneralSettings from './generalsetting/page';
import ParticipantPage from './Participant/page';
import ChatScreen from './chatscreen/page';
import FinalResultsPage from './ranking/pages';
import Link from 'next/link';
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown';
import Dropdown from './dropdown';
import Wallet from './wallet/page';
import MyTournament from './tournaments/page';
import { Tournament } from 'mdi-material-ui';

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 200,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
  '&:hover': {
    backgroundColor: '#ddd'
    },
}));

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  textAlign:'left',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Organizer = () => {
  const [value, setValue] = useState<string>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 20px'
      }}>

      <Typography variant="h5" sx={{ p:5, bgcolor: '#f5f5f5'  }}>
        Organizer Panel
      </Typography>
      <Dropdown />
      </Box>
      <Box sx={{ display: 'flex', flex: 1, }}>
        <Box
          component="aside"
          sx={{
            width: '250px',
            textAlign:'left',
            flexShrink: 0,
            bgcolor: '#f5f5f5',
            borderRight: '1px solid #ddd',
            overflowY: 'auto',
            display: { xs: sidebarOpen ? 'block' : 'none', md: 'block' },
            color: '#000',

          }}
        >
          <TabContext value={value} >
            <TabList
              orientation="vertical"
              onChange={handleChange}
              aria-label="account-settings tabs"

            >
              <Tab
                value="overview"
                label={<TabName
                  sx={{
                    color: value === 'overview' ? '#fff' : '#333',
                  }}
                >Project</TabName>}
                sx={{
                  backgroundColor: value === 'overview' ? '#45f884' : 'transparent',
                }}
              />
              <Tab
                value="account"
                label={<TabName
                  sx={{
                    color: value === 'account' ? '#fff' : '#333',
                  }}
                >OverView</TabName>}
                sx={{
                  backgroundColor: value === 'account' ? '#45f884' : 'transparent',
                }}
              />
              <Tab
                value="tournament"
                label={<TabName
                  sx={{
                    color: value === 'tournament' ? '#fff' : '#333',
                  }}
                >MyTournaments</TabName>}
                sx={{
                  backgroundColor: value === 'chat' ? '#45f884' : 'transparent',
                }}
              />
              <Tab
                value="chat"
                label={<TabName
                  sx={{
                    color: value === 'chat' ? '#fff' : '#333',
                  }}
                >Chat</TabName>}
                sx={{
                  backgroundColor: value === 'chat' ? '#45f884' : 'transparent',
                }}
              />
              <Tab
                value="security"
                label={<TabName
                  sx={{
                    color: value === 'security' ? '#fff' : '#333',
                  }}
                >General setting</TabName>}
                sx={{
                  backgroundColor: value === 'security' ? '#45f884' : 'transparent',
                }}
              />
              <Tab
                value="info"
                label={<TabName
                  sx={{
                    color: value === 'info' ? '#fff' : '#333',
                  }}
                >Participant</TabName>}
                sx={{
                  backgroundColor: value === 'info' ? '#45f884' : 'transparent',
                }}
              />
              <Tab
                value="final"
                label={<TabName
                  sx={{
                    color: value === 'final' ? '#fff' : '#333',
                  }}
                >Final Standing</TabName>}
                sx={{
                  backgroundColor: value === 'final' ? '#45f884' : 'transparent',
                }}
              />
              <Tab
                value="Wallet"
                label={<TabName
                  sx={{
                    color: value === 'Wallet' ? '#fff' : '#333',
                  }}
                >Wallet</TabName>}
                sx={{
                  backgroundColor: value === 'Wallet' ? '#45f884' : 'transparent',
                }}
              />
              {/* <Tab
                value="Home"
                label={
                  <Link href="/">
                    <TabName>Home</TabName>
                  </Link>
                }
                sx={{
                  backgroundColor: value === 'Home' ? '#45f884' : 'transparent',
                }}
              /> */}
            </TabList>
          </TabContext>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Card>
            <TabContext value={value}>
              <TabPanel sx={{ p: 0 }} value="overview">
                <ProjectPage />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="account">
                <GameOverview />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="chat">
                <ChatScreen />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="security">
                <GeneralSettings />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="info">
                <ParticipantPage />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="final">
                <FinalResultsPage />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="Wallet">
                <Wallet />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="tournament">
                <MyTournament />
              </TabPanel>
            </TabContext>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 999,
        }}
      >
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </Box>
    </Box>
  );
};

export default Organizer;

Organizer.getLayout = (page: ReactNode) => (
  <BlankLayout>{page}</BlankLayout>
);
