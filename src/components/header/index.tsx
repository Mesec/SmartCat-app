import { Box } from '@mui/system'

interface IProps {
  children?: JSX.Element;
}

export default function Header(props: IProps): JSX.Element {
  const { children } = props;
  return (
      <Box 
      component="header" 
      sx={ { 
        height: '45px', 
        bgcolor: '#b2ebf2', 
        display: 'flex', 
        alignItems: 'center', 
        paddingRight: '20px' 
        } }
        >
          { children }
        </Box>
  )
}