
import Container from '@mui/material/Container';
import Header from "../partials/Header"
import { styled } from '@mui/material/styles'


const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: 15,

}))



const Padrão = ({ children }) => {


    return (
        <>
            <Header />
                <StyledContainer style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    {children}
                </StyledContainer>
        </>
    )
}

export default Padrão