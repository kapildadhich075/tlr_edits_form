import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

interface Column {
  id: 'orders' | 'status' | 'editor' | 'nextDriveIn';
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: number | string) => string;
}

const columns: Column[] = [
  { id: 'orders', label: 'Orders', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 100, align: 'center' },
  { id: 'editor', label: 'Editor/Artist', minWidth: 170, align: 'center' },
  { id: 'nextDriveIn', label: 'Next Drive-in', minWidth: 170, align: 'center' },
];

interface Data {
  orders: string;
  status: string;
  editor: string;
  nextDriveIn: string;
}

function createData(
  orders: string,
  status: string,
  editor: string,
  nextDriveIn: string,
): Data {
  return { orders, status, editor, nextDriveIn };
}

const rows = [
  createData('Order 1', 'Pending', 'Editor A', '2024-07-25'),
  createData('Order 2', 'Completed', 'Artist B', '2024-07-24'),
  createData('Order 3', 'In Progress', 'Editor C', '2024-07-23'),
  // Add more rows as needed
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchText, setSearchText] = React.useState('');
  const [filterOption, setFilterOption] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    filterRows(event.target.value, filterOption);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOption(event.target.value);
    filterRows(searchText, event.target.value);
  };

  const handleClearFilters = () => {
    setSearchText('');
    setFilterOption('');
    setFilteredRows(rows);
  };

  const filterRows = (searchText: string, filterOption: string) => {
    let filtered = rows;
    if (searchText) {
      filtered = filtered.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
    if (filterOption) {
      filtered = filtered.filter((row) =>
        row.status.toLowerCase() === filterOption.toLowerCase()
      );
    }
    setFilteredRows(filtered);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
          style={{ marginRight: '10px' }}
        />
        <TextField
          select
          label="Filter by Status"
          value={filterOption}
          onChange={handleFilterChange}
          variant="outlined"
          style={{ marginRight: '10px', minWidth: '150px' }}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          {/* Add more options as needed */}
        </TextField>
        <Button variant="outlined" onClick={handleClearFilters}>Clear</Button>
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.orders}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
