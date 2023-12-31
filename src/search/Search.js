import * as React from 'react'

import {
  styled,
  alpha,
  Box,
  Toolbar,
  InputBase,
} from '@mui/material'


import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const PrimarySearchAppBar = ({ setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Box sx={{ flexGrow: 1, marginLeft: '90px' }}>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisar..."
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearchChange}
          />
        </Search>
      </Toolbar>
    </Box>
  )
}


export default PrimarySearchAppBar