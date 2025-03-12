import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

import Dashboard from "../dashboard/Dashboard.jsx";
import Income from '../Income/Income.jsx';
import Expenses from '../Expenses/Expenses.jsx';
import Budget from '../budget/Budget.jsx';
import Customize from '../customize/Customize.jsx';
import TopBar from './TopBar.jsx';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
  },
  {
    segment: 'income',
    title: 'Income',
  },
  {
    segment: 'expenses',
    title: 'Expenses',
  },
  {
    segment: 'budget',
    title: 'Budget',
  },
  {
    segment: 'customize',
    title: 'Customize',
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <TopBar />
      <ThemeSwitcher />
    </Stack>
  );
}

function SidebarFooter() {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <img src="/dashboard/salary.png" style={{height : "45px"}} alt="" />
      <Typography variant="h6">MyCash</Typography>
      <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
      
    </Stack>
    
  );
}

function LayOut(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  const handleNavigationClick = (segment) => {
    router.push(`/${segment}`);
  };

  return (
    <AppProvider
      navigation={NAVIGATION.map((item) => ({
        ...item,
        onClick: item.segment ? () => handleNavigationClick(item.segment) : undefined,
      }))}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
      >
        {router.pathname === '/dashboard' && <Dashboard />}
        {router.pathname === '/income' && <Income />}
        {router.pathname === "/expenses" && <Expenses />}
        {router.pathname === "/budget" && <Budget />}
        {router.pathname === "/customize" && <Customize />}


      </DashboardLayout>
    </AppProvider>
  );
}

LayOut.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default LayOut;