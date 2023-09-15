import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

const Container = styled('div')({
  
})

const Title = ({children}) => {
  return (
    
      <Typography styled={{fontFamily:'Roboto, sans-serif'}} >
        {children}
      </Typography>
    
  )
}

export default Title
