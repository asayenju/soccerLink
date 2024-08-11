import * as React from 'react';
import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const players = [
  { name: 'Lionel Messi', team: 'PSG' },
  { name: 'Cristiano Ronaldo', team: 'Al-Nassr' },
  { name: 'Neymar Jr.', team: 'PSG' },
  { name: 'Kylian Mbappé', team: 'PSG' },
  { name: 'Kevin De Bruyne', team: 'Manchester City' },
  // Add more players here...
];

const AddPlayer = () => {
  const [open, setOpen] = useState([false, false, false, false]);
  const [selectedPlayer, setSelectedPlayer] = useState([null, null, null, null]);

  const handleClickOpen = (index) => {
    const newOpen = [...open];
    newOpen[index] = true;
    setOpen(newOpen);
  };

  const handleClose = (index) => {
    const newOpen = [...open];
    newOpen[index] = false;
    setOpen(newOpen);
  };

  const handleSelectPlayer = (player, index) => {
    const newSelectedPlayer = [...selectedPlayer];
    newSelectedPlayer[index] = player;
    setSelectedPlayer(newSelectedPlayer);
    handleClose(index);
  };

  const groupedOptions = players.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <div style={{ display: 'flex', gap: '10vh', justifyContent: 'center', marginTop: '4vh', marginBottom: '4vh' }}>
      {[0, 1, 2, 3].map((index) => (
        <div key={index}>
          <PersonAddIcon 
            onClick={() => handleClickOpen(index)} 
            style={{ cursor: 'pointer', fontSize: '3rem', color: '#065F89' }} 
          />
          <Dialog 
            open={open[index]} 
            onClose={() => handleClose(index)}
            maxWidth="md" // Increases the width of the popup
            fullWidth // Ensures it uses the full width available
          >
            <DialogTitle>Select a Player</DialogTitle>
            <DialogContent>
              <Autocomplete
                options={groupedOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Search Player" />}
                onChange={(event, value) => handleSelectPlayer(value, index)}
                sx={{ width: '100%' }} // Ensures the autocomplete field matches the popup width
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleClose(index)}>Cancel</Button>
            </DialogActions>
          </Dialog>
          {selectedPlayer[index] && (
            <div>{selectedPlayer[index].name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddPlayer;
