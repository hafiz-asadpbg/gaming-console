import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';

const GeneralSettings = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('general');

  const handleChangeTab = (event: any, newValue: React.SetStateAction<string>) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom sx={{
        padding: '1rem'
      }}>
        General Settings
      </Typography>

      <TabContext value={activeTab}>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="General" value="general" />
            <Tab label="Detail" value="detail" />
            <Tab label="Contact" value="contact" />
          </Tabs>
        </Box>

        <TabPanel value="general">
          <form>
            <TextField label="Name" fullWidth margin="normal" />
            <TextField label="Complete Name" fullWidth margin="normal" />
            <TextField label="Discipline" fullWidth margin="normal" />
            <TextField label="Platform" fullWidth margin="normal" />
            <TextField label="Organizer" fullWidth margin="normal" />
            <TextField label="Website Link" fullWidth margin="normal" />
            <TextField label="Size" fullWidth margin="normal" />
            <input type="file" accept="image/*" id="logo-upload" style={{ display: 'none' }} />
            <label htmlFor="logo-upload">
              <Button variant="outlined" component="span">
                Upload Logo
              </Button>
            </label>
            <div>
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="Played on Internet" />
                <FormControlLabel value="no" control={<Radio />} label="Not Played on Internet" />
              </RadioGroup>
            </div>
            <TextField label="Location" fullWidth margin="normal" />
            <TextField label="Country" fullWidth margin="normal" />
            <TextField label="Start Time" fullWidth margin="normal" />
            <TextField label="End Time" fullWidth margin="normal" />
            <TextField label="Timezone" fullWidth margin="normal" />
            <Button variant="contained" color="primary">
              Update
            </Button>
          </form>
        </TabPanel>

        <TabPanel value="detail">
          <form>
            <TextField label="Description" fullWidth margin="normal" multiline rows={5} />
            <TextField label="Prize" fullWidth margin="normal" multiline rows={6} />
            <TextField label="Rules" fullWidth margin="normal" multiline rows={8} />
            <Button variant="contained" color="primary">
              Update
            </Button>
          </form>
        </TabPanel>

        <TabPanel value="contact">
          <TextField label="Contact Email" fullWidth margin="normal" />
          <TextField label="Discover invite link" fullWidth margin="normal" />
          <Button variant="contained" color="primary">
            Update
          </Button>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default GeneralSettings;
