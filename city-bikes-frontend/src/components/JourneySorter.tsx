import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';

export const JourneySorter = ({
  sorter,
  handleSorterChange,
  order,
  handleOrderChange
}: {
  sorter: string;
  handleSorterChange: (event: SelectChangeEvent<string>) => void;
  order: string;
  handleOrderChange: (event: SelectChangeEvent<string>) => void;
}) => {
  return (
    <>
      <Typography variant="caption" sx={{ fontSize: 16, color: 'darkblue' }}>
        Sort:
      </Typography>{' '}
      <Select
        value={sorter}
        label="sort"
        onChange={handleSorterChange}
        variant="standard"
      >
        <MenuItem value={'departure'}>departure</MenuItem>
        <MenuItem value={'return'}>return</MenuItem>
        <MenuItem value={'departure_station_id'}>departure station id</MenuItem>
        <MenuItem value={'departure_station_name'}>
          departure station name
        </MenuItem>
        <MenuItem value={'return_station_id'}>return station id</MenuItem>
        <MenuItem value={'return_station_name'}>return station name</MenuItem>
        <MenuItem value={'distance'}>distance</MenuItem>
        <MenuItem value={'duration'}>duration</MenuItem>
      </Select>
      <Select
        value={order}
        label={'order'}
        onChange={handleOrderChange}
        variant="standard"
      >
        <MenuItem value={'asc'}>ascending</MenuItem>
        <MenuItem value={'desc'}>descending</MenuItem>
      </Select>
    </>
  );
};
