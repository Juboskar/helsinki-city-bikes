import React from 'react';
import { Card } from '@mui/material';
import { PageInfo } from './pageInfo';

interface PropTypes {
  page: number;
  setPage: (value: number) => void;
}

export const PageInfoCard = ({ page, setPage }: PropTypes) => (
  <Card
    sx={{ minWidth: 275 }}
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
