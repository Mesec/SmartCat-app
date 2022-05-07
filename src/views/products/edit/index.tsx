import React from 'react'
import { Box} from '@mui/material';
import { manufacturerData } from '../../../lib/data'
import { FakeApi } from '../../../lib/api';
import { IProduct, IManufacturer } from '../../../lib/interfaces';
import { useNavigate } from 'react-router-dom';
import FormLayout from '../../../components/layout/form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Header from '../../../components/header'
import ProductForm from '../../../components/product-form';

interface IProps {
  productId: string;
}

export default function EditProduct(props: IProps): JSX.Element {
  const { productId } = props;
  const navigate = useNavigate();
  const [productData, setProductData] = React.useState<IProduct>({
    name: '',
    price: 0,
    expiryDate: null
  })

  const updateProductHandler = (): void => {
    FakeApi.editProduct(productData);
    navigate('/')
  }

  React.useEffect(() => {
    if(productId) {
      const data = FakeApi.getProductById(productId);
      setProductData(data)
    }
  }, [productId])

    // input change handler
  const changeHandler = (name: string, value: string | Date | IManufacturer | null): void => {
    const updatedData = { ...productData, [name]: value };
    setProductData(updatedData);
  }
  // console.log(productData)
  return (
    <Box>
      <Header></Header>
      <FormLayout title="Create product" icon={ <AddCircleIcon /> }>
        <ProductForm 
          productData={productData} 
          manufacturerData={manufacturerData}
          changeHandler={changeHandler} 
          submitHandler={updateProductHandler}
          />
      </FormLayout>
    </Box>
  )
}