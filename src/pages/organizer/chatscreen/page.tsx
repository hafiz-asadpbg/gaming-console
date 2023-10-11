
import React from 'react';
import { Box, Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import { deepPurple, teal, orange, pink } from '@mui/material/colors';

const ChatScreen = () => {
  const comments = [
    { text: 'Great post!', author: 'User1' },
    { text: 'I agree with you.', author: 'User2' },
    { text: 'Interesting topic!', author: 'User3' },
    { text: 'Great post!', author: 'User1' },
    { text: 'I agree with you.', author: 'User2' },
    { text: 'Interesting topic!', author: 'User3' },
  ];

  const avatarColors = [deepPurple[500], teal[500], orange[500], pink[500]];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
          sx={{ marginRight: '16px', borderRadius: '20px', flex: 1 }}
        />
        <Button variant="contained" color="primary" sx={{ borderRadius: '10px' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatScreen;
