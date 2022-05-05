import React from 'react'
import { Box } from '@mui/material';
import { C_Products } from '../../../lib/worker';
import { IProduct } from '../../../lib/interfaces';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header'
import FormLayout from '../../../components/layout/form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProductForm from '../../../components/product-form';
import './index.css'

export default function CreateProduct(): JSX.Element {
  const navigate = useNavigate();
  const [productData, setProductData] = React.useState<IProduct>({
    name: '',
    price: null,
    expiryDate: null
  })

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const { name, value } = e.target;
    const updatedData = { ...productData, [name]: value }
    setProductData(updatedData)
  };

  const dateChangeHandler = (newDate: Date | null): void => {
    const updatedData = { ...productData, expiryDate: newDate }
    setProductData(updatedData)
  }

  const createProductHandler = (): void => {
    C_Products.createProduct(productData);
    navigate('/')
  }

  return (
    <Box>
      <Header></Header>
      <FormLayout title="Create product" icon={ <AddCircleIcon /> }>
       <ProductForm 
          productData={productData} 
          dateChangeHandler={dateChangeHandler} 
          changeHandler={changeHandler} 
          submitHandler={createProductHandler}
          />
      </FormLayout>
    </Box>
  )
}