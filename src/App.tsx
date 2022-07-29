import React, { useState, useCallback } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { AppBarComponent, Sidebar, Menu, Dashboard, Search } from 'components';
import { SEARCH, MAIN, ROUTES } from './routes';
import { store } from './store';

export const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  const history = useHistory();

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = useCallback(() => {
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle]);

  const onThemeChange = useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  }, [themeMode]);

  const menuClickHandler = useCallback(
    (link: string) => {
      history.push(link);
      setSideBarToggle(!sideBarToggle);
    },
    [history, sideBarToggle]
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarComponent
          handleDrawerToggle={handleDrawerToggle}
          onThemeChange={onThemeChange}
          isDarkMode={themeMode === 'dark'}
          isDrawerOpen={sideBarToggle}
        />
        <Sidebar
          isOpen={sideBarToggle}
          handleDrawerToggle={handleDrawerToggle}
          children={<Menu links={ROUTES} menuClickHandler={menuClickHandler} />}
        />
        <Switch>
          <Route exact path={MAIN}>
            <Dashboard />
          </Route>
          <Route exact path={SEARCH}>
            <Search />
          </Route>
        </Switch>
      </ThemeProvider>
    </Provider>
  );
};
