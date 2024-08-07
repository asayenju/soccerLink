import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#065F89', // Change primary color to #065F89
    },
    secondary: {
      main: '#c30010',
    }
  },
});

const handleViewClick = (id) => {
  // Implement view functionality here
  console.log(`Viewing row with id ${id}`);
};

const handleEditClick = (id) => {
  // Implement edit functionality here
  console.log(`Editing row with id ${id}`);
};

const handleDeleteClick = (id) => {
  // Implement delete functionality here
  console.log(`Deleting row with id ${id}`);
};

const columns = [
  { field: 'id', headerName: 'ID', width: 70, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'firstName', headerName: 'First name', width: 130, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'lastName', headerName: 'Last name', width: 130, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'position', headerName: 'Position', width: 130, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'playstyle', headerName: 'PlayStyle', width: 130, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'nationality', headerName: 'Nationality', width: 130, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'appearances', headerName: 'Appearances', width: 130, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'gamestarts', headerName: 'Game Starts', width: 130, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  { field: 'minutesplayed', headerName: 'Minutes Played', width: 130, align: 'center', headerAlign: 'center', headerClassName: 'super-app-theme--header', resizable: false },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'purple',
            color: 'white',
            minWidth: '50px',
            height: '50px',
            marginRight: 1,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: 'purple',
            },
          }}
          onClick={() => handleViewClick(params.row.id)}
        >
          <VisibilityIcon />
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            minWidth: '50px',
            height: '50px',
            marginRight: 1,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => handleEditClick(params.row.id)}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            minWidth: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => handleDeleteClick(params.row.id)}
        >
          <DeleteIcon />
        </Button>
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', position: 'Forward', playstyle: 'Aggressive', age: 35, nationality: 'Westeros', appearances: 20, gamestarts: 3, minutesplayed: 1800 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', position: 'Midfielder', playstyle: 'Creative', age: 42, nationality: 'Westeros', appearances: 18, gamestarts: 3, minutesplayed: 1650 },
  { id: 3, lastName: 'Stark', firstName: 'Arya', position: 'Striker', playstyle: 'Energetic', age: 28, nationality: 'Westeros', appearances: 22, gamestarts: 3, minutesplayed: 1950 },
  { id: 4, lastName: 'Targaryen', firstName: 'Daenerys', position: 'Winger', playstyle: 'Technical', age: 30, nationality: 'Dragonstone', appearances: 25, gamestarts: 3, minutesplayed: 2100 },
  { id: 5, lastName: 'Baratheon', firstName: 'Robert', position: 'Defender', playstyle: 'Solid', age: 31, nationality: 'Westeros', appearances: 23, gamestarts: 3, minutesplayed: 1980 },
  { id: 6, lastName: 'Greyjoy', firstName: 'Theon', position: 'Midfielder', playstyle: 'Adaptable', age: 29, nationality: 'Iron Islands', appearances: 19, gamestarts: 3, minutesplayed: 1720 },
  { id: 7, lastName: 'Tyrell', firstName: 'Margaery', position: 'Forward', playstyle: 'Strategic', age: 27, nationality: 'Highgarden', appearances: 21, gamestarts: 3, minutesplayed: 1860 },
  { id: 8, lastName: 'Martell', firstName: 'Oberyn', position: 'Goalkeeper', playstyle: 'Agile', age: 34, nationality: 'Dorne', appearances: 17, gamestarts: 3, minutesplayed: 1540 },
  { id: 9, lastName: 'Clegane', firstName: 'Sandor', position: 'Defender', playstyle: 'Robust', age: 32, nationality: 'Westeros', appearances: 24, gamestarts: 3, minutesplayed: 2040 },
  { id: 10, lastName: 'Mormont', firstName: 'Jorah', position: 'Midfielder', playstyle: 'Determined', age: 36, nationality: 'Bear Island', appearances: 16, gamestarts: 3, minutesplayed: 1440 },
];

export default function DataTable() {
  const [filteredRows, setFilteredRows] = React.useState(rows);
  const [searchText, setSearchText] = React.useState('');

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    filterRows(text);
  };

  const filterRows = (text) => {
    const filtered = rows.filter(row =>
      row.firstName.toLowerCase().includes(text.toLowerCase()) ||
      row.lastName.toLowerCase().includes(text.toLowerCase()) ||
      row.position.toLowerCase().includes(text.toLowerCase()) ||
      row.nationality.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRows(filtered);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ height: 'calc(100vh - 64px)', width: '100%', padding: '20px', boxSizing: 'border-box', overflowX: 'hidden' }}>
        <TextField
          label="Search players"
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
          sx={{
            marginBottom: 2,
            width: '100%',
          }}
        />
        <div style={{ height: '88%', width: '100%' }}>
          <DataGrid
            sx={{
              '& .super-app-theme--header': {
                backgroundColor: 'primary.main',
                color: 'white',
              },
              marginBottom: 500,
            }}
            rows={filteredRows}
            columns={columns}
            pageSize={5}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
