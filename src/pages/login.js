import { Link } from '@reach/router';
import React from 'react';
import { Button, FormGroup, Form, Label, Input, Container, Row } from 'reactstrap';
import { useNavigate } from "@reach/router"


export const Login = () => {
    const navigate = useNavigate();
    
    const onSubmit = (e) => {
        e.preventDefault();
       navigate('/products')
    }
    return (
        <div className="centerContainer d-flex justify-content-center align-items-center">
        <Container className="offset-md-3 col-md-6 formContainer">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Form>
                        <legend>Login</legend>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter Password" />
                        </FormGroup>
                        <Button type="submit" color="primary" onClick={onSubmit}>Login</Button>
                        <Row>
                             Dont have account ? <Link to="/signup">Signup here</Link>
                        </Row>
                    </Form>

                </div>
            </div>
        </Container>
        </div>)
}