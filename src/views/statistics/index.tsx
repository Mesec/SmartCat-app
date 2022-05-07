import React from 'react'
import { IProduct, IFormatManufacturerData } from '../../lib/interfaces';
import { FakeApi } from '../../lib/api';
import { BarChartComponent, PieChartComponent } from '../../components/graphs/index';
import { Box, Button } from '@mui/material';
import Header from '../../components/header';

export default function Statistics(): JSX.Element {
  const [products, setProducts] = React.useState<IProduct[] | []>([])
  const [graphPreviewState, setGraphPreviewState] = React.useState<boolean>(false);
  const [manufacturers, setManufacturers] = React.useState<IFormatManufacturerData[] | []>()

  let graph = (
    <Box sx={ { width: '100%', height: "100%", padding: "20px" } }>
      <BarChartComponent data={ products } />
    </Box>
  )
  if (graphPreviewState) {
    graph = (
      <Box sx={ { width: '100%', height: "100%", padding: "20px" } }>
        { manufacturers ? <PieChartComponent data={ manufacturers } /> : null }
      </Box>
    )
  }

  React.useEffect(() => {
    const products = FakeApi.getDataForChart_1();
    setProducts(products);

    const manufacturers = FakeApi.getDataForChart_2();
    setManufacturers(manufacturers)
  }, [])

  return (
    <Box sx={ { width: '100%', height: "100%" } }>
      <Header />
      <Box sx={ { width: '100%', height: '100%', display: 'flex',flexDirection: 'column', alignItems:'center'} }>
        <Button
          sx={{margin: '20px 0 0 0', width: '200px'}}
          onClick={ () => setGraphPreviewState(!graphPreviewState) }
          variant="contained"
          color="secondary">
          Switch Graphs
        </Button>
        <Box sx={ { display: 'flex', width: '100%', height: '100%' } }>
          {graph}
        </Box>
      </Box>
    </Box>
  )
}