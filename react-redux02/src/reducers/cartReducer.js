import { createSlice } from "@reduxjs/toolkit"

const initState = {isModal: false, totalItem: 0, itemList: [], totalAmount: 0, changed: false}

const cartReducer = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        modalToggle(state) {
            state.isModal = !state.isModal
        },
        replaceCart(state, action) {
            state.totalItem = action.payload.totalItem;
            state.itemList = action.payload.itemList;
        },
        addItem(state, action) {
            const item = action.payload;
            const checkExist = state.itemList.find(v => v.itemId === item.id);
            if(!checkExist) {
                state.itemList.push({itemId: item.id, price: item.price, quantity: 1, totalPrice: item.price, title: item.title});
                state.totalItem++;
            }else {
                checkExist.quantity++;
                checkExist.totalPrice += item.price;
            }
            state.changed = true;
        },
        removeItem(state, action) {
            const item = action.payload;
            const checkExist = state.itemList.find(v => v.itemId === item.id);
            if(checkExist.quantity === 1) {
                state.itemList = state.itemList.filter(v => v.itemId !== item.id);
                state.totalItem--;
            }else {
                checkExist.quantity--;
                checkExist.totalPrice -= checkExist.price;
            }
            state.changed = true;
        }
    }
});


export const cartActions = cartReducer.actions;
export default cartReducer;