import { cartActions } from '../reducers/cartReducer';
import {uiActions} from '../reducers/uiReducers';


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://post-react-9067f-default-rtdb.firebaseio.com/cart.json');
            
            if(!response.ok) {
                throw new Error('Failed fatch Data!!');
            }
            
            const data = await response.json();
            return data;
        };
        try {
            const cartData = await fetchData();
            console.log(cartData);
            dispatch(cartActions.replaceCart({
                itemList: cartData.itemList || [],
                totalItem: cartData.totalItem
            }));
        }catch(err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: `Fetch Cart Data Error` 
            }));
        }
    };
};

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending Cart Data'
        }));

        console.log(cartData)
        try {
            const response = await fetch('https://post-react-9067f-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    itemList: cartData.itemList,
                    totalItem: cartData.totalItem
                })
            });
    
            if(!response.ok) {
                throw new Error('response error');
            }

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!!',
                message: 'Sending Cart Data Success'
            }));
        }catch(err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: `Sending Cart Data Error` 
            }));
        }
        
    };
};