import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box} from '@mui/material';
import FormLayout from '../../../components/layout/form';
import { C_Products } from '../../../lib/worker';
import { IProduct } from '../../../lib/interfaces';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header'
import ProductForm from '../../../components/product-form';


interface IProps {
  //  updateData: IProduct;
}

export default function EditProduct(props: IProps): JSX.Element {
  // const {updateData} = props;
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

  const updateProductHandler = (): void => {
    C_Products.createProduct(productData);
    navigate('/')
  }

  React.useEffect(() => {
    // setProductData(updateData);
  }, [])

  return (
    <Box>
      <Header></Header>
      <FormLayout title="Create product" icon={ <AddCircleIcon /> }>
        <ProductForm 
          productData={productData} 
          dateChangeHandler={dateChangeHandler} 
          changeHandler={changeHandler} 
          submitHandler={updateProductHandler}/>
      </FormLayout>
    </Box>
  )
}