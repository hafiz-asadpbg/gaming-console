import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Grid, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Navbar from 'src/views/homeView/navbar';
import Footer from 'src/views/homeView/footer';
// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw';

const CoinShop = () => {
  const [open, setOpen] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    routingNumber: '',
  });
  const [accountBalance, setAccountBalance] = useState(5000); // Initialize the balance

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Here you can implement the logic to process the bank details and complete the purchase
    console.log('Bank details submitted:', bankDetails);
    setOpen(false);
  };


  const handleWithdraw = () => {
    // Here you can implement the logic to process the withdrawal and update the balance
    console.log('Withdrawal requested');
    setOpen(false);
  };

  const coinItems = [
    { amount: 100, image: '/coin.png' },
    { amount: 500, image: '/coin.png' },
    { amount: 1000, image: '/coin.png' },
  ];

  const handleBuy = ({ amount }: any) => {
    handleClickOpen();
  };

  const handleBankDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBankDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleDeposit = (amount) => {
  // Logic to add package amount to account balance
  if (!isNaN(amount) && parseFloat(amount) > 0) {
    const newBalance = accountBalance + parseFloat(amount);
    console.log(`Adding ${amount} coins to account balance`);
    setAccountBalance(newBalance);
  }
  setWithdrawOpen(false); // Close the dialog
};

  const [withdrawOpen, setWithdrawOpen] = useState(false);

  const [withdrawalData, setWithdrawalData] = useState({
    withdrawalAmount: '',
    accountNumber: '',
    routingNumber: '',
  });

  const handleWithdrawOpen = () => {
    setWithdrawOpen(true);
  };

  const handleWithdrawClose = () => {
    setWithdrawOpen(false);
  };

  const handleWithdrawAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setWithdrawalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const confirmWithdrawal = () => {
  if (accountBalance === 0) {
    // If account balance is zero, disable withdrawal
    console.log('Withdrawal is disabled as account balance is zero');
    setWithdrawOpen(false);
  } else if (parseFloat(withdrawalData.withdrawalAmount) <= accountBalance) {
    // If withdrawal amount is valid and not exceeding the account balance
    const newBalance = accountBalance - parseFloat(withdrawalData.withdrawalAmount);
    console.log('Withdrawal confirmed', withdrawalData);
    console.log('New account balance:', newBalance);
    setAccountBalance(newBalance); // Update account balance
    setWithdrawOpen(false);
  } else {
    // Withdrawal amount exceeds account balance
    console.log('Withdrawal amount exceeds account balance');
    setWithdrawOpen(false);
  }
};


  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#000' }}>
      <Navbar />
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginTop:20 }}>
        <Grid item xs={12}>
          {/* Account Balance */}
          <Card sx={{ width: '60%', bgcolor: '#000', border: '1px solid #333', margin: '0 auto' }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: '#45f884' }}>
                Account Balance: {accountBalance} Coins
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 16 }}
                onClick={handleWithdrawOpen}
              >
                Withdraw
              </Button>
            </CardContent>
          </Card>
        </Grid>
                <Grid item xs={12}>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center', color: '#45f884', margin: '20px 0' }}>
            Coin Packages
          </Typography>
        </Grid>
        {coinItems.map((item, index) => (
          <Grid key={index} item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Coin Packages */}
            <Card sx={{ width: '70%', bgcolor: '#000', border: '1px solid #333', margin: '10px auto' }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: '#45f884' }}>
                  {item.amount} Coins
                </Typography>
                <img src={item.image} alt={`Coins ${item.amount}`} style={{ maxWidth: '100%', marginTop: 16 }} />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: 16 }}
                  onClick={() => handleBuy(item.amount)}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          padding: '10px 100px',
        }}
      >
        {/* Balance History */}
        <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: '#45f884' }}>
          Balance History
        </Typography>
        <DepositWithdraw />
      </Box>
      <Footer />
      {/* Withdrawal Dialog */}
            <Dialog open={withdrawOpen} onClose={handleWithdrawClose}>
        <DialogTitle>Withdrawal Form</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Withdrawal Amount"
            name="withdrawalAmount"
            value={withdrawalData.withdrawalAmount}
            onChange={handleWithdrawAmountChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Name of Card Holder"
            name="accountNumber"
            value={withdrawalData.accountNumber}
            onChange={handleWithdrawAmountChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Card Number"
            name="routingNumber"
            value={withdrawalData.routingNumber}
            onChange={handleWithdrawAmountChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleWithdrawClose} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmWithdrawal} color="primary">
            Confirm Withdrawal
          </Button>
        </DialogActions>
      </Dialog>
      {/* Bank Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill Bank Details</DialogTitle>
        <DialogContent>
          {/* Bank Details Form */}
          <TextField
            fullWidth
            label="Name of Card Holder"
            name="accountNumber"
            value={bankDetails.accountNumber}
            onChange={handleBankDetailsChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Card Number"
            name="routingNumber"
            value={bankDetails.routingNumber}
            onChange={handleBankDetailsChange}
            margin="normal"
          />
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
            <TextField
              fullWidth
              label="Valid Through"
              name="accountNumber"
              value={bankDetails.accountNumber}
              onChange={handleBankDetailsChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="CVV NO."
              name="routingNumber"
              value={bankDetails.routingNumber}
              onChange={handleBankDetailsChange}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Deposit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CoinShop.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default CoinShop;

