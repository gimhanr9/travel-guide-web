import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/main_layout';
import { publicRoutes } from './routes';
import { Theme } from './styles/Theme';


const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        <Routes exact>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={< MainLayout >
                {route.component}
              </MainLayout>}
            />
          ))}

        </Routes>
      </div>
    </ThemeProvider >
  );
};

export default App;