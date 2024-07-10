 // Description : This part is responsible for how when you click on addtocart, it listens to the shopping cart that is in the header. It also saves the data in localstorage so that when you go out and enter, the data is saved and not deleted. It is responsible for whether you increase or reduce the quantity of products and also gives you the total output.
 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
};

// Function to load state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Function to save state to local storage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        // Handle errors here, if needed
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadState() || initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    name_en: newItem.name_en,
                    photo: newItem.photo,
                    price: newItem.price,
                    description_en: newItem.description_en,
                    category: newItem.category,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += Number(newItem.price);
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
            saveState(state); // Save to local storage
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalQuantity -= existingItem.quantity;
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
            saveState(state); // Save to local storage
        },
        resetCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
            saveState(state); // Save to local storage
        },
    },
});

export const { resetCart } = cartSlice.actions;
export const cartActions = cartSlice.actions;
export default cartSlice;
