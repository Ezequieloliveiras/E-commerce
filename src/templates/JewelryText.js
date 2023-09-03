import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

const Container = styled('h1')({
  padding: '30px 0 0 19px',
})

const Title = () => {
  return (
    <Container>
      <Typography variant='h4' >
        Jewelry
      </Typography>
    </Container>
  )
}

export default Title
