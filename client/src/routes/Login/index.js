import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Row from "../../components/Row";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            email,
            password,
        };
        axios({
            url: "/auth/login",
            data: body,
            method: "post",
        }).then(res => {
            localStorage.setItem("cwcToken", res.data.token);
            props.history.push("/");
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
                <Button>Sign In</Button>
            </Row>
            <Row>
                <Link to="/forgot">Forgot Password</Link>
            </Row>
            <Row>
                <Link to="/signup">Create Account</Link>
            </Row>
        </Form>
    );
};

export default Login;