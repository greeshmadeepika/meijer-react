//action types
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// actions
export const addProduct= (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = (code) => {
    return {
        type: REMOVE_PRODUCT,
        payload:{
            code: code
        }
    }
}

