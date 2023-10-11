/*import React from 'react';
import { Box, Paper, List, ListItem, ListItemText, TextField, Button } from '@mui/material';

const ChatScreen = () => {
  const chatHistory = [
    { text: 'Hello!', sender: 'You' },
    { text: 'Hi there!', sender: 'Friend' },
    { text: 'Hello!', sender: 'You' },
    { text: 'Hi there!', sender: 'Friend' },
    // Add more chat messages as needed
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: '16px' }}>
        <Paper elevation={3} sx={{ padding: '16px', marginBottom: '16px' }}>
          <List>
            {chatHistory.map((chat, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={chat.text}
                  secondary={chat.sender}
                  primaryTypographyProps={{
                    sx: { fontWeight: 'bold', color: chat.sender === 'You' ? 'primary.main' : 'text.primary' },
                  }}
                  secondaryTypographyProps={{ color: 'text.secondary' }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
      <Box sx={{ padding: '16px' }}>
        <TextField label="Type your message" variant="outlined" fullWidth />
        <Button variant="contained" color="primary" sx={{ marginTop: '16px' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatScreen;
*/

import React from 'react';
import { Box, Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import { deepPurple, teal, orange, pink } from '@mui/material/colors';

const CommentSection = () => {
  const comments = [
    { text: 'Great post!', author: 'User123' },
    { text: 'I agree with you.', author: 'Commenter1' },
    { text: 'Interesting topic!', author: 'User456' },
    // Add more comments as needed
  ];

  const avatarColors = [deepPurple[500], teal[500], orange[500], pink[500]];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',  minHeight:'90vh', }}>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: '16px' }}>
        <Paper elevation={3} sx={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h5" sx={{ marginBottom: '16px' }}>
            Discussion
          </Typography>
          {comments.map((comment, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
                borderLeft: `4px solid ${avatarColors[index % avatarColors.length]}`,
                paddingLeft: '12px',
              }}
            >
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: '1.25rem',
                  marginRight: '12px',
                  backgroundColor: avatarColors[index % avatarColors.length],
                }}
              >
                {comment.author[0]}
              </Avatar>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {comment.author}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '4px' }}>
                  {comment.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
        <TextField
          label="Leave a comment"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          sx={{ marginRight: '16px', borderRadius: '20px', flex: 1 }}
        />
        <Button variant="contained" color="primary" sx={{ borderRadius: '20px' }}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CommentSection;
