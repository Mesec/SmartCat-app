import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react';
import { IProduct } from '../../lib/interfaces';

interface IProps {
  product: IProduct;
  deleteProduct: (productId: string) => void;
  redirect: (path: string) => void;
  setProductId: Dispatch<SetStateAction<string>>
}

export default function ProductCard(props: IProps) {
  const { product, deleteProduct, redirect, setProductId} = props;
  
  const formatDate =(date: Date | null) => {
    if(date !== null) {
      const newDate = new Date(date);
      const day = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
      const month = newDate.getMonth() < 10 ? `0${newDate.getMonth()}` : newDate.getMonth();
      const year = newDate.getFullYear();

      return `${day}/${month}/${year}`
    }
  }

  const goToEditPage =()=> {
    if(typeof product.id === 'string') {
      setProductId(product.id);
    }
    redirect('/edit-product')
  }

  return (
    <Grid item xs={5}>
      <Card sx={{width: '100%'}}>
      <CardContent>
        <Typography variant="subtitle2">
          Product name: { product.name }
        </Typography>
        <Typography variant="subtitle2">
          Manufacturer name: { product?.manufacturer?.name }
        </Typography>
        <Typography variant="subtitle2">
          Price: { product.price } €
        </Typography>
        <Typography variant="subtitle2">
          Expiry date: {formatDate(product.expiryDate)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goToEditPage}>Edit</Button>
        <Button size="small" onClick={() => deleteProduct(product.id ? product.id : '')}>Delete</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}
