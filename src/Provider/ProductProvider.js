import React, { createContext, useReducer } from 'react';
import {
    ADD_PRODUCT, REMOVE_PRODUCT
} from '../reducers/cartReducer'
import {
    FETCH_PRODUCT_FULFILLED, FETCH_PRODUCT_PENDING
} from '../reducers/productReducer'

const initialState = {
    cart: [],
    product: {
        products: [],
        isLoading: true
    }
};
const store = createContext(initialState);
const { Provider } = store;

const ProdcutStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case ADD_PRODUCT:
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            case REMOVE_PRODUCT:
                return {
                    ...state,
                    cart: state.cart.filter(s => s.code !== action.payload.code)
                }
            case FETCH_PRODUCT_PENDING: {
                return {
                    ...state,
                    product: {
                        products: [],
                        isLoading: true
                    }
                }
            }
            case FETCH_PRODUCT_FULFILLED: {
                return {
                    ...state,
                    product: {
                        products: [...action.products],
                        isLoading: false
                    }
                }
            }
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, ProdcutStateProvider }