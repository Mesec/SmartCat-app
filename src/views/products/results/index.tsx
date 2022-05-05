import { Box, IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProductCard from '../../../components/product-card'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../../lib/interfaces';
import { C_Products } from '../../../lib/worker';
import React from 'react';
import Header from '../../../components/header'

interface IProps {
  setActiveRoute: (path: string) => void;
}

export default function Products(props: IProps): JSX.Element {
  const [products, setProducts] = React.useState<IProduct[] | []>([]);
  const { setActiveRoute } = props;
  const navigate = useNavigate();

  const redirectToCreatePage = (path: string): void => {
    setActiveRoute('')
    navigate(path);
  }

  const deleteProductHandler = (productId: string): void => {
    C_Products.deleteProduct(productId);
    const updatedProducts = products.filter((item: IProduct) => item.id !== productId);
    setProducts(updatedProducts)
  }

  React.useEffect(() => {
    const data = C_Products.getProducts();
    setProducts(data);
  }, []);

  return (
    <Box sx={ { display: 'flex', flexDirection: 'column', height: '100%' } }>
      <Header>
        <IconButton onClick={ () => redirectToCreatePage('/create-product') }>
          <AddCircleIcon />
        </IconButton>
      </Header>
      <Box sx={ { padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' } } >
        { products.map((item: IProduct, index: number) => (
          <ProductCard
            key={ index }
            product={ item }
            deleteProduct={ deleteProductHandler }
            redirect={ redirectToCreatePage } />
        )) }
      </Box>
    </Box>
  )
}
