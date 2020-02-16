import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
    width: 50px;
    height: auto;
    cursor: pointer;
    ${props => props.loaded ? "width: 400px" : ""};
    transition: all 1s ease-in;
`;

const Private = (props) => {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setLoaded(true);
    }, []);

    const token = localStorage.getItem("cwcToken");
    const logout = () => {
        localStorage.removeItem("cwcToken");
        props.history.push("/login");
    }
    if (token) {
        return (
            <Image loaded={loaded} onClick={logout} alt="my face" src="thumbsup.png" />
        );
    } else {
        return (
            <Redirect to="/login" />
        )
    }
};

export default Private;
