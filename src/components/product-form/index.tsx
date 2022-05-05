import { Grid, TextField, Button } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { IProduct } from '../../lib/interfaces';

interface IProps {
  productData: IProduct;
  dateChangeHandler: (newDate: Date | null) => void;
  changeHandler: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  submitHandler: ()=> void;
}

export default function ProductForm(props: IProps): JSX.Element {
  const { productData, dateChangeHandler, changeHandler, submitHandler } = props;

  return (
    <Grid container spacing={ 2 }>
          <Grid item xs={ 12 }>
            <TextField
              name='name'
              type='text'
              required
              fullWidth
              id='name'
              label='Product name'
              value={productData.name}
              onChange={ (e) => changeHandler(e) }
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              name='price'
              type='number'
              required
              fullWidth
              id='price'
              label='Product price'
              value={productData.price}
              onChange={ (e) => changeHandler(e) }
            />
          </Grid>
          <Grid item xs={ 12 }>
            <LocalizationProvider dateAdapter={ AdapterDateFns }>
              <DesktopDatePicker
                label="Expiry date"
                inputFormat="MM/dd/yyyy"
                value={ productData.expiryDate }
                onChange={ dateChangeHandler }
                renderInput={ (params) => <TextField required{ ...params } fullWidth /> }
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={ 12 }>
            <Button variant="contained" fullWidth color="secondary" onClick={ submitHandler }>Submit</Button>
          </Grid>
        </Grid>
  )
}