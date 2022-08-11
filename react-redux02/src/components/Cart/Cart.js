import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const itemList = useSelector(state => state.cart.itemList);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          itemList.map(v => {
            return (
              <CartItem key={v.itemId} item={{ title: v.title, quantity: v.quantity, total: v.totalPrice, price: v.price, id: v.itemId}} />
            )
          }) 
        }
      </ul>
    </Card>
  );
};

export default Cart;
