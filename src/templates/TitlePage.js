import React from "react"
import { Typography } from "@mui/material"
import { styled } from '@mui/material/styles'

const useStyles = styled((theme) => ({ 
    container: {
        padding: theme.spacing(2), 
    },
}))

const Page = ({ title, component: Component }) => { 
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography variant='h3' component='h1'> 
                {title}
            </Typography>
            <Component /> 
        </div>
    )
}

export default Page