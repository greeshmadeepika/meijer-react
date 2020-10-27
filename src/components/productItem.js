
import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, CardSubtitle,
    Row,
    Col
} from 'reactstrap';
import './productItem.scss'

const ProductItem = ({ name, price, image, code, onRemove, onAdd, exist }) => {

    return (<Card className="my-2">
        <Row>
            <Col>
                <CardImg top className="imageContainer" src={image} alt={name} />
            </Col>
            <Col>
                <div className="d-flex">
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>Code:  {code}</CardSubtitle>
                        <CardText>{price}</CardText>
                        {exist ? <Button color="danger" onClick={onRemove}>Remove</Button> : <Button color="primary" onClick={onAdd}>Add</Button>}
                    </CardBody>
                </div>
            </Col>
        </Row>
    </Card>);
}


ProductItem.prototype = {
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    code: PropTypes.number,
    exist: PropTypes.bool,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}
export default ProductItem;