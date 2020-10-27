import { navigate } from '@reach/router';
import React, {useContext} from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
    Button
} from 'reactstrap';
import { store } from '../Provider/ProductProvider';

export const CartList = () => {

    const globalState = useContext(store);

    const { state: {
        cart,
       
    } } = globalState;

    const addMore = () => {
        navigate('/products')
    }

    if (cart.length === 0) {
        return (<Container className="offset-md-3 col-md-6">
            <div>
                No items found.
                </div>
            <Button onClick={addMore} className="mr-2" color="secondary">Go to products</Button>
        </Container>)

    }

    return (<Container className="offset-md-3 col-md-6">
        {cart.length > 0 && (<Row>
            <Col>
                <b>Product Name</b>
            </Col>
            <Col xs="1">
                <b> Price</b>
            </Col>
        </Row>)}
        {cart.map((cart, index) => {
            return (<div key={index}>
                <Row>
                    <Col>
                        {cart.name}
                    </Col>
                    <Col xs="1">
                        {cart.price}
                    </Col>
                </Row>
            </div>)
        })}

        <div className="d-flex justify-content-end">
            <Button onClick={addMore} className="mr-2" color="secondary">Go to products</Button>
            <Button color="primary">Checkout </Button>
        </div>
    </Container>)
}