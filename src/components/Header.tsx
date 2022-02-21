import React from 'react';
import { useTheme } from '@mui/material/styles';

function Header() {
  const theme = useTheme();

  return <span>{`spacing ${theme.palette.primary.main}`}</span>;
}

export default Header;
