//action types
export const FETCH_PRODUCT_FULFILLED = 'FETCH_PRODUCT_FULFILLED';
export const FETCH_PRODUCT_PENDING = 'FETCH_PRODUCT_PENDING'

// actions
export const fetchProducts = (dispatch) => {
    fetch('https://meijerdigital.azurewebsites.net/api/products', {headers: {
        'x-functions-key': 'VockV3fu1c7vBvaG7A4oMALa9WIrPekx8jeH5HeBzuxir2X6NcAE5w=='
    }}).then(r => r.json()).then(response => {
        dispatch({ type: FETCH_PRODUCT_FULFILLED, products: response });
    })
}
