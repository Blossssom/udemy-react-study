import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../reducers/cartReducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCartItem = useSelector(state => state.cart);

  const toggleHandler = () => {
    dispatch(cartActions.modalToggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItem.totalItem}</span>
    </button>
  );
};

export default CartButton;
