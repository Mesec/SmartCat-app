import { Grid, TextField, Button, Autocomplete } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { IProduct, IManufacturer } from '../../lib/interfaces';

interface IProps {
  productData: IProduct;
  manufacturerData: IManufacturer[];
  changeHandler: (name: string, value: string | Date | IManufacturer | null) => void;
  submitHandler: () => void;
  // disabled: boolean;
}

export default function ProductForm(props: IProps): JSX.Element {
  const { productData, manufacturerData, changeHandler, submitHandler, 
    // disabled 
  } = props;

  return (
    <Grid container spacing={ 2 }>
      <Grid item xs={ 12 }>
        <TextField
          hiddenLabel
          name='name'
          type='text'
          fullWidth
          id='name'
          label='Product name'
          value={ productData.name }
          onChange={ (e) => changeHandler(e.target.name, e.target.value) }
        />
      </Grid>
      <Grid item xs={ 12 }>
        <Autocomplete
          disablePortal
          id="manufacturer"
          options={ manufacturerData }
          getOptionLabel={ (option) => option.name }
          onChange={ (event: React.SyntheticEvent, value): void => changeHandler('manufacturer', value) }
          fullWidth
          value={ productData?.manufacturer ? productData.manufacturer : null }
          renderInput={ (params) => <TextField { ...params } label="Manufacturer name" /> }
        />
      </Grid>
      <Grid item xs={ 12 }>
        <TextField
          hiddenLabel
          name='price'
          type='number'
          fullWidth
          id='price'
          label='Product price'
          value={ productData.price ? productData.price : '' }
          onChange={ (e) => changeHandler(e.target.name, e.target.value) }
        />
      </Grid>
      <Grid item xs={ 12 }>
        <LocalizationProvider dateAdapter={ AdapterDateFns }>
          <DesktopDatePicker
            label="Expiry date"
            inputFormat="MM/dd/yyyy"
            value={ productData?.expiryDate ? productData.expiryDate : '' }
            onChange={ (date) => changeHandler('expiryDate', date) }
            renderInput={ (params) => <TextField { ...params } fullWidth /> }
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={ 12 }>
        <Button 
        disabled={productData.name === '' || !productData.expiryDate || productData.price === 0 || productData.manufacturer?.name === '' }
        variant="contained" 
        fullWidth color="secondary" 
        onClick={ submitHandler }
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}