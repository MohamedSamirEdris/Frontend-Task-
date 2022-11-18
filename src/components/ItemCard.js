import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotals } from '../redux/cartSlice';

const CardContainer = styled(Card)(({ theme }) => ({
  width: '21%',
  margin: '1rem',
  marginBottom: '2rem',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  borderRadius: '14px',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));

const Content = styled(CardContent)({
  minHeight: '11rem',
});

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (produc) => {
    dispatch(addToCart(produc));
    navigate.push('/cart');
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <CardContainer>
      <CardMedia component="img" height="350" image={item.img} alt="image" />
      <Content>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ height: '4rem' }}
        >
          {item.name}
        </Typography>
        <Divider />
        <Typography variant="h4"> Price: ${item.price}</Typography>
        <Divider />
        <Typography variant="h4">Disc: ${item.discount}</Typography>
      </Content>
      <CardActions>
        <Button variant="contained" onClick={() => handleAddToCart(item)}>
          ADD TO CART
        </Button>
      </CardActions>
    </CardContainer>
  );
};

export default ItemCard;
