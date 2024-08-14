import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#065F89',
  '&.Mui-selected': {
    backgroundColor: '#054a6e', // Darker shade for the selected state
    color: 'white',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#033952', // Even darker shade when selected and hovered
    color: 'white',
  },
  '&:hover': {
    backgroundColor: '#1e6f94', // Darker shade on hover
    color: 'white',
  },
}));

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('total');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="total vs per 90 mins"
    >
      <CustomToggleButton value="total" aria-label="total stats">
        Total
      </CustomToggleButton>
      <CustomToggleButton value="per90" aria-label="per 90 mins stats">
        Per 90 mins
      </CustomToggleButton>
    </ToggleButtonGroup>
  );
}
