import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { TextField, Select, MenuItem } from '@mui/material/';
import Button from '@mui/material/Button';

import TableCustomized from 'src/views/tables/TableCustomized';
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator';
import TableGames from 'src/views/tables/TableGames';

const MUITable = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchGame, setSearchGame] = useState<string>('');
  const [searchName, setSearchName] = useState<string>('');
  const [searchPlatform, setSearchPlatform] = useState<string>('');

  const handlecreate = () => {
    setOpen(!open);
  };

  const handclose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Games
          </Link>
        </Typography>
        <Typography variant='body2'>Tables display Games Details.</Typography>
        <Button variant="contained" onClick={handlecreate}>Add</Button>
      </Grid>

      {open && (
        <Grid item xs={12}>
          <FormLayoutsSeparator
            open={open}
            handclose={handclose}
          />
        </Grid>
      )}

      {/* Search Inputs */}
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap:'1rem' }}>
        <Select
          value={'All'}
          label="Platform"
        >
          <MenuItem value="abc">abc</MenuItem>
          <MenuItem value="bca">bca</MenuItem>
          <MenuItem value="abc">abc</MenuItem>
          <MenuItem value="bca">bca</MenuItem>
        </Select>
        <Select
          value={'All'}
          label="Platform"
        >
          <MenuItem value="abc">abc</MenuItem>
          <MenuItem value="bca">bca</MenuItem>
          <MenuItem value="abc">abc</MenuItem>
          <MenuItem value="bca">bca</MenuItem>
        </Select>
        <Select
          value={'All'}
          label="id"
        >
          <MenuItem value="abc">abc</MenuItem>
          <MenuItem value="bca">bca</MenuItem>
          <MenuItem value="abc">abc</MenuItem>
          <MenuItem value="bca">bca</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Tournafest Games' titleTypographyProps={{ variant: 'h6' }} />
          <TableGames
            searchGame={searchGame}
            searchName={searchName}
            searchPlatform={searchPlatform}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default MUITable;
