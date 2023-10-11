import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table';
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw';
import SalesByCountries from 'src/views/dashboard/SalesByCountries';
import Tournamentscomponents from './tournament';
import Withdrawcomponents from './withdraw';

const Dashboard = () => {
  // Define an array of withdrawal requests
  const withdrawalRequests = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Pending',
      price: '$100',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Approved',
      price: '$200',
    },
    // Add more withdrawal requests as needed
  ];

  return (
    <ApexChartWrapper>

      <Grid container spacing={6}>
        {/* Total Player Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Player</Typography>
              {/* Display total player count here */}
              <Typography variant="body2">Total: 1000</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Organizer Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Organizer</Typography>
              {/* Display total organizer count here */}
              <Typography variant="body2">Total: 500</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Game Card */}
        <Grid item xs={12} md={6} lg={4} >
          <Card>
            <CardContent>
              <Typography variant="h6">Total Game</Typography>
              {/* Display total game count here */}
              <Typography variant="body2">Total: 200</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Typography variant="h4" sx={{
          margin: '0 auto',
          padding: '1rem 0',
          color: '#45f884',
        }}>WithDraw History</Typography>

        

        <Grid item xs={12}>
          <Withdrawcomponents />
        </Grid>
        <Grid item xs={12}>
          <Tournamentscomponents />
        </Grid>



      </Grid>
    </ApexChartWrapper>
  );
};

export default Dashboard;
