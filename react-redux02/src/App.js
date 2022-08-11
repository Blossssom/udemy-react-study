import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './actions/cartAction';

let isInit = true;

function App() {
  const cartState = useSelector(state => state.cart);
  const uiState = useSelector(state => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if(isInit) {
      isInit = false;
      return;
    }

    if(cartState.changed) {
      dispatch(sendCartData(cartState));
    }
  }, [cartState])

  return (
    <>
      {
        uiState.notification 
          && 
        <Notification status={uiState.notification.status} title={uiState.notification.title} message={uiState.notification.message} />
      }
      <Layout>
        {
          cartState.isModal && <Cart />
        }
        <Products />
      </Layout>
    </>
  );
}

export default App;
