import React, { useState } from "react";
import axios from "axios";
import Form from "../../components/Form";
import Row from "../../components/Row";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ResetPassword = (props) => {

    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            password,
            id: props.match.params.id
        };
        axios({
            url: "/auth/reset",
            data: body,
            method: "patch"
        }).then(() => {
            props.history.push("/login");
        })
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="New Password"
                />
            </Row>
            <Row>
                <Button>Save</Button>
            </Row>
        </Form>
    );
};

export default ResetPassword;

