import React from 'react';
import { Button, FormGroup, Form, Label, Input, Container } from 'reactstrap';
import { useNavigate } from "@reach/router"



export const SignUp = () => {
    const navigate = useNavigate()
    const onSignUp = () => {

    }

    const onBack = () => {
        navigate(`/`)
    }

    return (
        <div className="centerContainer d-flex justify-content-center align-items-center">
            <Container className="offset-md-3 col-md-6 formContainer">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <Form>
                            <legend>SignUp</legend>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input type="text" name="firstName" id="firstName" placeholder="Enter First Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input type="text" name="address" id="address" placeholder="Enter Address" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Enter Password" />
                            </FormGroup>
                            <Button type="submit" className="mr-2" color="primary" onClick={onSignUp} >SignUp</Button>
                            <Button type="submit" color="secondary" onClick={onBack} >Back</Button>
                        </Form>

                    </div>
                </div>
            </Container>
        </div>)
}