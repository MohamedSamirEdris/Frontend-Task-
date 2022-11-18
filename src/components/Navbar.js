import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));



const Navbar = () => {

  const basket = useSelector((state) => state.cart);




  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="/">
            <img src='pngtree-online-shop-logo-vector-template-design-illustration-png-image_860085.jpeg' alt="img" style={{maxHeight: "50PX" ,margin: "auto"}}/>
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Link to="/">
            <img src='pngtree-online-shop-logo-vector-template-design-illustration-png-image_860085.jpeg' alt="img" style={{maxHeight: "50PX" ,margin: "auto"}}/>
          </Link>
        </Box>
        <SearchIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Link to="/checkout">
            <Badge badgeContent={basket.cartTotalQuantity} color="error">
              <ShoppingCartIcon sx={{ color: 'white' }} />
            </Badge>
          </Link>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
