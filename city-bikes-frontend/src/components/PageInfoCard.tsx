import React from 'react';
import { Card } from '@mui/material';
import { PageInfo } from './PageInfo';

interface PropTypes {
  page: number;
  setPage: (value: number) => void;
}

export const PageInfoCard = ({ page, setPage }: PropTypes) => (
  <Card
    sx={{ minWidth: 400 }}
    style={{
      backgroundColor: 'transparent',
      width: '60%',
      margin: 'auto',
      marginBottom: 15,
      boxShadow: '0 0 0'
    }}
  >
    <PageInfo page={page} setPage={setPage} />
  </Card>
);
