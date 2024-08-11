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
  { name: 'Lionel Messi', team: 'PSG', stats: { passing: 90, shooting: 85, defending: 95, dribbling: 92, pace: 88, physical: 75, appearance: 80 } },
  { name: 'Cristiano Ronaldo', team: 'Al-Nassr', stats: { passing: 88, shooting: 80, defending: 90, dribbling: 85, pace: 80, physical: 78, appearance: 85 } },
  { name: 'Neymar Jr.', team: 'PSG', stats: { passing: 85, shooting: 82, defending: 88, dribbling: 80, pace: 85, physical: 82, appearance: 85 } },
  { name: 'Kylian Mbappé', team: 'PSG', stats: { passing: 92, shooting: 88, defending: 94, dribbling: 90, pace: 87, physical: 84, appearance: 90 } },
  { name: 'Kevin De Bruyne', team: 'Manchester City', stats: { passing: 85, shooting: 83, defending: 85, dribbling: 89, pace: 91, physical: 80, appearance: 83 } },
  { name: '', team: '', stats: { passing: 0, shooting: 0, defending: 0, dribbling: 0, pace: 0, physical: 0, appearance: 0 } }, // Option to reset the player selection
  // Add more players here...
];

const AddPlayer = ({ onSelectPlayer }) => {
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

    if (onSelectPlayer) {
      onSelectPlayer(newSelectedPlayer);
    }
  };

  const groupedOptions = players.map((option) => {
    const firstLetter = option.name[0] ? option.name[0].toUpperCase() : '';
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const colors = ['#00A5E3', '#8DD7BF', '#FF97C5', '#FF5768'];

  return (
    <div style={{ display: 'flex', gap: '10vh', justifyContent: 'center', marginTop: '4vh', marginBottom: '4vh' }}>
      {[0, 1, 2, 3].map((index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <PersonAddIcon 
            onClick={() => handleClickOpen(index)} 
            style={{ cursor: 'pointer', fontSize: '3rem', color: colors[index] }} 
          />
          <Dialog 
            open={open[index]} 
            onClose={() => handleClose(index)}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle sx={{ color: '#065F89' }}>Select a Player</DialogTitle>
            <DialogContent>
              <Autocomplete
                options={groupedOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField 
                    {...params} 
                    label="Search Player" 
                    sx={{
                      marginTop: '1rem',
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#065F89',
                        },
                        '&:hover fieldset': {
                          borderColor: '#065F89',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#065F89',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#065F89',
                      },
                      '& .MuiInputBase-input': {
                        color: '#065F89',
                      },
                    }}
                  />
                )}
                onChange={(event, value) => handleSelectPlayer(value, index)}
                sx={{
                  width: '100%',
                  '& .MuiAutocomplete-option': {
                    color: '#065F89',
                  },
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleClose(index)} sx={{color: "#065F89"}}>Cancel</Button>
            </DialogActions>
          </Dialog>
          {selectedPlayer[index] && (
            <div style={{ color: colors[index], marginTop: '8px' }}>
              {selectedPlayer[index].name || ''}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddPlayer;
