import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../../lib/interfaces';
import { FakeApi } from '../../../lib/api';
import React, { Dispatch, SetStateAction } from 'react';
import Header from '../../../components/header'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProductCard from '../../../components/product-card'
interface IProps {
  setActiveRoute: (path: string) => void;
  setProductId: Dispatch<SetStateAction<string>>
}

export default function Products(props: IProps): JSX.Element {
  const { setActiveRoute, setProductId } = props;
  const [products, setProducts] = React.useState<IProduct[] | []>([]);
  const navigate = useNavigate();

  // redirect to another page
  const redirect = (path: string): void => {
    setActiveRoute('')
    navigate(path);
  }

  // delete single product
  const deleteProductHandler = (productId: string): void => {
    FakeApi.deleteProduct(productId);
    const updatedProducts = products.filter((item: IProduct) => item.id !== productId);
    setProducts(updatedProducts)
  }

  // get all products 
  React.useEffect(() => {
    const data = FakeApi.getProducts();
    setProducts(data);
  }, []);

  return (
    <Box sx={ { height: '100%', overflowX: 'hidden', paddingBottom: '30px' } }>
      <Header></Header>
        <Button
          sx={ { width: '200px', margin: '20px 0 20px 20px' } }
          variant='contained'
          color='secondary'
          onClick={ () => redirect('/create-product') }>
          <AddCircleIcon />
          <Typography variant="button" sx={{marginLeft: '3px'}}>Create product</Typography>
        </Button>
        <Grid container spacing={2} sx={{ margin: '0', alignSelf: 'stretch', padding: 0}}>
          { products.map((item: IProduct, index: number) => (
            <ProductCard
              key={ index }
              product={ item }
              deleteProduct={ deleteProductHandler }
              redirect={ redirect }
              setProductId={ setProductId }
            />
          )) }
        </Grid>
    </Box>
  )
}
