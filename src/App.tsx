import React from 'react';
import Layout from './components/layout/main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { customTheme } from './assets/theme/index';
import Results from './views/products/results';
import AboutUs from './views/about-us';
import CreateProduct from './views/products/create'
import EditProduct from './views/products/edit'
import Statistics from './views/statistics';
import { dummyData } from './lib/data';

function App(): JSX.Element {
  const [activeRoute, setActiveRoute] = React.useState<string>('/');
  const [productId, setProductId] = React.useState<string>('')

  const setActiveRouteHadnler = (path: string): void => {
    setActiveRoute(path)
  }

  React.useEffect(() => {
    const data = dummyData;
    localStorage.setItem('products', JSON.stringify(data));
    
    const path = window.location.pathname;
    setActiveRoute(path);
  }, []);

  return (
    <Router>
      <CssBaseline>
        <ThemeProvider theme={ customTheme }>
          <Layout activeRoute={ activeRoute } setActiveRoute={ setActiveRouteHadnler }>
            <Routes>
              <Route
                path='/'
                element={ <Results setActiveRoute={ setActiveRouteHadnler } setProductId={setProductId}/> }
              />
              <Route
                path='/create-product'
                element={ <CreateProduct  /> }
              />
              <Route
                path='/edit-product'
                element={ <EditProduct productId={productId}/> }
              />
              <Route
                path='/about-us'
                element={ <AboutUs /> }
              />
              <Route
                path='/statistics'
                element={ <Statistics /> }
              />
            </Routes>
          </Layout>
        </ThemeProvider>
      </CssBaseline>
    </Router>
  );
}

export default App;
