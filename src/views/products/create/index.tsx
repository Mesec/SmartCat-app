import React from 'react'
import { Box } from '@mui/material';
import { FakeApi } from '../../../lib/api';
import { IProduct, IManufacturer } from '../../../lib/interfaces';
import { useNavigate } from 'react-router-dom';
import { manufacturerData } from '../../../lib/data'
import Header from '../../../components/header'
import FormLayout from '../../../components/layout/form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProductForm from '../../../components/product-form';

export default function CreateProduct(): JSX.Element {
  const navigate = useNavigate();
    const [productData, setProductData] = React.useState<IProduct>({
    name: '',
    price: 0,
    expiryDate: null
  })

    // create product
  const createProductHandler = (): void => {
    FakeApi.createProduct(productData);
    navigate('/');
  }

    // input change handler
  const changeHandler = (name: string, value: string | Date | IManufacturer | null): void => {
    const updatedData = { ...productData, [name]: value };
    setProductData(updatedData);
  }

  return (
    <Box>
      <Header></Header>
      <FormLayout title="Create product" icon={ <AddCircleIcon /> }>
       <ProductForm 
          productData={productData} 
          manufacturerData={manufacturerData}
          changeHandler={changeHandler} 
          submitHandler={createProductHandler}
          />
      </FormLayout>
    </Box>
  )
}