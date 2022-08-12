import React from 'react';
import { Button, Typography } from '@mui/material';

interface PropTypes {
  page: number;
  setPage: (value: number) => void;
}

export const PageInfo = ({ page, setPage }: PropTypes) => {
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <>
      <Typography variant="caption"> You are on page {page + 1} </Typography>
      {page > 0 && <Button onClick={previousPage}>Previous page</Button>}
      <Button onClick={nextPage}>Next page</Button>
    </>
  );
};
