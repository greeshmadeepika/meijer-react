import React, { useEffect, useContext } from 'react';
import { Container } from 'reactstrap';
import ProductItem from '../components/productItem';
import {
    Button,
    Spinner
} from 'reactstrap';
import { fetchProducts } from '../reducers/productReducer';
import { addProduct, removeProduct } from '../reducers/cartReducer';
import { navigate } from '@reach/router';
import { store } from '../Provider/ProductProvider';

const ProductList = () => {


    const globalState = useContext(store);

    const { state: {
        cart,
        product: {
            isLoading: loading,
            products
        }
    },
        dispatch } = globalState;


    useEffect(() => {
        fetchProducts(dispatch)
    }, [dispatch]);


    const goToCart = () => {
        navigate('/cart')
    }
    return (<Container className="offset-md-3 col-md-6">
        {loading && (<div className="d-flex justify-content-center align-items-center loadingContainer" >
            <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>)}
        {!loading && products.map((product, index) => {
            return (<div key={index}>
                <ProductItem
                    {...product}
                    exist={!!cart.find(s => s.code === product.code)}
                    onAdd={() => {
                        dispatch(addProduct(product))
                    }} onRemove={() => {
                        dispatch(removeProduct(product.code))
                    }} />
            </div>);
        })}

        <div className="d-flex justify-content-end mt-2">
            {!loading && cart.length > 0 && <Button onClick={goToCart} color="primary">Go to cart</Button>}
        </div>
    </Container>)
}

export default ProductList