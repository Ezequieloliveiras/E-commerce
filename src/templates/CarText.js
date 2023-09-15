import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

const Container = styled('h1')({
  
})

const Title = ({children}) => {
  return (
    <Container>
      <Typography>
        {children}
      </Typography>
    </Container>
  )
}

export default Title
