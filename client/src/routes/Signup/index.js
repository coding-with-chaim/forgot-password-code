import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Row from "../../components/Row";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            email,
            password,
        };
        axios({
            method: "post",
            url: "/auth/signup",
            data: body,
        }).then(() => {
            props.history.push("/login");
        })
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Input
                    name="email"
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Row>
            <Row>
                <Input
                    name="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Row>
            <Row>
                <Button>Create account</Button>
            </Row>
            <Row>
                <Link to="/login">Sign In</Link>
            </Row>
        </Form>
    );
};

export default Signup;
