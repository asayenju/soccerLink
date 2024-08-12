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
  {
    name: 'Lionel Messi',
    team: 'PSG',
    stats: {
      Appearance: {
        Games: 7,
        Minutes: 671,
        Starts: 7,
        'Sub On': 0,
        'Sub Off': 2,
      },
      Defense: {
        Interceptions: 10,
        'Blocked Shots': 5,
        'Clean Sheets': 3,
        'Goals Conceded': 2,
        'Goals Conceded Inside Box': 1,
        'Goals Conceded Outside Box': 1,
        'Own Goals': 0,
        'Penalty Goals Conceded': 0,
        'Shots On Target Faced': 12,
        'Shots On Target Faced Inside Box': 8,
        'Shots On Target Faced Outside Box': 4,
      },
      Discipline: {
        'Total Cards': 1,
        'Yellow Cards': 1,
        'Red Cards': 0,
      },
      Duels: {
        'Take Ons Overrun': 3,
        'Duels Contested': 50,
        'Tackles Made': 12,
        'Fouls From Tackle Attempts': 2,
        'Last Man Tackles Made': 0,
        'Take Ons Completed': 15,
        'Fouls Won': 8,
        Fouls: 4,
        'Penalties Won': 1,
        'Aerial Duels Contested': 7,
        'Aerial Duels Won': 4,
        'Ground Duels Contested': 43,
        'Ground Duels Won': 29,
        'Duels Won': 33,
      },
      Goalkeeping: {
        'Shots Faced': 0,
        'Saves Made': 0,
        'Saves Made In Box': 0,
        'Saves Made Out Box': 0,
        'Penalties Faced': 0,
        'Penalties Saved': 0,
      },
    },
  },
  {
    name: 'Cristiano Ronaldo',
    team: 'Al-Nassr',
    stats: {
      Appearance: {
        Games: 8,
        Minutes: 720,
        Starts: 8,
        'Sub On': 0,
        'Sub Off': 1,
      },
      Defense: {
        Interceptions: 12,
        'Blocked Shots': 6,
        'Clean Sheets': 4,
        'Goals Conceded': 3,
        'Goals Conceded Inside Box': 2,
        'Goals Conceded Outside Box': 1,
        'Own Goals': 0,
        'Penalty Goals Conceded': 0,
        'Shots On Target Faced': 14,
        'Shots On Target Faced Inside Box': 10,
        'Shots On Target Faced Outside Box': 4,
      },
      Discipline: {
        'Total Cards': 2,
        'Yellow Cards': 2,
        'Red Cards': 0,
      },
      Duels: {
        'Take Ons Overrun': 4,
        'Duels Contested': 60,
        'Tackles Made': 14,
        'Fouls From Tackle Attempts': 3,
        'Last Man Tackles Made': 0,
        'Take Ons Completed': 18,
        'Fouls Won': 9,
        Fouls: 5,
        'Penalties Won': 2,
        'Aerial Duels Contested': 8,
        'Aerial Duels Won': 5,
        'Ground Duels Contested': 45,
        'Ground Duels Won': 30,
        'Duels Won': 36,
      },
      Goalkeeping: {
        'Shots Faced': 0,
        'Saves Made': 0,
        'Saves Made In Box': 0,
        'Saves Made Out Box': 0,
        'Penalties Faced': 0,
        'Penalties Saved': 0,
      },
    },
  },
  {
    name: 'Neymar Jr.',
    team: 'PSG',
    stats: {
      Appearance: {
        Games: 6,
        Minutes: 540,
        Starts: 6,
        'Sub On': 0,
        'Sub Off': 3,
      },
      Defense: {
        Interceptions: 8,
        'Blocked Shots': 4,
        'Clean Sheets': 2,
        'Goals Conceded': 1,
        'Goals Conceded Inside Box': 1,
        'Goals Conceded Outside Box': 0,
        'Own Goals': 0,
        'Penalty Goals Conceded': 0,
        'Shots On Target Faced': 10,
        'Shots On Target Faced Inside Box': 6,
        'Shots On Target Faced Outside Box': 4,
      },
      Discipline: {
        'Total Cards': 1,
        'Yellow Cards': 1,
        'Red Cards': 0,
      },
      Duels: {
        'Take Ons Overrun': 2,
        'Duels Contested': 40,
        'Tackles Made': 10,
        'Fouls From Tackle Attempts': 1,
        'Last Man Tackles Made': 0,
        'Take Ons Completed': 12,
        'Fouls Won': 7,
        Fouls: 3,
        'Penalties Won': 1,
        'Aerial Duels Contested': 5,
        'Aerial Duels Won': 3,
        'Ground Duels Contested': 35,
        'Ground Duels Won': 20,
        'Duels Won': 25,
      },
      Goalkeeping: {
        'Shots Faced': 0,
        'Saves Made': 0,
        'Saves Made In Box': 0,
        'Saves Made Out Box': 0,
        'Penalties Faced': 0,
        'Penalties Saved': 0,
      },
    },
  },
  {
    name: 'Kylian Mbappé',
    team: 'PSG',
    stats: {
      Appearance: {
        Games: 8,
        Minutes: 690,
        Starts: 8,
        'Sub On': 0,
        'Sub Off': 1,
      },
      Defense: {
        Interceptions: 14,
        'Blocked Shots': 7,
        'Clean Sheets': 5,
        'Goals Conceded': 3,
        'Goals Conceded Inside Box': 2,
        'Goals Conceded Outside Box': 1,
        'Own Goals': 0,
        'Penalty Goals Conceded': 0,
        'Shots On Target Faced': 15,
        'Shots On Target Faced Inside Box': 10,
        'Shots On Target Faced Outside Box': 5,
      },
      Discipline: {
        'Total Cards': 2,
        'Yellow Cards': 2,
        'Red Cards': 0,
      },
      Duels: {
        'Take Ons Overrun': 5,
        'Duels Contested': 70,
        'Tackles Made': 20,
        'Fouls From Tackle Attempts': 5,
        'Last Man Tackles Made': 1,
        'Take Ons Completed': 20,
        'Fouls Won': 10,
        Fouls: 6,
        'Penalties Won': 3,
        'Aerial Duels Contested': 10,
        'Aerial Duels Won': 6,
        'Ground Duels Contested': 50,
        'Ground Duels Won': 35,
        'Duels Won': 40,
      },
      Goalkeeping: {
        'Shots Faced': 0,
        'Saves Made': 0,
        'Saves Made In Box': 0,
        'Saves Made Out Box': 0,
        'Penalties Faced': 0,
        'Penalties Saved': 0,
      },
    },
  },
  {
    name: 'Kevin De Bruyne',
    team: 'Manchester City',
    stats: {
      Appearance: {
        Games: 8,
        Minutes: 700,
        Starts: 8,
        'Sub On': 0,
        'Sub Off': 2,
      },
      Defense: {
        Interceptions: 11,
        'Blocked Shots': 5,
        'Clean Sheets': 4,
        'Goals Conceded': 3,
        'Goals Conceded Inside Box': 2,
        'Goals Conceded Outside Box': 1,
        'Own Goals': 0,
        'Penalty Goals Conceded': 0,
        'Shots On Target Faced': 13,
        'Shots On Target Faced Inside Box': 9,
        'Shots On Target Faced Outside Box': 4,
      },
      Discipline: {
        'Total Cards': 1,
        'Yellow Cards': 1,
        'Red Cards': 0,
      },
      Duels: {
        'Take Ons Overrun': 4,
        'Duels Contested': 65,
        'Tackles Made': 15,
        'Fouls From Tackle Attempts': 4,
        'Last Man Tackles Made': 1,
        'Take Ons Completed': 16,
        'Fouls Won': 9,
        Fouls: 5,
        'Penalties Won': 2,
        'Aerial Duels Contested': 9,
        'Aerial Duels Won': 5,
        'Ground Duels Contested': 50,
        'Ground Duels Won': 34,
        'Duels Won': 39,
      },
      Goalkeeping: {
        'Shots Faced': 0,
        'Saves Made': 0,
        'Saves Made In Box': 0,
        'Saves Made Out Box': 0,
        'Penalties Faced': 0,
        'Penalties Saved': 0,
      },
    },
  },
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
