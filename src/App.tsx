import React from 'react';
import Layout from './components/layout/main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { customTheme } from './assets/theme/index';
import Products from './views/products/results';
import AboutUs from './views/about-us';
import CreateProduct from './views/products/create'
import EditProduct from './views/products/edit'
import { IProduct } from './lib/interfaces';

function App(): JSX.Element {
  const [activeRoute, setActiveRoute] = React.useState<string>('/')

  const setActiveRouteHadnler = (path: string): void => {
    setActiveRoute(path)
  }

  return (
    <Router>
      <CssBaseline>
        <ThemeProvider theme={ customTheme }>
          <Layout activeRoute={activeRoute} setActiveRoute={setActiveRouteHadnler}>
            <Routes>
              <Route path='/' element={ <Products setActiveRoute={ setActiveRouteHadnler } /> } />
              <Route path='/create-product' element={ <CreateProduct /> } />
              <Route path='/edit-product' element={ <EditProduct />} />
              <Route path='/about-us' element={ <AboutUs /> } />
            </Routes>
          </Layout>
        </ThemeProvider>
      </CssBaseline>
    </Router>
  );
}

export default App;
