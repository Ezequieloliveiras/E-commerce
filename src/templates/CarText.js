import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

const Container = styled('h1')({
  padding: '30px 0 0 19px',
})

const Title = ({children}) => {
  return (
    <Container>
      <Typography styled={{fontFamily:'Roboto, sans-serif'}} >
        {children}
      </Typography>
    </Container>
  )
}

export default Title
