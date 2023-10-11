import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

interface Package {
  id: number;
  name: string;
  Amount: number;
  price:number;
}

const CoinPage = () => {
  const [packages, setPackages] = useState<Package[]>([
    { id: 1, name: 'Package 1', Amount: 10, price:232 },
    { id: 2, name: 'Package 2', Amount: 20 , price:232},
  ]);

  const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleAddPackage = (newPackage: Package) => {
    setPackages([...packages, newPackage]);
    setOpenAddDialog(false);
  };

  const handleEditPackage = () => {
    setOpenEditDialog(false);


     };

  const handleDeletePackage = (packageId: number) => {
    const updatedPackages = packages.filter((pkg) => pkg.id !== packageId);
    setPackages(updatedPackages);
  };

  return (
    <Grid container spacing={12}>
      <Grid item xs={12}>

        <Button variant="contained" onClick={() => setOpenAddDialog(true)}>
          Add New Package
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {packages.map((pkg) => (
                <TableRow key={pkg.id}>
                  <TableCell>{pkg.id}</TableCell>
                  <TableCell>{pkg.name}</TableCell>
                  <TableCell>{pkg.Amount}</TableCell>
                  <TableCell>{pkg.price}</TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setOpenEditDialog(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeletePackage(pkg.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Grid>

      {/* Add Package Dialog */}
      <Dialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add New Package</DialogTitle>
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <TextField label="Name" fullWidth />
          <TextField label="Amount" fullWidth />
          <TextField label="Price" fullWidth />

          <Button
            variant="contained"
            onClick={() => handleAddPackage(packages)}
          >
            Add
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit Package</DialogTitle>
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {/* Add your form fields here for editing a package */}
          <TextField label="Name" fullWidth />
          <TextField label="Amount" fullWidth />
          <TextField label="Price" fullWidth />
          <Button
            variant="contained"
            onClick={() => handleEditPackage()}
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default CoinPage;
